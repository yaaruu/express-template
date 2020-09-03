import express from 'express';
import bodyParser from 'body-parser';

const HomeRouteMap = express.Router()

HomeRouteMap.use(bodyParser.urlencoded({ extended: true }));
HomeRouteMap.use(bodyParser.json());
HomeRouteMap.get('/', (req: any, res: any) => {
  res.json("Cool. It's works!");
})

export default HomeRouteMap;