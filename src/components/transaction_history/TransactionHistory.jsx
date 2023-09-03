import { TableItem } from './transactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return items.map(item => {
    return (
      <TableItem key={item.id}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </TableItem>
    );
  });
};
