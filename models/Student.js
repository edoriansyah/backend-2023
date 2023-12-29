// import database
const db = require("../config/database");

// membuat class model Student
class Student {
  /**
   * Method untuk menampilkan semua data student
   */
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM students`;
      db.query(query, (err, results) => {
        return resolve(results);
      });
    });
  }

  static async create(data) {
    // melakukan insert data ke database
    const id = await new Promise((resolve, reject) => {
      const sql = `INSERT INTO students SET ?`;
      db.query(sql, data, (err, results) => {
        resolve(results.insertId);
      });
    });

    // menampilkan data yang baru saja diinsert
    const student = this.find(id);
    return student;
  }

  static async update(id, data) {
    // melakukan update data ke database
    await new Promise((resolve, reject) => {
      const sql = `UPDATE students SET ? WHERE id = ?`;
      db.query(sql, [data, id], (err, results) => {
        resolve(results);
      });
    });

    // menampilkan data yang baru saja diupdate
    const student = await this.find(id);
    return student;
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM students WHERE id = ?`;
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }

  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM students WHERE id = ?`;
      db.query(sql, id, (err, results) => {
        const [student] = results;
        resolve(student);
      });
    });
  }
}

// export class Student
module.exports = Student;
