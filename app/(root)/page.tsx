import HeaderBox from "@/components/HeaderBox"
import TotalBalanceBox from "@/components/TotalBalanceBox"
import RightSidebar from "@/components/RightSidebar"

const Home = () => {
    const getUser = {
        firstName: "Tandu",
         lastName:"Yanmick", 
         email: "examle@gmail.com"
        }
    return(
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                     type="greeting"
                     title="Welcome"
                     subtext="Access and Manager your account & do transaction"
                     user={getUser?.firstName || "Guest"}
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
                    transactions={[]}
                    banks={[
                        {"currentBalance" : "12500"},{"currentBalance": "5000.00"}
                    ]}
                />
        </section>
    )
}

export default Home