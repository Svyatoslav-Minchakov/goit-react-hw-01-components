import {styled} from 'styled-components';

export const UserCard = styled.div`
    margin: 0 auto;
    background-color: rgb(186, 163, 207);
    width: 400px;
    border-radius: 5px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2), 0 16px 20px rgba(0,0,0,0.2);
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;

    & .avatar {
        width: 150px;
        border-radius: 50%;
        margin: 0 auto;
        background-color: #fff;
    }

    & .name {
        font-size: 24px;
        color: #fff;
    }

    & .tag,
    & .location {
        font-size: 16px;
        color: gray;
    }

    & .stats {
        display: flex;
        width: 100%;
        margin-top: 20px;

        & li {
            border: 1px solid gray;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            row-gap: 10px;
        }

        & li:not(:last-child) {
            border-right: none;
            
        }
    }

    & .label {
        font-size: 24px;
    }

    & .quantity {
        font-size: 24px;
        color: #fff;
    }
    
`