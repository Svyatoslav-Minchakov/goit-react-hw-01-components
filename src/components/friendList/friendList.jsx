import { FrendListItem } from "./friendListItem"
import { FrendListWrapper } from './friendList.styled'
import data from '../../friends.json'

export const FriendList = () => {
    return <FrendListWrapper className="friend-list">
        <FrendListItem
            friends={data}
        />
    </FrendListWrapper>
}