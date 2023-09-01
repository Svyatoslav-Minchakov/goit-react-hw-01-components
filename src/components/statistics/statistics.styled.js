import { styled } from "styled-components";

export const StatisticsBox = styled.section`
    width: 80%;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2), 0 16px 20px rgba(0,0,0,0.2);
    margin: 0 auto;
    padding: 10px;
    margin-bottom: 100px;


    & .title {
        text-align: center;
        margin: 0;
        padding: 50px;
        text-transform: uppercase;
    }

    & .stat-list {
        display: flex;

        & .item:nth-child(1) {
            background-color: aqua;
        }

        & .item:nth-child(2) {
            background-color: tomato;
        }

        & .item:nth-child(3) {
            background-color: blue;
        }

        & .item:nth-child(4) {
            background-color: green;
        }

        & .item:nth-child(5) {
            background-color: purple;
        }
    }

    & .item {
        display: flex;
        flex-direction: column;
        font-size: 28px;
        color: white;
        row-gap: 20px;
        padding: 20px;
        width: 100%;
        align-items: center;

        
    }
`

