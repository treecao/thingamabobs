const router = require('express').Router();

const { User } = require('../../models');

router.post('/', async (req, res) => {
    console.log("signup route")
  try {
    const userData = await User.create(req.body);
console.log(userData); 
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.username = userData.name; 
      res.status(200).json(userData);

    });
    
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  console.log("login route");
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
     console.log(validPassword ,"^^^")
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'It was this one' });
      return;
    }

    req.session.save(() => {
      
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.username = userData.name; 
      res.status(200).json(userData);
      
    });
    
   
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;