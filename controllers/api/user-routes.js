const router = require('express').Router();

const { User } = require('../../models');

router.post('/', async (req, res) => {
    console.log("signup route")
  try {
    const userData = await User.create(req.body);

    // req.session.save(() => {
    //   req.session.user_id = userData.id;
    //   req.session.logged_in = true;

    //   res.status(200).json(userData);
    // });
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  console.log("login route");
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    // debugger;
    // console.log("RIGHTT HERE", userData);
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

    // req.session.save(() => {
    //   console.log("this is running 1")
    //   req.session.user_id = userData.id;
    //   console.log("this is running 2")
    //   req.session.logged_in = true;
    //   console.log("this is running 3")
      
    //   res.status(200).json({ user: userData, message: 'You are now logged in!' });
    //   console.log("this is running 4")
    //   return;
      
    // });
    
    res.status(200).json(userData);
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