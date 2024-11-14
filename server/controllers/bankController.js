// server/controllers/bankController.js
const bankService = require("../services/bankService");

exports.createBank = async (req, res) => {
  try {
    const bank = await bankService.createBank(req.body);
    res.status(201).json(bank);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateBank = async (req, res) => {
  try {
    const bank = await bankService.updateBank(req.params.id, req.body);
    res.json(bank);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBanks = async (req, res) => {
  try {
    const banks = await bankService.getBanks();
    res.json(banks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
