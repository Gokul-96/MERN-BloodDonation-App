import express from "express";
import donorController from "../controllers/donorController.js";
import { verifyAuthorization, verifyToken } from "../middlewares/verification.js";

const router = express.Router();

// Only authenticated users (both admin and regular users) can create a donor entry
router.post("/createDonor", verifyToken, donorController.createDonor);

// Only authenticated users can view donors
router.get("/allDonors", verifyToken, donorController.getAllDonors);

// Only authenticated users can view details of a specific donor
router.get("/getDonor/:id", verifyToken, donorController.getOneDonor);

// Only admins can view donor statistics
router.get("/stats", verifyAuthorization, donorController.donorStatistics);

// Admin can get donor count
router.get("/count", verifyAuthorization, donorController.donorCount);

// Admin can view recent donors
router.get("/recentDonors", verifyAuthorization, donorController.recentDonors);

// Admin can view donor distribution by age group
router.get("/distribution", verifyAuthorization, donorController.donorDistributionByAgeGroup);

// Only admins should be able to update donor information
router.put("/updateDonor/:id", verifyAuthorization, donorController.updateDonor);

// Only admins should be able to delete a donor entry
router.delete("/deleteDonor/:id", verifyAuthorization, donorController.deleteDonor);

export default router;
