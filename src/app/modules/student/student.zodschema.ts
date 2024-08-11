import { z } from 'zod';

// Guardian schema
const guardianSchema = z.object({
    FatherName: z.string().nonempty({ message: "Father name is required" }),
    fatherOccupation: z.string().nonempty({ message: "Father occupation is required" }),
    FatherContactNo: z.string().regex(/^[0-9]+$/, { message: "Father contact number must contain only numbers" }).nonempty({ message: "Father contact number is required" }),
    MotherName: z.string().nonempty({ message: "Mother name is required" }),
    MotherOccupation: z.string().nonempty({ message: "Mother occupation is required" }),
    MotherContactNo: z.string().regex(/^[0-9]+$/, { message: "Mother contact number must contain only numbers" }).nonempty({ message: "Mother contact number is required" })
});

// UserNameInterface schema
const userNameInterfaceSchema = z.object({
    firstName: z.string().nonempty({ message: "First name is required" }),
    middleName: z.string().optional(),
    lastName: z.string().nonempty({ message: "Last name is required" })
});

// LocalGuardian schema
const localGuardianSchema = z.object({
    name: z.string().nonempty({ message: "Local guardian name is required" }),
    relation: z.string().nonempty({ message: "Relation is required" }),
    contactNo: z.string().regex(/^[0-9]+$/, { message: "Contact number must contain only numbers" }).nonempty({ message: "Contact number is required" })
});

// Student schema
const studentZodSchema = z.object({
    id: z.string().nonempty({ message: "ID is required" }),
    name: userNameInterfaceSchema,
    gender: z.enum(["Male", "Female"], { errorMap: () => ({ message: "Gender must be either Male or Female" }) }),
    email: z.string().email({ message: "Email must be a valid email" }),
    dateOfBirth: z.string().nonempty({ message: "Date of birth is required" }).refine(date => !isNaN(Date.parse(date)), { message: "Date of birth must be a valid date" }),
    contactNo: z.string().regex(/^[0-9]+$/, { message: "Contact number must contain only numbers" }).nonempty({ message: "Contact number is required" }),
    emergencyContactNo: z.string().regex(/^[0-9]+$/, { message: "Emergency contact number must contain only numbers" }).nonempty({ message: "Emergency contact number is required" }),
    presentAddress: z.string().nonempty({ message: "Present address is required" }),
    permanentAddress: z.string().nonempty({ message: "Permanent address is required" }),
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], { errorMap: () => ({ message: "Blood group must be one of A+, A-, B+, B-, AB+, AB-, O+, O-" }) }),
    isActive: z.enum(["active", "inactive"], { errorMap: () => ({ message: "Status must be either active or inactive" }) })
});

export default studentZodSchema;
