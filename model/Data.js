const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  data: [
    {
      key: {
        type: String,
        required: true,
      },
      task: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a User model based on the schema
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;
