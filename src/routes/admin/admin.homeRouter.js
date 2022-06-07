import express from 'express';
let router = express.Router();
const AdminHomeController = require('../../controller/admin/admin.homeController');
const AdminBookingController = require('../../controller/admin/admin.bookingController');
const AdminBillController = require('../../controller/admin/admin.billController');
router.get('/', AdminHomeController.Home);

//quản lý phòng
router.get('/booking-list', AdminBookingController.BookingList);
router.get('/booking', AdminBookingController.Booking);
router.get('/room-list', AdminBookingController.RoomList);

//hóa đơn
router.get('/bill', AdminBillController.Bill);

module.exports = router;