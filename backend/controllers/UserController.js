import User from '../models/UserModel.js';

export const getUser = async (req,res) => {
    try{
        const users = await User.find();
        res.json(users);
    }catch (error){
        res.status(500).json({message: error.message});
    }
}