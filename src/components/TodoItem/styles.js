import styled from "styled-components";

export const Main = styled.div`
    display:flex;
    flex-direction:row;
    background-color:#282828;
    justify-content:space-between;
    align-items:center;
    height:fit-content;
    min-width:50rem;
    border-radius:15px;
    margin:.5rem;
    box-shadow: -4px -4px 10px rgba(67,67,67,0.5),
                inset 4px 4px 10px rgba(0,0,0,0.5),
                inset -4px -4px 10px rgba(67,67,67,0.5),
                4px 4px 10px rgba(0,0,0,0.3);
    p{  
        color:white;
        padding:1em;
    }
    button{
        outline:none;
        background-color:unset;
        border:none;
        margin-right:2em;
        border-radius:50%;
        height:min-content;
        display:flex;
        align-items:center;
        :hover{
            cursor: pointer;
        }
        :active{
            box-shadow: -4px -4px 10px rgba(67,67,67,0.5),
                inset 4px 4px 10px rgba(0,0,0,0.5),
                inset -4px -4px 10px rgba(67,67,67,0.5),
                4px 4px 10px rgba(0,0,0,0.3);
        }
    }
`

export const TaskCompleted = styled.p`
        color:white;
        padding:1em;
        text-decoration:line-through;
        width:100px;
        :hover{
            cursor: pointer;
        }
`

export const TaskIncomplete = styled.p`
        color:white;
        padding:1em;
        width:100px;
        :hover{
            cursor: pointer;
        }
`

export const Buttons = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`