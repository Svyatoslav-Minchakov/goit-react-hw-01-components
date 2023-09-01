import { TransactionHistory } from './TransactionHistory'

export const TransactionHistoryWrapper = ({ items }) => {
    return <table className="transaction-history">
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
</table>
}