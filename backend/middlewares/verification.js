import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // 'Bearer <token>'
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SEC);
        req.user = verified;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid Token' });
    }
};

export const verifyAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        console.log("User Role:", req.user.role); // Log the user role
        if (req.user.role === "admin" || req.user.role === "Admin") {
            next();
        } else {
            console.log("User is not an admin"); // Log if the user is not an admin
            res.status(403).json({ message: "You are not an admin" });
        }
    });
};

