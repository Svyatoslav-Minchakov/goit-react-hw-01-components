import { Status, Image, ListItem, Name, StatusText } from './friendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListItem>
      <Status $isOnline={isOnline}></Status>
      <Image src={avatar} alt={name} />
      <Name>{name}</Name>
      <StatusText $isOnline={isOnline}>
        {isOnline ? 'Online' : 'Offline'}
      </StatusText>
    </ListItem>
  );
};
