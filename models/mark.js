const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');
const Student = require('./student');

class Mark extends Model {}

Mark.init({
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false
  },
  marks: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Mark',
  tableName: 'marks',
  timestamps: false // Enable timestamps
});


// Define association with Student model
Mark.belongsTo(Student, { foreignKey: 'student_id', as: 'student' });

module.exports = Mark;
