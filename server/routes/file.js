const express = require('express');
const fileRouter = express.Router();
const mongoose = require('mongoose');
const File = require('../models/File');
const Teacher = require('../models/Teacher');

module.exports =  (upload) => {
    const url = process.env.MONGO_URI;
    const connect = mongoose.createConnection(
                        url, 
                        { useNewUrlParser: true, useUnifiedTopology: true }
                    );

    let gfs;

    connect.once('open', () => {
        // initialize stream
        gfs = new mongoose.mongo.GridFSBucket(connect.db, {
            bucketName: "uploads"
        });
    });

    /*
        POST: Upload a single image/file to File collection
    */

    fileRouter.route('/test')
        .post((req, res) => {
            console.log(req);
        })
        .get((req, res) => {
            console.log('helllo');
        })

    fileRouter.route('/')
        .post(upload.single('file'),   (req, res, next) => {
            File.findOne({ caption: req.body.caption })
                .then((image) => {
                    console.log('routeeeeeeeeeeeeeeeeeeeeeeeeee');
                    console.log(req.file);
                    if (image) {
                        return res.status(200).json({
                            success: false,
                            message: 'File already exists',
                        });
                    }
                    Teacher.findOne(
                        { _id: req.body.teacherId },
                        (err, obj) => {
                            if(err)
                                throw err;

                            let newFile = new File({
                                caption: req.body.caption,
                                filename: req.file.filename,
                                fileId: req.file.id,
                                length: req.file.size,
                                contentType: req.file.contentType,
                                classId: req.body.classId,
                                teacherName: obj.name,
                                teacherEmail: obj.email
                            });

                            newFile.save()
                                .then((file) => {

                                    res.status(200).json({
                                        success: true,
                                        file,
                                    });
                                })
                                .catch(err => res.status(500).json(err));
                        }
                    );
                })
                .catch(err => res.status(500).json(err));
        })
        .get((req, res, next) => {
            File.find({})
                .then(files_ => {
                    res.status(200).json({
                        success: true,
                        files: files_,
                    });
                })
                .catch(err => res.status(500).json(err));
        });

    /*
        GET : All files of a class
    */
    fileRouter.route('/class/:classId')
        .get((req, res) => {
            // console.log(req.params.classId)
            File.find({ classId: req.params.classId })
                .then(files_ => {
                    res.status(200).json({
                        success: true,
                        files: files_
                    });
                })
                .catch(err => res.status(500).json(err));
        })

    /*
        GET: Delete an image from the collection
    */
    fileRouter.route('/delete/:id')
        .get((req, res, next) => {
            File.findOne({ _id: req.params.id })
                .then((image) => {
                    if (image) {
                        File.deleteOne({ _id: req.params.id })
                            .then(() => {
                                return res.status(200).json({
                                    success: true,
                                    message: `File with ID: ${req.params.id} deleted`,
                                });
                            })
                            .catch(err => { return res.status(500).json(err) });
                    } else {
                        res.status(200).json({
                            success: false,
                            message: `File with ID: ${req.params.id} not found`,
                        });
                    }
                })
                .catch(err => res.status(500).json(err));
        });

    /*
        GET: Fetches all the files in the uploads collection
    */
    fileRouter.route('/files')
        .get((req, res, next) => {
            gfs.find().toArray((err, files) => {
                if (!files || files.length === 0) {
                    return res.status(200).json({
                        success: false,
                        message: 'No files available'
                    });
                }

                res.status(200).json({
                    success: true,
                    files,
                });
            });
        });

    /*
        GET: Fetches a particular file by filename
    */
    fileRouter.route('/file/:filename')
        .get((req, res, next) => {
            gfs.find({ filename: req.params.filename }).toArray((err, files) => {
                if (!files[0] || files.length === 0) {
                    return res.status(200).json({
                        success: false,
                        message: 'No files available',
                    });
                }

                // res.status(200).json({
                //     success: true,
                //     file: files[0],
                // });
                gfs.openDownloadStreamByName(req.params.filename).pipe(res);
            });
        });

    return fileRouter;
};
