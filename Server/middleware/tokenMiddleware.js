import jwt from "jsonwebtoken";
import passport from "passport";

export default function authMiddleware(req, res, next) {
  // ✅ Check for Passport session (OAuth login)
  if (req.isAuthenticated && req.isAuthenticated()) {
    req.user = req.user; // Already populated by passport.deserializeUser
    return next();
  }

  // ✅ Fallback to cookie-based JWT
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token" });
  }

  try {
    const decodedUser = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedUser;
    return next();
  } catch (error) {
    return res.status(403).json({ message: "Forbidden: Invalid token" });
  }
}
