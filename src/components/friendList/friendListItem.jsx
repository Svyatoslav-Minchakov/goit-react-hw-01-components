import { MyFriend } from "./friendList.styled"

export const FrendListItem = ({friends}) => {
    
    return friends.map(friend => {
        return <MyFriend key={friend.id} className="frendlis__item">
        <img src={friend.avatar} alt={friend.name} className="frendlist__avatar" />
        <h3 className="frendlist__name">{friend.name}</h3>
        <p className="frendlist__is-oline">{friend.isOnline ? 'Online' : 'Offline'}</p>
        </MyFriend>
    })
}