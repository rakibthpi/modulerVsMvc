import { model, Schema } from "mongoose";
import validator from 'validator';
import { StudentModel, TGuardian, TLocalGuardian, TStudent, TUserNameInterface } from "./student/student.interface";



const userSchema = new Schema<TUserNameInterface>({
    firstName: {
        type: String,
        required: [true, 'First Name is required'],
        trim: true,
        minlength: [4, 'The name cannot be less than 3 characters'],
        maxlength: [20, 'The name cannot be more than 20 characters'],
        validate:{
            validator: (value: string) => {
                const firstStr =  value.charAt(0).toUpperCase() + value.slice(1).toLocaleLowerCase();
                return firstStr === value;
            },
            message: '{VALUE} is not Capitalized formate'
        }
    },
    middleName: {
        type:String,
        trim: true,
    },   
    lastName: {
        type:String, 
        required:[true, 'Last Name is required'],
        trim: true,
        validate:{
            validator: function(value){
                return validator.isAlpha(value);
            },
            message: '{VALUE} is not a valid name'
        }
    },
})

const guardianSchema = new Schema<TGuardian>({
    FatherName: {
        type:String
    },
    fatherOccupation: {
        type:String
    },
    FatherContactNo: {
        type:String
    },
    MotherName: {
        type:String
    },
    MotherOccupation: {
        type:String
    },
    MotherContactNo: {
        type:String
    },
})

const localGuardianSchema = new Schema<TLocalGuardian>({
    name: {
        type:String
    },
    relation: {
        type:String
    },
    contactNo: {
        type:String
    },
})


// Final Schema for student 
const studentSchema = new Schema<TStudent, StudentModel>({
    id: {
        type:String, 
        required:[true, 'ID is required'],
        unique:true
    },
    name: {
        type: userSchema,
        required: [true, 'Name is required'],
    },
    gender:{
        type: String,
        enum: {
            values: ['Male', 'Female'],
            message: '{VALUE} is not a valid gender'
        },
        default: 'Male',
        required: [true, 'Gender is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        // validate:{
        //     validator: function(value){
        //         return validator.isEmail(value);
        //     },
        //     message: '{VALUE} is not a valid email'
        // }
    },
    dateOfBirth: {type:String},
    contactNo: {type:String, required:true},
    emergencyContactNo:{type:String, required:true},
    presentAddress: {type:String},
    permanentAddress: {type:String},
    guardian: {
        type: guardianSchema,
        required: [true, 'Guardian is required'],
        default: null
    },
    localGuardian:{
        type: localGuardianSchema,
        required: [true, 'Local guardian is required'],
        default: null
    } ,
    bloodGroup: {
        type: String,
        enum: {
            values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
            message: '{VALUE} is not a valid blood group'
        },
        default: 'O+',
        required: [true, 'Blood group is required']
    },
    isActive: {
        type: String,
        enum: {
            values: ['active', 'inactive'],
            message: '{VALUE} is not a valid status'
        },
        default: 'active',
        required: [true, 'Status is required']
    }

})

// Save per and post area  start
studentSchema.pre('save', function(next) {
    console.log('Before Save');
    next();
});

studentSchema.post('save', function(doc, next) {
    console.log('after save');
    next();
});

// Save per and post area End


// Statics 
studentSchema.static('isExistUser', async function(id: string){
    const existingUser = await Student.findOne({id});
    return existingUser
})


// Methods 
// studentSchema.methods.isExistUser = async function(id: string){
//     const existingUser = await Student.findOne({id});
//     console.log("existingUser", existingUser);
//     return existingUser
// } 



// Define custom method
export const Student = model<TStudent, StudentModel>('student', studentSchema);