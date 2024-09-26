const { body } = require('express-validator');

const formValidation = [
    // Validation for major location school 1
    body('major_location_school_name_1')
        .notEmpty()
        .withMessage('School name 1 is required')
        .isLength({ max: 255 })
        .withMessage('School name 1 must be less than 255 characters'),
    body('major_location_establishment_year_1')
        .isInt({ min: 1800, max: new Date().getFullYear() })
        .withMessage('Enter a valid establishment year for school 1'),
    body('major_location_no_of_students_1')
        .isInt({ min: 0 })
        .withMessage('Number of students 1 must be a positive integer'),
    body('major_location_monthly_fee_1')
        .isFloat({ min: 0 })
        .withMessage('Monthly fee 1 must be a positive number'),
    body('major_location_area_of_land_1')
        .isFloat({ min: 0 })
        .withMessage('Area of land 1 must be a positive number'),

    // Validation for major location school 2
    body('major_location_school_name_2')
        .optional()
        .isLength({ max: 255 })
        .withMessage('School name 2 must be less than 255 characters'),
    body('major_location_establishment_year_2')
        .optional()
        .isInt({ min: 1800, max: new Date().getFullYear() })
        .withMessage('Enter a valid establishment year for school 2'),
    body('major_location_no_of_students_2')
        .optional()
        .isInt({ min: 0 })
        .withMessage('Number of students 2 must be a positive integer'),
    body('major_location_monthly_fee_2')
        .optional()
        .isFloat({ min: 0 })
        .withMessage('Monthly fee 2 must be a positive number'),
    body('major_location_area_of_land_2')
        .optional()
        .isFloat({ min: 0 })
        .withMessage('Area of land 2 must be a positive number'),

    // Validation for major location school 3
    body('major_location_school_name_3')
        .optional()
        .isLength({ max: 255 })
        .withMessage('School name 3 must be less than 255 characters'),
    body('major_location_establishment_year_3')
        .optional()
        .isInt({ min: 1800, max: new Date().getFullYear() })
        .withMessage('Enter a valid establishment year for school 3'),
    body('major_location_no_of_students_3')
        .optional()
        .isInt({ min: 0 })
        .withMessage('Number of students 3 must be a positive integer'),
    body('major_location_monthly_fee_3')
        .optional()
        .isFloat({ min: 0 })
        .withMessage('Monthly fee 3 must be a positive number'),
    body('major_location_area_of_land_3')
        .optional()
        .isFloat({ min: 0 })
        .withMessage('Area of land 3 must be a positive number'),

    // Validation for residential colonies
    body('residential_colonies')
        .optional()
        .isString()
        .withMessage('Residential colonies should be a string'),

    // Validation for facilities availability
    body('facilities_availability')
        .optional()
        .isString()
        .withMessage('Facilities availability should be a string'),

    // Validation for success reason of school
    body('success_reason_of_school')
        .optional()
        .isString()
        .withMessage('Success reason of school should be a string'),

    // Validation for school board type
    body('school_board_type')
        .isIn(['CBSE', 'ICSE', 'State', 'International'])
        .withMessage('Invalid school board type'),

    // Validation for crime information type
    body('crime_information_type')
        .isIn(['yes', 'no'])
        .withMessage('Invalid crime information type'),

    // Validation for crime information details (if crime_information_type is 'yes')
    body('crime_information_details')
        .if(body('crime_information_type').equals('yes'))
        .notEmpty()
        .withMessage('Crime information details are required when crime information type is "yes"'),

    // Validation for pending court case type
    body('pending_court_case_type')
        .isIn(['yes', 'no'])
        .withMessage('Invalid pending court case type'),

    // Validation for pending court case details (if pending_court_case_type is 'yes')
    body('pending_court_case_details')
        .if(body('pending_court_case_type').equals('yes'))
        .notEmpty()
        .withMessage('Pending court case details are required when pending court case type is "yes"'),

    // Validation for land possession type
    body('land_possession_type')
        .isIn(['yes', 'no'])
        .withMessage('Invalid land possession type'),

    // Validation for land possession details (if land_possession_type is 'yes')
    body('land_possession_details')
        .if(body('land_possession_type').equals('yes'))
        .notEmpty()
        .withMessage('Land possession details are required when land possession type is "yes"')
];

module.exports = {
    formValidation
};
