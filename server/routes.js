import express from "express";

import basicController from "./controllers/basicController"
import userController from "./controllers/userController"

const routes = express();
routes.get("/", basicController.get);

// User routes
routes.post("/signup", userController.post);

export default routes;