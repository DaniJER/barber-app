const reservations = require("../models/reservations");

exports.createReservation = async (req, res) => {
  try {
    const reservation = new reservations(req, body);
    await reservation.save();
    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al crear reserva" });
  }
};

exports.getReservations = async (req, res) => {
  try {
    const reservations = await reservations.find();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener reservas" });
  }
};
