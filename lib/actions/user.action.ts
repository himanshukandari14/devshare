"use server"

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose"
import { CreateUserParams, DeleteUserParams, UpdateUserParams } from "./shared.types";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";


export async function getUserId(params:any) {
    try {
        connectToDatabase();
        const {userId} = params;

        const user = await User.findOne({clerkId: userId})

        return user;
    } catch (error) {
        console.log(error);
        throw error
    }
}

export async function createUser(userData:CreateUserParams){
    try {
        connectToDatabase();
        const newUser= await User.create(userData)
    } catch (error) {
        
    }
}

export async function updateUser(params: UpdateUserParams) {
  try {
    connectToDatabase();

    const {clerkId,updateData,path} = params
     await User.findByIdAndUpdate({clerkId},updateData,{
        new: true,
     });

     revalidatePath(path)
  } catch (error) {}
}

export async function deleteUser(params: DeleteUserParams) {
  try {
    connectToDatabase();

    const { clerkId} = params;
    
    const user=await User.findByIdAndDelete({ clerkId });

    if(!user){
        throw new Error ('user not found')
    }

    // delete user form db
    // and ques,ans,comments,etc...

    // get user ques id
    const UserQuestionIds = await Question.find({author: user._id})
    .distinct('_id');

    // del user ques
    await Question.deleteMany({author:user._id});
    // TODO: DELET USER ANS,CMNTS

    const deleteUser= await User.findByIdAndDelete(user._id)
    return deleteUser;
  } catch (error) {}
}