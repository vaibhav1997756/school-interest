const express = require('express');
const formController = require('../controllers/formController');
const { formValidation } = require('../middleware/validation');

const router = express.Router();

// Route for form submission with validation
router.post('/submit', formValidation, formController.submitForm);

module.exports = router;
