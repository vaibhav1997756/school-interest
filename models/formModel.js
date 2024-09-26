const db = require('../config/db');

const saveFormData = (formData, callback) => {
    const query = `
        INSERT INTO schools 
        (
            major_location_school_name_1, major_location_establishment_year_1, major_location_no_of_students_1, 
            major_location_monthly_fee_1, major_location_area_of_land_1, major_location_school_name_2, 
            major_location_establishment_year_2, major_location_no_of_students_2, major_location_monthly_fee_2, 
            major_location_area_of_land_2, major_location_school_name_3, major_location_establishment_year_3, 
            major_location_no_of_students_3, major_location_monthly_fee_3, major_location_area_of_land_3, 
            residential_colonies, facilities_availability, success_reason_of_school, school_board_type, 
            crime_information_type, crime_information_details, pending_court_case_type, pending_court_case_details, 
            land_possession_type, land_possession_details
        ) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        formData.major_location_school_name_1, formData.major_location_establishment_year_1, formData.major_location_no_of_students_1,
        formData.major_location_monthly_fee_1, formData.major_location_area_of_land_1, formData.major_location_school_name_2,
        formData.major_location_establishment_year_2, formData.major_location_no_of_students_2, formData.major_location_monthly_fee_2,
        formData.major_location_area_of_land_2, formData.major_location_school_name_3, formData.major_location_establishment_year_3,
        formData.major_location_no_of_students_3, formData.major_location_monthly_fee_3, formData.major_location_area_of_land_3,
        formData.residential_colonies, formData.facilities_availability, formData.success_reason_of_school, formData.school_board_type,
        formData.crime_information_type, formData.crime_information_details, formData.pending_court_case_type, formData.pending_court_case_details,
        formData.land_possession_type, formData.land_possession_details
    ];

    db.query(query, values, callback);
};

module.exports = {
    saveFormData
};
