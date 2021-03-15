const express = require('express');
const passport = require('passport');
const Category = require('../models/category.model');
const router = express.Router();

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { name, slug, description } = req.body;
  const category = new Category({
    name,
    slug,
    description
  })
  category.save((err) => {
    if (err) {
      res.json(err).status(500);
    }
    else {
      res.send("Data inserted");
    }

    res.json(category);
  })
})

router.get('/', (req, res) => {
  Category.find((err, data) => {
    if (err) {
      console.log(err);
    }
    else {
      res.send(data);
    }
  })
})


router.get('/:id', (req, res) => {
  Category.findById(req.params.id, (err, data) => {
    if (err) return console.error(err)
    try {
      res.json(data)
    } catch (error) {
      console.log("errror getting results")
      console.log(error)
    }
  })
})


router.put('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { name, slug, description } = req.body;
  Category.where({ _id: req.params.id }).update({ $set: { name, slug, description } }, (err) => {
    if (err) {
      res.json(err).status(500);
    }
    else {
      res.send("Data updated");
    }
  })
})

router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Category.deleteOne({ _id: req.params.id }, (err) => {
    if (!err) {
      res.send("Data deleted");
    }
    else {
      res.json(err).status(500);
    }
  })
})

module.exports = router;

