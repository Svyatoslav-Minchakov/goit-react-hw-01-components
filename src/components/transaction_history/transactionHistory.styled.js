import { styled } from "styled-components";

export const TableWrapper = styled.table`
    margin: 0 auto;
    width: 80%;
    margin-bottom: 100px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2), 0 16px 20px rgba(0,0,0,0.2);

    & th {
        background-color: teal;
        color: white;
        padding: 10px;
        font-size: 22px;
    }
`

export const TableItem = styled.tr`
    background-color: darkgray;
    

    & td {
        padding: 5px;
        text-align: center;
        font-size: 18px;
    }
`