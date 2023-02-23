import styled from 'styled-components'

export const TodoContainer = styled.div`
    background-color: #f9fbfe;
    height:100vh;
    padding:30px;
`

export const TodoHeading =styled.h1`
    margin-top:0;
    text-align:center;
    
`

export const CreateTaskHeading = styled.h1`
    font-size:30px;
`

export const SpanItem = styled.span`
    font-weight:normal;
` 

export const Input= styled.input`
    width:80vw;
    margin-right:10px;
    height:30px;
    border-radius:5px;
    border: solid 1px #e4e7eb;
    padding:5px;
    padding-left:10px;
    outline:none;
    margin-bottom:5px;

    @media screen and (min-width:768px){
        width:50vw;
    }
`

export const AddButton = styled.button`
    height:40px;
    padding:10px;
    background-color: #4c63b6;
    border-radius:4px;
    border-style: none;
    color:#ffffff;
    font-weight:700;
    width:90px;
    margin-top:10px;
`

export const MyTasksHeading = styled.h1`
    font-size:25px;
    margin-top:20px;
`

export const TodoItemsList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding-left:0;
    width:80vw;

    @media screen and (min-width:768px){
        width:60vw;
    }
`

export const ErrorMessage = styled.p`
    color:red;
    font-size:12px;
    margin:0;
`

