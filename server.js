const express = require('express');
const dotenv = require('dotenv').config();
const studentRoutes = require('./routes/studentRoutes');
const markRoutes = require('./routes/markRoutes');



//const imageRoute = require('./routes/images.route');
const app = express();

app.use(express.json());

// STUDENTS
app.use('/api/v1/students', studentRoutes);
// IMAGES
//app.use('/images', imageRoute);
// MARKS
app.use('/api/v1/marks', markRoutes);




// When an invalid link is used
app.use('*', (req, res, next) => {
    res.status(404).json({
        status: 'failed',
        message: 'Route Not Found'
    });
});

// // Server Connection
const PORT = process.env.APP_PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});





















// const express = require('express')
// const dotenv = require('dotenv').config()
// const studentRoutes = require('./routes/routes')
// const markRoutes = require('./routes/marks.route')
// const imageRoute = require('./routes/images.route')
// const app = express();


// app.use(express.json());


// //STUDENTS
// app.use('/api/v1/students', studentRoutes)
// //IMAGES
// app.use('/images', imageRoute)
// //MARKS
// app.use('/api/v1/marks', markRoutes)


// //when use invalid link
// app.use('*', (req,res,next) => {
//     res.status(404).json({
//         status: 'failed',
//         message: 'Route Not Found'
//     })
// })


// //Server Connection

// const PORT = process.env.APP_PORT || 4000

// app.listen(process.env.APP_PORT, () => {
//     //console.log(`Server running at http://localhost:${APP_PORT}/`);
//     console.log(`Server running at http://localhost:${PORT}/`);

// });