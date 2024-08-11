import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();


// will call controller function here
router.post('/create-student', studentController.createStudent) 

router.get('/getAll', studentController.findAllStudent)

router.get('/:studdentid', studentController.findSingleStudent)

router.patch('/:studentid', studentController.updateStudent)
router.delete('/:studentid', studentController.deleteStudent);

export const studentRoute = router