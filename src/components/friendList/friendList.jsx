// import friends from '../../friends.json';

import { FriendListItem } from './friendListItem';
import { FriendListWrapper } from './friendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListWrapper className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendListWrapper>
  );
};
