import { User } from './profile/profile';
import userData from '../user.json';

import { Statistics } from './statistics/statistics';
import data from '../data.json';

import { FriendList } from './friendList/friendList';
import friends from '../friends.json';

import { TransactionHistoryWrapper } from './transaction_history/transactionHistoryWrapper';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <>
      <User
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />

      <Statistics title={'Upload stats'} stats={data} />

      <FriendList friends={friends} />

      <TransactionHistoryWrapper items={transactions} />
    </>
  );
};
