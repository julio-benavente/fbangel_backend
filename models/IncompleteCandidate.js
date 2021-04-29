const mongoose = require("mongoose");

const IncompleteCandidateSchema = new mongoose.Schema({
  haveFriends: {
    type: String,
    enum: ["yes", "no"],
  },
  isAdult: {
    type: String,
    enum: ["yes", "no"],
  },
  accountIsReal: {
    type: String,
    enum: ["yes", "no"],
  },
  isFirstTime: {
    type: String,
    enum: ["yes", "no"],
  },
  isOneYear: {
    type: String,
    enum: ["yes", "no"],
  },
  name: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
  },
  country: {
    type: String,
  },
  city: {
    type: String,
  },
  birthday: {
    type: Date,
  },
  phone: {
    type: Number,
  },
  frecuency: {
    type: String,
  },
  devices: {
    type: [String],
  },
  os: {
    type: [String],
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  code2FA: {
    type: Number,
  },
  paymentMethod: {
    type: String,
  },
  paypalEmail: {
    type: String,
  },
  paypalEmailConfirmation: {
    type: String,
  },
  holderName: {
    type: String,
  },
  bankAngency: {
    type: String,
  },
  bankAccountCode: {
    type: Number,
  },
  referral: {
    type: String,
  },
  termsAndConditions: {
    type: String,
    enum: ["yes", "no"],
  },
  gdprAgreement: {
    type: String,
    enum: ["yes", "no"],
  },
  ip: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = IncompleteCandidate = mongoose.model(
  "incompleteCandidate",
  IncompleteCandidateSchema
);
