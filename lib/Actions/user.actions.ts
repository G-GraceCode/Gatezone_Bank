'use server'

import {createSessionClient, createAdminClient} from "../server/appwrite"
import {ID} from "node-appwrite"
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async ({email, password}: signInProps) => {
    try{
        //mutation / DataBase / fetch
        const { account } = await createAdminClient();
        const res = await account.createEmailPasswordSession(email, password)
        
        return parseStringify(res)

    } catch(e){
        console.log("Error", e)
    }
}

export const signUp = async (userData: SignUpParams) => {
    const {email, password, firstName, lastName} = userData
    try{
        //mutation / DataBase / fetch
        const { account } = await createAdminClient();

        const newUserAccount = await account.create(ID.unique(), 
        email, 
        password, 
        `${firstName} ${lastName}`);
        const session = await account.createEmailPasswordSession(email, password);
      
        cookies().set("appwrite-session", session.secret, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: true,
        }); 

        return parseStringify(newUserAccount)

    } catch(e){
        console.log("Error", e)
    }
}

// ... your initilization functions

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      
      const user = await account.get();

      return parseStringify(user);

    } catch (error) {
      return null;
    }
  }
  
export async function signOut() {
  try{
    const {account} = await createSessionClient();

    cookies().delete("appwrite-session")

    await account.deleteSession('current')

  }catch(e){
    return null
  }
}