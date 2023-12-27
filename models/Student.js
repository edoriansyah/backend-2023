// import database
const db = require('../config/database');

// membuat class model Student
class Student {

    /**
     * Method untuk menampilkan semua data student
     */
    static all(){
        // return Promise sebagai solusi Asynchronous
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM students`;
            db.query(query, (err, results) => {
                return resolve(results);
            });
        });
    }
}

// export class Student
module.exports = Student;