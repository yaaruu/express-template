import express from 'express';
import HomeRouteMap from './controllers/HomeController';

const mapRouter = express.Router()
mapRouter.use('/',HomeRouteMap);

export default mapRouter;