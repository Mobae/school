const { Router } = require('express');
const Class = require('../models/Class');
const Teacher = require('../models/Teacher');
const Student = require('../models/Student');

router = Router();

router.get("/view", async(req, res) => {
    res.send('Classes Get Triggered !!');
});

router.post('/add', async(req, res) => {
    try {
        const name = req.body.name;
        const payload = {
            name
        }
        console.log(payload);
        const newClass = await Class.create(payload);

        res.status(200).json({
            sucess: true,
            data: newClass
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            sucess: false,
            data: 'Server error'
        })
    }
});

router.post("/classTeacher", async(req, res) => {
    try {
        const class_ = await Class.findById(req.body.class);
        const teacher = await Teacher.findById(req.body.classTeacher);

        teacher.teacherClass = class_.id;
        teacher.save();

        class_.classTeacher = req.body.classTeacher;
        class_.save();

        return res.status(200).json({ 'class': class_ });

    } catch(err) {
        
    }
})

router.post("/subTeacher", async(req, res) => {
    try {
        const class_ = await Class.findById(req.body.class);
        const subTeacher = req.body.subTeacher;
        class_.subTeachers.push(subTeacher);
        class_.save();

        return res.status(200).json({ 'class': class_ });
    } catch (err) {
        console.log(err);
        return res.json({ 'error': err });
    }
})

module.exports = router;