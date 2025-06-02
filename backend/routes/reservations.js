const express = require("express");
const router = express.Router();
const {
  createReservation,
  getReservations,
} = require("../controllers/reservationsController");

router.get("/", getReservations);
router.post("/", createReservation);

module.exports = router;
