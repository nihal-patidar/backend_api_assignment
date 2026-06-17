

/**
 * Validates required user fields.
 */
function userValidation(req, res, next) {
  const { id, firstName, lastName, hobby } = req.body;

  // Check whether all required fields are provided.
  if (!id || !firstName || !lastName || !hobby) {
    return res.status(400).send({
      msg: "All fields are required",
    });
  }

  // Proceed to the next middleware.
  next();
}


/**
 * Logs request details along with the response status code.
 */
function loggerFunction(req, res, next) {

    // Log the request after if response has been sent 
  res.on("finish", () => {    
    console.log(`
========== REQUEST LOG ==========
Method      : ${req.method}   
URL         : ${req.originalUrl}
Status Code : ${res.statusCode}
Timestamp   : ${new Date().toLocaleString()}
=================================
`);
  });

  next();  // pass req further
}

export default loggerFunction;


export {userValidation , loggerFunction} ;