import styled from "styled-components";

export const Main = styled.form`
    position: absolute;
    align-self:center;
    display:flex;
    align-items:center;
    background-color:#282828;
    border: 1px solid #97C662;
    border-radius:15px;
    height:fit-content;
    width:20vw;
    padding:1vw;
    button{
        border:none;
        margin:0;
        border-radius:50%;
    }
    @media only screen and (max-width: 780px) {
        width:70vw;
        padding:5vw;

        input{
        width:50vw;
        align-self:center;
    }
    }
`
