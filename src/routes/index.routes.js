import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
    return res.status(200).send({ message:"hello word!"})
});

routes.get("/2tds2", (req, res) => {
    return res.status(200).send({ message:"hello 2tds2!"})
});

export default routes;