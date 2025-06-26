// -------------------------
// Imports
// -------------------------
import jwt from "jsonwebtoken";
import passport from "passport";

// -------------------------
// Auth Middleware
// -------------------------
export default function authMiddleware(req, res, next) {
  // ✅ Try Passport first (for OAuth or JWT strategy)
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (user) {
      req.user = user;
      return next();
    }

    // ⚠️ Fallback to cookie-based JWT if Passport fails
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
  })(req, res, next); // ⚠️ Don't forget to call it!
}
