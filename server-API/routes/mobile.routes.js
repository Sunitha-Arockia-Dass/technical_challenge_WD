const router = require("express").Router();
const phones=require('../../data/phones.json')

router.get("/", (req, res, next) => {
  res.json(phones);
});

router.get("/:id", (req, res, next) => {
    const phoneId=req.params.id
    let singlePhone = phones.filter((phone)=> phone.id == phoneId )
  res.json(singlePhone);
});

module.exports = router;
