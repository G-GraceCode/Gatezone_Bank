import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { cn, formatAmount, formatDateTime, getTransactionStatus, removeSpecialCharacters } from '@/lib/utils'
import { transactionCategoryStyles } from '@/constants'

const CategoryBadge = ({category}: CategoryBadgeProps) => {
  const {
    borderColor,
    backgroundColor,
    textColor,
    chipBackgroundColor,
  } = transactionCategoryStyles[category as keyof typeof transactionCategoryStyles] || transactionCategoryStyles.default

  return (
    <div className = {cn('category-badge', chipBackgroundColor, borderColor)}>
      <div className={cn('size-2 rounded-full',  backgroundColor)} />
      <p className={cn('text-[12px] font-medium', textColor)}>{category}</p>
    </div>
  )
}
  

const TransactionsTab = ({transactions}: TransactionTableProps) => {
  console.log("transaction", transactions)
  return (
    
    <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader className="bg-[#f9fafb]">
              <TableRow>
              <TableHead className="px-2">Transactions</TableHead>
              <TableHead className="px-2">Amount</TableHead>
              <TableHead className="px-2">Status</TableHead>
              <TableHead className="px-2">Date</TableHead>
              <TableHead className="px-2 max-md:hidden">Channel</TableHead>
              <TableHead className="px-2 max-md:hidden">Category</TableHead>
              
              </TableRow>
          </TableHeader>
          <TableBody>
              {
                transactions.map((t: Transaction) => {
                  const status = getTransactionStatus(new Date(t.date))
                  const amount = formatAmount(t.amount)

                  const isDebit = t.type === "debit";
                  const isCredit = t.type === "credit";

                  return (
                    <TableRow key={t.id} className={`${isDebit || amount[0] === '-' ? 'bg-[#FFBFA]' : 'bg-[#FbFEF9]'} !over:bg-none border-b-DEFAULT`}>

                      <TableCell className="max-w-[250px] pl-2 pr-10">
                        <div className="flex items-center gap-3">
                          <h3 className="text-14 truncate font-semibold text-[#344054]">{removeSpecialCharacters(t.name)}</h3>
                        </div>
                      </TableCell>

                      <TableCell className={`${isDebit || amount[0] === '-' ? 'text-[#f04438]' : 'text-[#039855]'} font-semibold pl-2 pr-10`}>
                        {isDebit ? `-${amount}` : isCredit ? amount : amount}
                      </TableCell>
                      <TableCell className="pr-10 pl-2">
                      <CategoryBadge category={status} />
                      </TableCell>

                      <TableCell className="min-w-32 pr-10 pl-2">
                        {formatDateTime(new Date(t.date)).dateTime}
                      </TableCell>

                      <TableCell className="win-w-32 pr-10 pl-2 capitalize">
                        {t.channel}
                      </TableCell>

                      <TableCell className="win-w-32 pr-10 pl-2 max-md:hidden">
                        <CategoryBadge category={t.category} />
                      </TableCell>
                    </TableRow>
                  )
                })
              }
          </TableBody>
    </Table>
  )
}

export default TransactionsTab
