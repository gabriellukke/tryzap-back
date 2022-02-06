const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    username: {
      type: String,
      required: [true, 'Username is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password is too short'],
    },
    status: String,
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
  },
  { 
    timestamps: { createdAt: true, updatedAt: true },
  },
);

const User = model('User', userSchema);

module.exports = User;
