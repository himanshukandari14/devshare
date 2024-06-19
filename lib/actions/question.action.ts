
"use server";

import Question from "@/database/question.model";
import Tag from "@/database/tag.model";
import { connectToDatabase } from "../mongoose";
import { CreateQuestionParams, GetQuestionsParams } from "./shared.types";
import User from "@/database/user.model";
import { any } from "zod";
import { revalidatePath } from "next/cache";

export async function createQuestion(params: CreateQuestionParams) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Log the params to debug
    console.log("Params:", params);

    const { title, content, tags, author,path } = params;

    // Validate input parameters
    if (!title || !content || !author) {
      throw new Error("Missing required fields: title, content, or author");
    }

    // Create a new question
    const question = new Question({
      title,
      content,
      author,
      tags: [], // Initialize tags as an empty array
    });

    // Save the question to the database
    const savedQuestion = await question.save();

    if (!savedQuestion) {
      throw new Error("Failed to save the question");
    }

    const tagDocuments = [];

    // Create or get tags if they already exist
    for (const tag of tags!) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        {
          $setOnInsert: { name: tag },
          $push: { questions: savedQuestion._id },
        },
        { upsert: true, new: true }
      );

      if (existingTag) {
        tagDocuments.push(existingTag._id);
      } else {
        console.error(`Failed to find or create tag: ${tag}`);
      }
    }

    // Update the question with the associated tags
    const updatedQuestion = await Question.findByIdAndUpdate(
      savedQuestion._id,
      {
        $push: { tags: { $each: tagDocuments } },
      },
      { new: true }
    ).lean(); // Use lean() to get a plain object

    if (!updatedQuestion) {
      throw new Error("Failed to update the question with tags");
    }


    // Return the created question (optional)
     return JSON.parse(JSON.stringify(updatedQuestion));

     revalidatePath(path)
  } catch (error) {
    console.error("Error creating question:",error);
    
  }
}


// get question

export async function getQuestions(params:GetQuestionsParams) {
try {
  connectToDatabase();
  const questions = await Question.find({})
    .populate({ path: "tags", model: Tag })
    .populate({ path: "author", model: User })
    .sort({createdAt: -1})
  
return {questions};
} catch (error) {
  console.log(error);
  throw error;
}
  
}
