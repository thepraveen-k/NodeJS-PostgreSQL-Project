const express = require('express');
const router = express.Router();
const markController = require('../controllers/markController');
const { addMarkValidation } = require('../validation/markValidation');

// Import any middleware or validation functions if required

// POST route to add a new mark
router.post("/", addMarkValidation, markController.addMark);

// GET route to retrieve all marks
router.get("/", markController.getAllMarks);

// GET route to retrieve a mark by ID
router.get("/:id", markController.getMarkById);

// PUT route to update a mark by ID
router.put("/:id", markController.updateMark);

// DELETE route to remove a mark by ID
router.delete("/:id", markController.removeMark);

module.exports = router;


















// const Router = require("express");
// const controller = require("../controllers/marks.controller");
// const { addMarksValidation } = require("../validation/marks.validation");

// const router = Router();

// router.post("/", addMarksValidation,controller.addMarks);
// router.get("/", controller.getAllMarks);
// router.get("/:id", controller.getMarksById);
// router.put("/:id", controller.updateMarks);
// router.delete("/:id", controller.removeMarks);

// module.exports = router;
