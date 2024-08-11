
 import { Student } from "../student.model";
import { TStudent } from "./student.interface";

// this is handle business logic here
// Create Student From Database 
const createStudentIntoDb = async (studentData: TStudent) => {
    // this is mongoose build in function 

    // Statics
    const existingUser = await Student.isExistUser(studentData.id);
    if (existingUser) {
        throw new Error("User already exists");
    }
    const result = await Student.create(studentData);


    // Methods 
    // const studentInstaceMethod = new Student(studentData);
    // const userExists = await studentInstaceMethod.isExistUser(studentData.id);
    // if (userExists) {
    //     throw new Error("User already exists");
    // }
    // const result = await studentInstaceMethod.save();


    return result;
}


// Find all student from Database 
const findallStudentFromDb = async () => {
    const result =await  Student.find();
    return result;
}



// Find single student from Database 
const findSingleStudentFromDb = async (id: string) => {
    try {
        const result = await Student.findOne({id });
        return result;
    } catch (error) {
        console.error("Error finding student:", error);
        throw error;
    }
}

// Update single student 
const updateStudentFromDb = async (id: string, studentInput: TStudent) => {
    try{
        const result = await Student.updateOne({id }, { $set: Student });
        return result;
    }
    catch(error){
        console.error("Error updating student:", error);
        throw error;
    }
}

// Delete Single Student from database
const deleteStudentFromDb = async (id:string) => {
    
    try {
        const result = await Student.deleteOne({id });
        console.log("Result delete", result);
        return result;
    } catch (error) {
        console.error("Error deleting student:", error);
        throw error;
    }
}

export const studentServices = {
    createStudentIntoDb,
    findallStudentFromDb,
    findSingleStudentFromDb,
    updateStudentFromDb,
    deleteStudentFromDb
}