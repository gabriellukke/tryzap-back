const { Schema, model } = require('mongoose');

const messageSchema = Schema({
  _id: Schema.Types.ObjectId,
  message: String,
});

const Message = model('Message', messageSchema);

module.exports = Message;
