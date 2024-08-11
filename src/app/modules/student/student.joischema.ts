import Joi from 'joi';

// Guardian schema
const guardianSchema = Joi.object({
    FatherName: Joi.string().required().messages({
        'string.base': 'Father name should be a type of text',
        'string.empty': 'Father name cannot be empty',
        'any.required': 'Father name is required'
    }),
    fatherOccupation: Joi.string().required().messages({
        'string.base': 'Father occupation should be a type of text',
        'string.empty': 'Father occupation cannot be empty',
        'any.required': 'Father occupation is required'
    }),
    FatherContactNo: Joi.string().pattern(/^[0-9]+$/).required().messages({
        'string.base': 'Father contact number should be a type of text',
        'string.pattern.base': 'Father contact number must contain only numbers',
        'string.empty': 'Father contact number cannot be empty',
        'any.required': 'Father contact number is required'
    }),
    MotherName: Joi.string().required().messages({
        'string.base': 'Mother name should be a type of text',
        'string.empty': 'Mother name cannot be empty',
        'any.required': 'Mother name is required'
    }),
    MotherOccupation: Joi.string().required().messages({
        'string.base': 'Mother occupation should be a type of text',
        'string.empty': 'Mother occupation cannot be empty',
        'any.required': 'Mother occupation is required'
    }),
    MotherContactNo: Joi.string().pattern(/^[0-9]+$/).required().messages({
        'string.base': 'Mother contact number should be a type of text',
        'string.pattern.base': 'Mother contact number must contain only numbers',
        'string.empty': 'Mother contact number cannot be empty',
        'any.required': 'Mother contact number is required'
    })
});

// UserNameInterface schema
const userNameInterfaceSchema = Joi.object({
    firstName: Joi.string().required().messages({
        'string.base': 'First name should be a type of text',
        'string.empty': 'First name cannot be empty',
        'any.required': 'First name is required'
    }),
    middleName: Joi.string().optional().allow('').messages({
        'string.base': 'Middle name should be a type of text'
    }),
    lastName: Joi.string().required().messages({
        'string.base': 'Last name should be a type of text',
        'string.empty': 'Last name cannot be empty',
        'any.required': 'Last name is required'
    })
});

// LocalGuardian schema
const localGuardianSchema = Joi.object({
    name: Joi.string().required().messages({
        'string.base': 'Local guardian name should be a type of text',
        'string.empty': 'Local guardian name cannot be empty',
        'any.required': 'Local guardian name is required'
    }),
    relation: Joi.string().required().messages({
        'string.base': 'Relation should be a type of text',
        'string.empty': 'Relation cannot be empty',
        'any.required': 'Relation is required'
    }),
    contactNo: Joi.string().pattern(/^[0-9]+$/).required().messages({
        'string.base': 'Contact number should be a type of text',
        'string.pattern.base': 'Contact number must contain only numbers',
        'string.empty': 'Contact number cannot be empty',
        'any.required': 'Contact number is required'
    })
});

// Student schema
const studentJoiSchema = Joi.object({
    id: Joi.string().required().messages({
        'string.base': 'ID should be a type of text',
        'string.empty': 'ID cannot be empty',
        'any.required': 'ID is required'
    }),
    name: userNameInterfaceSchema.required().messages({
        'any.required': 'Name is required'
    }),
    gender: Joi.string().valid('Male', 'Female').required().messages({
        'string.base': 'Gender should be a type of text',
        'any.only': 'Gender must be either Male or Female',
        'any.required': 'Gender is required'
    }),
    email: Joi.string().email().required().messages({
        'string.base': 'Email should be a type of text',
        'string.email': 'Email must be a valid email',
        'string.empty': 'Email cannot be empty',
        'any.required': 'Email is required'
    }),
    dateOfBirth: Joi.date().iso().required().messages({
        'date.base': 'Date of birth should be a valid date',
        'date.format': 'Date of birth must be in ISO format',
        'any.required': 'Date of birth is required'
    }),
    contactNo: Joi.string().pattern(/^[0-9]+$/).required().messages({
        'string.base': 'Contact number should be a type of text',
        'string.pattern.base': 'Contact number must contain only numbers',
        'string.empty': 'Contact number cannot be empty',
        'any.required': 'Contact number is required'
    }),
    emergencyContactNo: Joi.string().pattern(/^[0-9]+$/).required().messages({
        'string.base': 'Emergency contact number should be a type of text',
        'string.pattern.base': 'Emergency contact number must contain only numbers',
        'string.empty': 'Emergency contact number cannot be empty',
        'any.required': 'Emergency contact number is required'
    }),
    presentAddress: Joi.string().required().messages({
        'string.base': 'Present address should be a type of text',
        'string.empty': 'Present address cannot be empty',
        'any.required': 'Present address is required'
    }),
    permanentAddress: Joi.string().required().messages({
        'string.base': 'Permanent address should be a type of text',
        'string.empty': 'Permanent address cannot be empty',
        'any.required': 'Permanent address is required'
    }),
    guardian: guardianSchema.required().messages({
        'any.required': 'Guardian information is required'
    }),
    localGuardian: localGuardianSchema.required().messages({
        'any.required': 'Local guardian information is required'
    }),
    bloodGroup: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-').required().messages({
        'string.base': 'Blood group should be a type of text',
        'any.only': 'Blood group must be one of A+, A-, B+, B-, AB+, AB-, O+, O-',
        'any.required': 'Blood group is required'
    }),
    isActive: Joi.string().valid('active', 'inactive').required().messages({
        'string.base': 'Status should be a type of text',
        'any.only': 'Status must be either active or inactive',
        'any.required': 'Status is required'
    })
});

export default studentJoiSchema;