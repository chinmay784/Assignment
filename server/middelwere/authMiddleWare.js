const jwt = require("jsonwebtoken");


exports.authMiddleWere = async (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) return res.status(401).json({ message: "Access Denied: No token provided" });
    try {
        const verified = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECREAT);
        req.user = verified;
        next();

    } catch (error) {
        res.status(400).json({ message: "Invalid Token" });
    }
}