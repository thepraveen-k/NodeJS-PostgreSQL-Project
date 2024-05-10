const Student = require('../models/student'); // Adjust the import path if necessary
const { Op } = require('sequelize');




const addStudent = async (req, res) => {
  try {
    const { name, email, age, dob } = req.body;
    const student = await Student.create({ name, email, age, dob });
    res.status(201).send("Student Created Successfully");
  } catch (error) {
    console.error("Error adding student:", error);
    res.status(500).send("Internal server error");
  }
};  





const getStudents = async (req, res) => {
  try {
    const searchTerm = req.query.search || "";
    const students = await Student.findAll({ where: { name: { [Op.iLike]: `%${searchTerm}%` } } });

    // Convert JSON response to string
    const studentsString = JSON.stringify(students);
    // Send the string response
    res.status(200).send(studentsString);
    
    //res.status(200).json(students);
  } catch (error) {
    console.error("Error getting students:", error);
    res.status(500).send("Internal server error");
  }
};






const getStudentById = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Student.findByPk(id);
    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404).send("Student Not Found");
    }
  } catch (error) {
    console.error("Error getting student by ID:", error);
    res.status(500).send("Internal server error");
  }
};






const updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email, age, dob } = req.body;
    const [updatedCount] = await Student.update({ name, email, age, dob }, { where: { id } });
    if (updatedCount === 1) {
      res.status(200).send("Student Updated Successfully");
    } else {
      res.status(404).send("Student Not Found");
    }
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).send("Internal server error");
  }
};





const removeStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedCount = await Student.destroy({ where: { id } });
    if (deletedCount === 1) {
      res.status(200).send("Student Removed Successfully");
    } else {
      res.status(404).send("Student Not Found");
    }
  } catch (error) {
    console.error("Error removing student:", error);
    res.status(500).send("Internal server error");
  }
};

module.exports = {
  addStudent,
  getStudents,
  getStudentById,
  updateStudent,
  removeStudent
};

