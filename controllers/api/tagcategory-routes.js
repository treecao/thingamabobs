const router = require('express').Router();
const { TagCategory, Tag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const tagCategoryData = await TagCategory.findAll({
      // be sure to include its associated Products
      include: [{ model: Tag }],
    });
    res.status(200).json(tagCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one TagCategory by its `id` value
  try {
    const tagCategoryData = await TagCategory.findByPk(req.params.id, {
      // be sure to include its associated Products
      include: [{ model: Tag }],
    });

    if (!tagCategoryData) {
      res.status(404).json({ message: 'No Tag Category found with that id!' });
      return;
    }

    res.status(200).json(tagCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new TagCategory
  try {
    const tagCategoryData = await TagCategory.create({
      tag_category_name: req.body.tag_category_name,
    });
    res.status(200).json(tagCategoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a TagCategory by its `id` value
  TagCategory.update(
    {
      // All the fields you can update and the data attached to the request body.

      tag_category_name: req.body.tag_category_name,
    },
    {
      // Gets the categories based on the id given in the request parameters
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedTagCategory) => {
      // Sends the updated TagCategory as a json response
      res.json(updatedTagCategory);
    })
    .catch((err) => res.json(err));
});

router.delete('/:id', async (req, res) => {
  // delete a TagCategory by its `id` value
  try {
    const tagCategoryData = await TagCategory.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tagCategoryData) {
      res.status(404).json({ message: 'No Tag Category found with that id!' });
      return;
    }

    res.status(200).json(tagCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
