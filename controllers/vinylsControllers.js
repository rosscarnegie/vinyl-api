const express = require("express");
const Vinyl = require('./../models/Vinyl')

const router = express.Router();


router.get("/seeAll", (req, res) => {
    Vinyl.find()
        .then((vinyls => res.json({
            vinyls: vinyls
        })))
})


router.get("/id/:id", (req, res) => {
    Vinyl.findById(req.params.id)
        .then((vinyl => res.json({
            status: 200,
            vinyl: vinyl
        })))
})


router.delete("/:id", (req, res) => {
    Vinyl.findByIdAndDelete(req.params.id)
        Vinyl.find({}).then((allVinyls) => {
            res.json(allVinyls)
        })
})


router.post('/', (req, res) => {
    const data = req.body
    console.log('req.body is ', data)
    Vinyl.create(data)
        .then((vinyl) => res.json({
            status: 200,
            vinyl: vinyl
        }))
})



module.exports = router;