import styled from "styled-components";

export const Form = styled.form`
        margin-bottom:2em;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        position: relative;
        button{
            background-color:transparent;
            outline:none;
            border:none;
            position:absolute;
            right:-30px;
            bottom:0;
            :hover{
                cursor: pointer;
            }
        }
        input{
            width:500px;
        }
`