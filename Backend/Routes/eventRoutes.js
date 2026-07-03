const express=require('express');
const eventRoutes=express.Router();
const eventControllers=require('../Controllers/eventControllers');
const uploads = require('../middlewares/multer');
eventRoutes.get('/',eventControllers.homePage)
eventRoutes.post('/add-event',uploads.single('photo'),eventControllers.addEvent);
eventRoutes.post('/view-details/:eventId',eventControllers.viewDetails);


module.exports=eventRoutes;