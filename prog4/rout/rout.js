const express = require('express');
const router = express.Router(); // ✅ You forgot this line

// Middleware
const auth = function(req, res, next) {
    console.log('im inside auth');
    req.user = { userid: 1, role: "student" }; // Simulated user
    if (req.user) {
        next();
    } else {
        res.json({
            success: false,
            message: "Not a valid user",
        });
    }
};

const isstudent = function(req, res, next) {
    console.log("im inside student");
    if (req.user.role === "student") {
        next();
    } else {
        res.json({
            success: false,
            message: "Access Denied, this is only for students",
        });
    }
};

const isAdmin = function(req, res, next) {
    console.log("im inside Admin");
    if (req.user.role === "Admin") {
        next();
    } else {
        res.json({
            success: false,
            message: "Access Denied, this is only for Admins",
        });
    }
};

// Routes
router.get("/student", auth, isstudent, (req, res) => {
    console.log("im inside student route");
    res.send("Student-specific page");
});

router.get("/admin", auth, isAdmin, (req, res) => {
    console.log("im inside admin route");
    res.send("Admin-specific page");
});

module.exports = router;
