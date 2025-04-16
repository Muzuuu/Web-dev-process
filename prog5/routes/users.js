const express = require("express");
const router = express.Router();
const User = require("../models/usermodel");

// Get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// Create a new user
router.post('/users', async (req, res) => {
    console.log("Received POST request to /users");
    
    try {
        const { name, age, weight } = req.body;
        const newUser = new User({ name, age, weight });
        await newUser.save();
        res.status(201).json({ success: true, user: newUser });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// Update a user
router.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name, age, weight } = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { name, age, weight },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, user: updatedUser });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

//delet
router.delete('/users/:id',async(req,res)=>{
    const {id} =req.params;
    try{
        const deleteuser =await User.findByIdAndDelete(id);
        if(!deleteuser){
            res.json({
                message:"user not found",
            });
        }
        res.status(200).json({
            success:true,
            user:deleteuser
        });
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});
module.exports = router;
