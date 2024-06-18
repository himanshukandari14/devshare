"use server"

import { connectToDatabase } from "../mongoose"

export async function createQuestion(params:any) {

    try {
        // call connect to db
        connectToDatabase();
    } catch (error) {
        
    }
}