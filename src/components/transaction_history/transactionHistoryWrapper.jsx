import { TransactionHistory } from './TransactionHistory'
import { TableWrapper } from './transactionHistory.styled'

export const TransactionHistoryWrapper = ({ items }) => {
    return <TableWrapper className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    
        <TransactionHistory
          items={items}
        />
        
  </tbody>
</TableWrapper>
}