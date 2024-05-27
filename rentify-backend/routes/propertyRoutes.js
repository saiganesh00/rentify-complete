const express = require('express');
const router = express.Router();
const { createProperty, getAllProperties, getPropertyById, updateProperty, deleteProperty } = require('../controllers/propertyController');
const authMiddleware = require('../middleware/authMiddleware');

// Create Property Route
router.post('/', authMiddleware, createProperty);

// Get All Properties Route
router.get('/', getAllProperties);

// Get Property by ID Route
router.get('/:id', getPropertyById);

// Update Property Route
router.put('/:id', authMiddleware, updateProperty);

// Delete Property Route
router.delete('/:id', authMiddleware, deleteProperty);

module.exports = router;
