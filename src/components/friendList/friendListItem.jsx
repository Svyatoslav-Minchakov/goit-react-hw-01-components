import { Status, Image, ListItem, Name } from './friendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListItem className="item">
      <Status $isOnline={isOnline} className="status"></Status>
      <Image className="avatar" src={avatar} alt={name} width="48" />
      <Name className="name">{name}</Name>
    </ListItem>
  );
};
