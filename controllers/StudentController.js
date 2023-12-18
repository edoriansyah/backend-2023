class StudentController {
    index(req, res) {
        const data = {
            message: "Menampilkan data student",
            data: []
        }
        res.json(data);
    }

    store(req, res) {
        const { nama } = req.body;
        const data = {
            message: `Menambahkan data student ${nama}`,
            data: []
        }
        res.json(data);
    }
}

const studentController = new StudentController();
module.exports = studentController;