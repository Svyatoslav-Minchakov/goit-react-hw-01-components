import { styled } from "styled-components";

export const FrendListWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 100px;
`

export const MyFriend = styled.li`
    display: flex;
    align-items: center;
    width: 500px;
    background-color: #fff;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2), 0 16px 20px rgba(0,0,0,0.2);
    border-radius: 5px;
    padding: 10px;
    padding-left: 30px;
    position: relative;
    


    & .frendlist__avatar {
        width: 100px;
        height: 100px;
        display: block;
        margin-right: 90px;
        
    }

    &::before {
        content: "";
        width: 25px;
        height: 25px;
        background-color: tomato;
        display: flex;
        border-radius: 50%;
        margin-right: 20px;
    }

    & .frendlist__name {
        font-size: 24px;
    }

    & .frendlist__is-oline {
        position: absolute;
        top: 0;
        right: 10px;
        font-weight: bold;
        
    }
`