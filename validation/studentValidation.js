const userSchema = require('./studentSchema')

module.exports = {
    addStudentValidation: async (req, res, next) => {

        
        if (req.url === '/uploads' && req.method === 'POST') {
            next();
        } else {


            const { error } = userSchema.user.validate(req.body);
            if (error) {
                res.json({
                    success: 0,
                    message: error.details[0].message 
                });

                
            } else {
                next();
            }
        }
    }
}
