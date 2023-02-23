import styled from 'styled-components'

export const TodoListItem=styled.li`
    display: flex;
    flex-direction: row;
    width:85vw;
    margin-bottom:10px;

    @media screen and (min-width:768px){
        width:100%;
    }
`

export const CheckBoxInput=styled.input`
    height:20px;
    width:20px;
    margin-top:8px;
    margin-bottom:8px;
`

export const LabelContainer=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:100vw;
    background-color: #e6f6ff;
    height:35px;
    border-left:solid 5px #096f92;
    margin-left:10px;
    border-radius:5px;
    padding-left:15px;
    padding-top:10px;

    @media screen and (min-width:7768px){
        width:50vw;
    }
`

export const TodoLabel=styled.label`
    font-family:'Consolas';
    font-size:16px;
    text-decoration:${props => props.isChecked ? 'line-through':'none'}
    
`
export const DeleteButton = styled.button`
    border-style: none;
    background-color: transparent;
    margin-right:8px;
`

