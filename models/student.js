const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Student extends Model {}

Student.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  dob: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Student',
  tableName: 'students',
  timestamps: false
});

module.exports = Student;
