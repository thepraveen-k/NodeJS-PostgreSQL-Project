// routes/studentRoutes.js

const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const { addStudentValidation } = require('../validation/studentValidation');

// Routes for Students
router.post("/", addStudentValidation,studentController.addStudent);
router.get("/", studentController.getStudents);
router.get("/:id", studentController.getStudentById); // Assuming you have a controller function for getting a student by ID
router.put("/:id", studentController.updateStudent); // Assuming you have a controller function for updating a student
router.delete("/:id", studentController.removeStudent); // Assuming you have a controller function for deleting a student

module.exports = router;










// const Router = require("express");
// const controller = require("../controllers/controller");
// const { addUserValidation } = require("../validation/user.validation");

// const router = Router();

// router.post("/", addUserValidation, controller.addstudents);
// router.get("/", controller.getStudents);
// router.get("/:id", controller.getStudentsById);
// router.put("/:id", controller.updateStudent);
// router.delete("/:id", controller.removeStudents);

// module.exports = router;