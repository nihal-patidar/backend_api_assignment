// In-memory data store used for assignment purposes.
// Data will be reset whenever the server restarts.
const users = [];

/**
 * GET /users
 * Fetch all users from the in-memory data store.
 */
function getAllUser(req, res) {
  // Return an empty array if no users are available.
  if (!users.length) {
    return res.status(200).send({
      msg: "No users found",
      users,
    });
  }

  // Successfully retrieved all users.
  return res.status(200).send({
    msg: "Users fetched successfully",
    users,
  });
}

/**
 * POST /user
 * Create a new user.
 */
function createUser(req, res) {
  console.log("Request Body:", req.body);

  const { id, firstName, lastName, hobby } = req.body;

  // Prevent creation of users with duplicate IDs.
  const existingUser = users.find((user) => user.id === id);

  if (existingUser) {
    return res.status(409).send({
      error: "User already exists with this ID",
    });
  }

  // Create and store the new user.
  const newUser = {
    id,
    firstName,
    lastName,
    hobby,
  }

  users.push(newUser);

  // 201 Created -> Resource created successfully.
  return res.status(201).send({
    msg: "User created successfully",
    user : newUser
  });
}

/**
 * GET /users/:id
 * Fetch a specific user by ID.
 */
function getUser(req, res) {
  console.log("Request Body:", req.body);
  console.log("Request Query:", req.query);
  console.log("Request Params:", req.params);

  const { id } = req.params;

  // Search for user by ID.
  const user = users.find((user) => user.id === id);

  if (!user) {
    // 404 Not Found -> Requested user does not exist.
    return res.status(404).send({
      msg: "User not found",
    });
  }

  // Successfully retrieved the requested user.
  return res.status(200).send({
    user,
  });
}

/**
 * PUT /user/:id
 * Update an existing user.
 */
function updateUser(req, res) {
  const { id } = req.params;
  const updatedData = req.body;

  console.log("Updated Data:", updatedData);

  // Find user index in the array.
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    // 404 Not Found -> User does not exist.
    return res.status(404).send({
      msg: "User not found",
    });
  }

  // Merge existing data with new data.
  users[userIndex] = {
    ...users[userIndex],
    ...updatedData,
  };

  // Successfully updated user details.
  return res.status(200).send({
    msg: "User updated successfully",
    user: users[userIndex],
  });
}

/**
 * DELETE /user/:id
 * Delete a user by ID.
 */
function deleteUser(req, res) {
  const { id } = req.params;

  console.log("User ID:", id);

  // Find user index before deletion.
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    // 404 Not Found -> User does not exist.
    return res.status(404).send({
      msg: "User not found",
    });
  }

  // Remove the user from the array.
  users.splice(userIndex, 1);

  // Successfully deleted the user.
  return res.status(200).send({
    msg: "User deleted successfully",
  });
}

export {
  createUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
};