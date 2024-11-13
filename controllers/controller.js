import reviewcollection from "../models/model.js";

const data = async (req, res) => {
    try {
        const { name, rating, review } = req.body;

        if (!name || !rating || !review) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const newReview = new reviewcollection({ name, rating, review });

        await newReview.save();
        console.log("data added")

        res.status(201).json({ message: 'Review added successfully', data: newReview });
    } catch (error) {
        console.error('Error saving review:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getAllReviews = async (req, res) => {
    try {
        const reviews = await reviewcollection.find({}, 'name rating review'); 
        
        res.status(200).json({ reviews }); 
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export  {data,getAllReviews}; 
