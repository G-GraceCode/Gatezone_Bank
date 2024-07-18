import HeaderBox from "@/components/HeaderBox"
import TotalBalanceBox from "@/components/TotalBalanceBox"
import RightSidebar from "@/components/RightSidebar"
import { getLoggedInUser } from "@/lib/Actions/user.actions";


const Home = async () => {
    const getUser = await getLoggedInUser();
    console.log(getUser)
    
    return(
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                     type="greeting"
                     title="Welcome"
                     subtext="Access and Manager your account & do transaction"
                     user={getUser?.name || "Guest"}
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={2}
                        totalCurrentBalance = {1222.33}
                    />

                </header>

                
            </div>
            {/* //Recent trasaction */}
                <RightSidebar
                    user={getUser}
                    transactions = {[]}
                    banks={[
                        {"currentBalance" : "12500"},{"currentBalance": "5000.00"}
                    ]}
                />
        </section>
    )
}

export default Home