const travellerRoutes = require('./travellersRoutes');
const locationRoutes = require('./locationsRoutes');
const tripRoutes = require('./tripsRoutes');
const router = require('express').Router();

router.use('/travellers', travellerRoutes);
router.use("/locations", locationRoutes);
router.use("/trips", tripRoutes);

module.export = router;