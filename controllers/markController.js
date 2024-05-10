// controllers/markController.js

const Mark = require('../models/mark');
const Student = require('../models/student');


const addMark = async (req, res) => {
  try {
    const { student_id, subject, marks } = req.body;
    await Mark.create({ student_id, subject, marks });
    res.status(201).send("Marks added successfully");
  } catch (error) {
    console.error("Error adding marks:", error);
    res.status(500).send("Internal server error");
  }
};

const getAllMarks = async (req, res) => {
  try {
    const marks = await Mark.findAll();
    res.status(200).json(marks);
  } catch (error) {
    console.error("Error getting all marks:", error);
    res.status(500).send("Internal server error");
  }
};






const getMarkById = async (req, res) => {
  try {
    const markId = parseInt(req.params.id);
    if (isNaN(markId)) {
      res.status(400).send("Invalid ID provided");
      return;
    }
    const mark = await Mark.findByPk(markId, {
      include: [{ model: Student, as: 'student' }] // Include the Student model
    });
    if (!mark) {
      res.status(404).send("Mark Not Found");
      return;
    }
    res.status(200).json(mark);
  } catch (error) {
    console.error("Error getting mark by ID:", error);
    res.status(500).send("Internal server error");
  }
}







// const getMarkById = async (req, res) => {
//   try {
//     const markId = parseInt(req.params.id);
//     if (isNaN(markId)) {
//       res.status(400).send("Invalid ID provided");
//       return;
//     }
//     const mark = await Mark.findByPk(markId, {
//       include: [{ model: Student, as: 'student' }] // Include the Student model
//     });
//     if (!mark) {
//       res.status(404).send("Mark Not Found");
//       return;
//     }
//     res.status(200).json(mark);
//   } catch (error) {
//     console.error("Error getting mark by ID:", error);
//     res.status(500).send("Internal server error");
//   }
// };





// const getMarkById = async (req, res) => {
//   try {
//     const markId = parseInt(req.params.id);
//     if (isNaN(markId)) {
//       res.status(400).send("Invalid ID provided");
//       return;
//     }
//     const mark = await Mark.findByPk(markId);
//     if (!mark) {
//       res.status(404).send("Mark Not Found");
//       return;
//     }
//     res.status(200).json(mark);
//   } catch (error) {
//     console.error("Error getting mark by ID:", error);
//     res.status(500).send("Internal server error");
//   }
// };

const updateMark = async (req, res) => {
  try {
    const markId = parseInt(req.params.id);
    if (isNaN(markId)) {
      res.status(400).send("Invalid ID provided");
      return;
    }
    const { subject, marks } = req.body;
    const updatedMark = await Mark.update({ subject, marks }, { where: { id: markId } });
    if (updatedMark[0] === 0) {
      res.status(404).send("Mark Not Found");
      return;
    }
    res.status(200).send("Mark updated successfully");
  } catch (error) {
    console.error("Error updating mark:", error);
    res.status(500).send("Internal server error");
  }
};



const removeMark = async (req, res) => {
  try {
    // Your code for removing the mark
  } catch (error) {
    console.error("Error removing mark:", error);
    res.status(500).send("Internal server error");
  }
};

module.exports = {
  addMark,
  getAllMarks,
  getMarkById,
  updateMark, // Ensure this function is included in the exports
  removeMark,
};







































// const pool = require("../db");
// const queries = require("../src/student/marks.queries");


// //@POST METHOD

// const addMarks = (req, res) => {

//   const { student_id, subject, marks } = req.body;

//  // console.log("Request body:", req.body); 

//   pool.query(queries.addMarks, [student_id, subject, marks], (error, results) => {
//     if (error) {
//       console.error("Error adding marks:", error);
//       res.status(500).send("Internal server error");
//     } else {
//         //console.log("added");
//       res.status(201).send("Marks added successfully");
//     }
//   });
// };





// //@GET LIST ALL METHOD


// const getAllMarks = (req, res) => {
//   pool.query(queries.getMarks, (error, results) => {
//     if (error) {
//       console.error("Error getting all marks:", error);
//       res.status(500).send("Internal server error");
//     } else {
//       res.status(200).json(results.rows);
//     }
//   });
// };




// //@GET ID BY METHOD


// const getMarksById = (req, res) => {
//     const markId = parseInt(req.params.id);
//     if (isNaN(markId)) {
//         res.status(400).send("Invalid ID provided");
//         return;
//     }

//     pool.query(queries.getMarksById, [markId], (error, results) => {
//         if (error) {
//             console.error("Error getting marks by ID:", error);
//             res.status(500).send("Internal server error");
//             return;
//         }

//         const mark = results.rows[0];
//         if (!mark) {
//             res.status(404).send("Mark Not Found");
//             return;
//         }

//         // Fetch student details based on student_id
//         pool.query(
//             queries.getStudentById,[mark.student_id], (studentError, studentResults) => {
//                 if (studentError) {
//                     console.error("Error getting student by ID:", studentError);
//                     res.status(500).send("Internal server error");
//                     return;
//                 }

//                 const student = studentResults.rows[0];
//                 if (!student) {
//                     res.status(404).send("Student Not Found");
//                     return;
//                 }

//                 // Combine mark and student details
//                 const markWithStudent = {
//                     id: mark.id,
//                     student: student,
//                     subject: mark.subject,
//                     marks: mark.marks
//                 };
//                 res.status(200).json(markWithStudent);
//             }
//         );
//     });
// };



// //@PUT DETAILS METHOD

// const updateMarks = (req, res) => {
//   const id = parseInt(req.params.id);
//   if (isNaN(id)) {
//     res.status(400).send("Invalid ID provided");
//     return;
//   }

//   const { subject, marks } = req.body;

//   pool.query(queries.updateMarks,[subject, marks, id],  (error, results) => {
//       if (error) {
//         console.error("Error updating marks:", error);
//         res.status(500).send("Internal server error");
//       } else {
//         res.status(200).send("Marks updated successfully");
//       }
//     }
//   );
// };





// //@DELETE METHOD


// const removeMarks = (req, res) => {
//   const id = parseInt(req.params.id);
//   if (isNaN(id)) {
//     res.status(400).send("Invalid ID provided");
//     return;
//   }

//   pool.query(queries.removeMarks, [id], (error, results) => {
//     if (error) {
//       console.error("Error removing marks:", error);
//       res.status(500).send("Internal server error");
//     } else {
//       res.status(200).send("Marks removed successfully");
//     }
//   });
// };



// module.exports = {
//   addMarks,
//   getAllMarks,
//   getMarksById,
//   updateMarks,
//   removeMarks,
// };
