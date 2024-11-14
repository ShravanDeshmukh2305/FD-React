const mongoose = require("mongoose");

const BankSchema = new mongoose.Schema(
  {
    // High Priority Fields
    logoUrl: { type: String, required: true }, // Logo URL field
    name: { type: String, required: true },
    return2y: { type: Number }, // 2-year return
    return5y: { type: Number }, // 5-year return
    return6y: { type: Number }, // 6-year return
    maxFdRate: { type: Number }, // Max FD rate
    bankAum: { type: Number }, // Bank AUM
    rating: { type: Number }, // Bank rating
    capitalRatio: { type: Number }, // Capital adequacy ratio
    description: { type: String }, // Bank description
    ceo: { type: String }, // CEO name
    ceoPhotoUrl: { type: String }, // CEO photo URL

    // Medium Priority Fields
    meanTime: { type: String },
    companyType: { type: String },
    listedOn: { type: String },
    bankFoundedDate: { type: Date },
    numberOfBranches: { type: Number },

    // Low Priority Fields
    taxFree: { type: Boolean }, // Indicates if the bank offers tax-free investments
    digcInsures: { type: Boolean }, // DICGC insurance coverage
    keyFacts: { type: String },
    minInvestment: { type: Number },
    lockingPeriod: { type: String },
    compoundingFrequency: { type: String },
    exitPenalty: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bank", BankSchema);
