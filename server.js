// Import Express framework
import express from "express";

// Import application routes
import routes from "./routes.js";

// Import custom middleware
import { loggerFunction } from "./middleware.js";

// Create Express application instance
const app = express();

// Parse incoming JSON requests
app.use(express.json());

// Log details of every request
app.use(loggerFunction);

// Register all application routes
app.use("/", routes);

// Start server on port 3000
app.listen(3000, () => {
  // Confirm server startup
  console.log("Server is running on port 3000");
});