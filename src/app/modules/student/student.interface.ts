import { Model, Document } from 'mongoose';
export interface TGuardian {
    FatherName: string;
    fatherOccupation: string;
    FatherContactNo: string;
    MotherName: string;
    MotherOccupation: string;
    MotherContactNo: string;
}
export interface TUserNameInterface {
    firstName: string;
    middleName: string;
    lastName: string;
}
export interface TLocalGuardian {
    name: string;
    relation: string;
    contactNo: string;
}
export interface TStudent {
    id:string;
    name: TUserNameInterface,
    gender: "Male" | "Female";
    email: string;
    dateOfBirth: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
    guardian: TGuardian;
    localGuardian: TLocalGuardian,
    bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    isActive: "active" | "inactive";
}

// Statics 
export interface StudentModel extends Model<TStudent>{
    isExistUser(id: string): Promise<TStudent | null>;
}


// Methods 

// export interface StudentMethods {
//     // Define any static methods here if needed
//     isExistUser(id: string): Promise<TStudent | null>;
// }

// export type StudentModel = Model<TStudent, {}, StudentMethods>;