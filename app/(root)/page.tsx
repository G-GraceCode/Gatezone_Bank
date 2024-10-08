import HeaderBox from "@/components/HeaderBox"
import TotalBalanceBox from "@/components/TotalBalanceBox"
import RightSidebar from "@/components/RightSidebar"
import { getLoggedInUser } from "@/lib/Actions/user.actions";
import { getAccount, getAccounts } from "@/lib/Actions/bank.actions";
// import {SearchParamProps} from "@/types/index.d"
import RecentTransaction from "@/components/RecentTransaction"



const Home = async ({searchParams:{id, page}}: SearchParamProps) => {
    const currentPage = Number(page as string) || 1;
    const loggedIn = await getLoggedInUser();
    console.log('loggedIn', loggedIn)


    const accounts = await getAccounts({userId: loggedIn?.$id})

    if(!accounts) return;
    const accountsData =  accounts?.data
    const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
    
    const account = await getAccount({appwriteItemId})
    
    console.log("account_D", accountsData)
    console.log("account", account)

    return(
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                     type="greeting"
                     title="Welcome"
                     subtext="Access and Manager your account & do transaction"
                     user={`${loggedIn?.firstName}` || "Guest"}
                    />
                    <TotalBalanceBox
                        accounts={accountsData}
                        totalBanks={accounts?.totalBanks}
                        totalCurrentBalance = {accounts?.totalCurrentBalance}
                    />

                </header>

                <RecentTransaction 
                    accounts={accountsData}
                    transactions={account?.transactions}
                    appwriteItemId = {appwriteItemId}
                    page={currentPage}
                />
                
            </div>

            {/* //Recent trasaction */}
                <RightSidebar
                    user={loggedIn}
                    transactions = {account?.transactions}
                    banks={accountsData?.slice(0, 2)}
                />
        </section>
    )
}

export default Home