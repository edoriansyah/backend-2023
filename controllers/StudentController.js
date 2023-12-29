// import model Student
const Student = require("../models/Student");

class StudentController {
  // menambahkan keyword async memberitahu proses asynchronous
  async index(req, res) {
    // memanggil method static all dengan async await
    const students = await Student.all();

    if (students.length > 0) {
      const data = {
        message: "Menampilkan data student",
        data: students,
      };

      return res.status(200).json(data);
    }

    const data = {
      message: "Data student kosong",
    };

    return res.status(200).json(data);
  }

  async store(req, res) {
    const { nama, nim, email, jurusan } = req.body;

    // menambahkan validasi data
    if (!nama || !nim || !email || !jurusan) {
      const data = {
        message: "Semua data harus dikirim",
      };

      return res.status(422).json(data);
    }

    const student = await Student.create(req.body);

    const data = {
      message: `Menambahkan data student`,
      data: student,
    };

    return res.status(201).json(data);
  }

  async update(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      const student = await Student.update(id, req.body);
      const data = {
        message: `Mengedit data student`,
        data: student,
      };

      return res.status(200).json(data);
    }

    const data = {
      message: "Student tidak ditemukan",
    };

    return res.status(404).json(data);
  }

  async destroy(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      await Student.delete(id);
      const data = {
        message: `Menghapus data student`,
      };

      return res.status(200).json(data);
    }

    const data = {
      message: "Student tidak ditemukan",
    };

    return res.status(404).json(data);
  }

  async show(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      const data = {
        message: "Menampilkan detail student",
        data: student,
      };

      return res.status(200).json(data);
    }

    const data = {
      message: "Student tidak ditemukan",
    };

    return res.status(404).json(data);
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
