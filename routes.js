// Import Express framework
import express from "express";

// Import controller functions for user CRUD operations
import {
  createUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
} from "./controller/userController.js";

// Import validation middleware
import { userValidation } from "./middleware.js";

// Create a new router instance
const routes = express.Router();

// POST /user -> Create a new user
routes.post("/user", userValidation, createUser);

// GET /users -> Fetch all users
routes.get("/users", getAllUser);

// GET /users/:id -> Fetch a specific user by ID
routes.get("/users/:id", getUser);

// PUT /users/:id -> Update an existing user
routes.put("/users/:id", userValidation, updateUser);

// DELETE /users/:id -> Delete a user by ID
routes.delete("/users/:id", deleteUser);

// Export router for use in the main application
export default routes;