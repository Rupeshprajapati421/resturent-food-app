const JWT = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Authorization header missing",
      });
    }

    const token = authHeader.split(" ")[1];

    JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized user",
        });
      }

        req.user = {
    id: decoded.id || decoded._id,
  };

      next();
    });
  } catch (error) {
    console.error("Auth Middleware Error:", error);

    res.status(500).json({
      success: false,
      message: "Error in Auth API",
      error: error.message,
    });
  }
};
