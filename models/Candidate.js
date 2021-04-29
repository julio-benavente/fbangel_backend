const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
  haveFriends: {
    type: String,
    enum: ["yes", "no"],
    required: true,
  },
  isAdult: {
    type: String,
    enum: ["yes", "no"],
    required: true,
  },
  accountIsReal: {
    type: String,
    enum: ["yes", "no"],
    required: true,
  },
  isFirstTime: {
    type: String,
    enum: ["yes", "no"],
    required: true,
  },
  isOneYear: {
    type: String,
    enum: ["yes", "no"],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  frecuency: {
    type: String,
    required: true,
  },
  devices: {
    type: [String],
    required: true,
  },
  os: {
    type: [String],
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  code2FA: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  paypalEmail: {
    type: String,
    required: function () {
      return this.paymentMethod === "paypal";
    },
  },
  paypalEmailConfirmation: {
    type: String,
    required: function () {
      return this.paymentMethod === "paypal";
    },
  },
  holderName: {
    type: String,
    required: function () {
      return this.paymentMethod === "bank-peru";
    },
  },
  bankAngency: {
    type: String,
    required: function () {
      return this.paymentMethod === "bank-peru";
    },
  },
  bankAccountCode: {
    type: Number,
    required: function () {
      return this.paymentMethod === "bank-peru";
    },
  },
  referral: {
    type: String,
  },
  termsAndConditions: {
    type: String,
    required: true,
    enum: ["yes", "no"],
  },
  gdprAgreement: {
    type: String,
    required: true,
    enum: ["yes", "no"],
  },
  ip: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

module.exports = Candidate = mongoose.model("candidate", CandidateSchema);
