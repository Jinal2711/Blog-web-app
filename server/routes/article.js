const e = require("express");
const express = require("express");
const passport = require("passport");
const Article = require("../models/article.model");
const router = express.Router();

router.post("/", passport.authenticate('jwt', { session: false }), (req, res) => {
    const { title, slug, content, category } = req.body;
    const article = new Article({
        title,
        slug,
        content,
        category
    });
    article.save((err) => {
        if (err) {
            res.json(err).status(500);
        } else {
            res.json(article)
        }
    });
});

router.get("/", (req, res) => {
    Article.find().populate('category').exec((err, data) => { // h
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
});

router.get("/:id", (req, res) => {
    Article.findById(req.params.id).populate('category').exec((err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
});

router.put("/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
    const { title, slug, content, category } = req.body;
    Article.where({ _id: req.params.id }).update({ $set: { title, slug, content, category } }, (err) => {
        if (err) {
            res.json(err).status(500);
        } else {
            res.send("Data updated");
        }
    });
});

router.delete("/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
    Article.remove({ _id: req.params.id }, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Data deleted");
        }
    });
});

module.exports = router;
