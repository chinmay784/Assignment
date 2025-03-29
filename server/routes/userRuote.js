const express = require("express");
const { register, login, getPrifile, uploadProfilePic } = require("../controllers/userController");
const { authMiddleWere } = require("../middelwere/authMiddleWare");
const { upload } = require("../config/cloudinary");
const router = express.Router();


router.post("/register",register);
router.post("/login",login);
router.get("/profile",authMiddleWere,getPrifile);
router.post("/upload-profile-pic", authMiddleWere, upload.single("profilePic"), uploadProfilePic);

module.exports = router;