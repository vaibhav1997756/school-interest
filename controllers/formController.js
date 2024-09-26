const formModel = require('../models/formModel');
const { validationResult } = require('express-validator');

// Handle form submission
const submitForm = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const formData = req.body;

    formModel.saveFormData(formData, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Error saving form data', error: err });
        } else {
            res.status(200).json({ message: 'Form data saved successfully', result });
        }
    });
};

module.exports = {
    submitForm
};
