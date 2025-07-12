
const mongoose = require('mongoose');

const ConsentSchema = new mongoose.Schema({
  userId: String,
  consentType: String,
  given: Boolean,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Consent', ConsentSchema);
