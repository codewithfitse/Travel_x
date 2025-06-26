import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next) {
  const token = req.cookies.token; // 👈 get the token from the cookie

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: Missing token!" });
  }

  try {
    const decodedUser = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedUser;
    return next();
  } catch (error) {
    return res.status(403).json({ message: "Forbidden: Invalid token" });
  }
}
