const Property = require('../models/Property');

// Create Property
exports.createProperty = async (req, res) => {
    const { title, description, location, price, bedrooms, bathrooms } = req.body;
    console.log(req.body);
    try {
        const newProperty = new Property({
            owner: req.user.id,
            title,
            description,
            location,
            price,
            bedrooms,
            bathrooms,
        });

        const property = await newProperty.save();
        res.json(property);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Get All Properties
exports.getAllProperties = async (req, res) => {
    try {
        const properties = await Property.find().populate('owner', 'firstName lastName email phone');
        res.json(properties);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Get Property by ID
exports.getPropertyById = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id).populate('owner', 'firstName lastName email phone');
        if (!property) return res.status(404).json({ msg: 'Property not found' });
        res.json(property);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Update Property
exports.updateProperty = async (req, res) => {
    const { title, description, location, price, bedrooms, bathrooms } = req.body;

    try {
        const property = await Property.findById(req.params.id);
        if (!property) return res.status(404).json({ msg: 'Property not found' });

        if (property.owner.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        property.title = title;
        property.description = description;
        property.location = location;
        property.price = price;
        property.bedrooms = bedrooms;
        property.bathrooms = bathrooms;

        await property.save();
        res.json(property);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Delete Property
exports.deleteProperty = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) return res.status(404).json({ msg: 'Property not found' });

        if (property.owner.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        await property.remove();
        res.json({ msg: 'Property removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
