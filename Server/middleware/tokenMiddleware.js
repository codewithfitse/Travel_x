import jwt from "jsonwebtoken";

function authMiddleware(req, res, next) {
  const token = req.cookies.token; // 👈 get the token from the cookie

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: Missing token!" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden: Invalid token" });
    }
    req.user = decodedUser; // 🎯 attach the user info to request
    next();
  });
}

export default authMiddleware;
