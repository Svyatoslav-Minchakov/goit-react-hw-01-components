import data from '../../friends.json'

export const FrendListItem = () => {
    
    return data.map(friend => {
        return <li key={friend.id} className="frendlis__item">
        <img src={friend.avatar} alt={friend.name} className="frendlist__avatar" />
        <h3 className="frendlist__name">{friend.name}</h3>
        <p className="frendlist__is-oline">{friend.isOnline ? 'Online' : 'Offline'}</p>
        </li>
    })
}