import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {BankTabItem} from "./BankTabItem"
import BankInfo from "./BankInfo"
import TransactionsTab from "./TransactionsTab"
import { Pagination } from "./Pagination"


const RecentTransaction = ({
    accounts,
    transactions = [],
    appwriteItemId ,
    page = 1
}: RecentTransactionsProps) => {
    const rowsPerPage = 10;
    const totalPages = Math.ceil(transactions.length / rowsPerPage);

    const indexOfLastTransaction = page * rowsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;

    const currentTransactions = transactions.slice(
        indexOfFirstTransaction, indexOfLastTransaction
    )
    return(
        <section className="recent-transactions">
            <header className="flex items-center justify-between">
                <h2 className="recant-transactions-label">Recent Transactions</h2>
                <Link href={`/transaction-history/?id=${appwriteItemId}`} className="view-all-btn">View all</Link> 
            </header>
            <Tabs defaultValue={appwriteItemId} className="w-full">
                <TabsList className="recent-transaction-tablist">
                    {
                        accounts.map((account: Account) => (
                            <TabsTrigger className="" key={account.id} value={account.appwriteItemId}>
                                <BankTabItem 
                                key={account.id}
                                account={account}
                                />

                            </TabsTrigger>
                        ))
                    }
                </TabsList>

                {
                    accounts.map((account: Account) => (
                        <TabsContent
                        value={account.appwriteItemId}
                        key={account.id}
                        className="space-y-4"
                        >
                            <BankInfo 
                            account = {account}
                            appwriteItemId={appwriteItemId}
                            type="full"
                            />
                            <TransactionsTab transactions={currentTransactions} />

                            {totalPages > 1 && (
                                <div className="my-4 w-full">
                                    <Pagination totalPages={totalPages} page={page} />
                                </div>
                            )}
                        </TabsContent>
                    ))
                }

            </Tabs>

        </section>
    )
}

export default RecentTransaction