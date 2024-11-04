const { Router } = require("express");
const {auth} = require("../middleware/authMiddleware")
const { getBookings, getBooking, createBooking, updateBooking, deleteBooking } = require("../controllers/bookingController");

const router = Router();
router.get("/", auth, getBookings);
router.get("/:id", getBooking);
router.post("/", auth, createBooking);
router.put("/:id", auth, updateBooking)
router.delete("/:id", auth, deleteBooking)

module.exports = router; 