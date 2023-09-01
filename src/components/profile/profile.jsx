
import { UserCard } from './profile.styled';


export const User = (props) => {
   return <UserCard className="profile">
  <div className="description">
    <img
      src={props.avatar}
      alt={props.username}
      className="avatar"
    />
    <p className="name">{props.username}</p>
    <p className="tag">{props.tag}@pmarica</p>
    <p className="location">{props.location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{props.stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{props.stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{props.stats.likes}</span>
    </li>
  </ul>
</UserCard>
}



