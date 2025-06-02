const mongoose = require("mongoose");

const reservaSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  phone: { type: Number, required: true },
  date: { type: Date, required: true },
  service: { type: String, required: true },
});

module.exports = mongoose.model("Reserva", reservaSchema);
