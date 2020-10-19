const express = require('express');
const router = express.Router();
const UserModel = require('../models/User');

router.get("/me", (req, res, next) => {
    UserModel
        .findById(req.session.currentUser.id)
        .then((dbRes) => {
            res.status(200).json(dbRes)
        })
        .catch((dbErr) => {
            res.status(500).json(dbErr)
        })
})
router.patch("/edit", (req, res, next) => {
    // console.log(req.session.currentUser)
    UserModel
        .findByIdAndUpdate(req.session.currentUser, req.body, {new:true})
        .then((dbRes) => {
            res.status(200).json(dbRes)
        })
        .catch((dbErr) => {
            res.status(500).json(dbErr)
        })
})
router.delete("/", (req, res, next) => {
    UserModel
        .findByIdAndRemove(req.session.currentUser.id)
        .then((dbRes) => {
            res.status(200).json(dbRes)
        })
        .catch((dbErr) => {
            res.status(500).json(dbErr)
        })
})


module.exports = router