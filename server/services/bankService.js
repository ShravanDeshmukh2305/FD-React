// server/services/bankService.js
const Bank = require("../models/Bank");

// Create a new bank record
const createBank = async (bankData) => {
  try {
    const bank = new Bank(bankData);
    await bank.save();
    return bank;
  } catch (error) {
    throw new Error(`Error creating bank record: ${error.message}`);
  }
};

// Update an existing bank record
const updateBank = async (id, bankData) => {
  try {
    const updatedBank = await Bank.findByIdAndUpdate(id, bankData, { new: true });
    return updatedBank;
  } catch (error) {
    throw new Error(`Error updating bank record: ${error.message}`);
  }
};

// Get all bank records
const getBanks = async () => {
  try {
    const banks = await Bank.find();
    return banks;
  } catch (error) {
    throw new Error(`Error retrieving bank records: ${error.message}`);
  }
};

module.exports = {
  createBank,
  updateBank,
  getBanks,
};
