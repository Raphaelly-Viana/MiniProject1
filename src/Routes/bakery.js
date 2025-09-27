const express = require("express");
const router = express.Router();
const {
    createBakery,
    getBakeries,
    removeBakeries,
    updateBakeryAction, 
    } = require('../Controllers/bakeryController');

router.get("/", (req, res) => {
    res.json(getBakeries());
});

router.post("/", (req, res) => {
    const body = req.body;
    const newBakery = createBakery(body);
    res.json(newBakery);
});
//create a bakeries
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const isDeleted = removeBakeries(id);
    if (isDeleted) {
        res.sendStatus(204);
    } else {
        res.sendStatus(403);
    }
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const updatedBakery = updateBakeryAction(id, body);
    if (updatedBakery) {
        res.json(updatedBakery);    
    } else {
        res.sendStatus(403);
    }
});

module.exports = router;