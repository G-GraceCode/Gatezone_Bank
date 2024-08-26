import React, {useState} from "react"
import HeaderBox from '@/components/HeaderBox'
import UserUpdate from "@/components/UserUpdate"
import { getLoggedInUser } from "@/lib/Actions/user.actions";
import { getAccounts } from "@/lib/Actions/bank.actions";

const setting = async () => {
    const getLoggedUser = await getLoggedInUser()
    const getUserAccount = await getAccounts({
        userId: getLoggedUser?.$id
    })

    console.log("setting page", getLoggedUser)
    console.log("setting page-getAcc", getUserAccount)

    return(
        <div className="settings">
            <HeaderBox 
            title="Settings"
            subtext="you can update your name, email, email and terminate your account"
            />
            <section className="size-full pt-5">
                <UserUpdate />
            </section>
        </div>
    )
}

export default setting