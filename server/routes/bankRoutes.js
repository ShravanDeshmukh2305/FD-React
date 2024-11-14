const express = require("express");
const { createBank, updateBank, getBanks } = require("../controllers/bankController");

const router = express.Router();

router.post("/banks", createBank);
router.put("/banks/:id", updateBank);
router.get("/banks", getBanks);

module.exports = router;
