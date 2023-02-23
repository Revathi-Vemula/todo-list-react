// import TodoContext from "../../context/TodoContext"
import {BsTrash} from 'react-icons/bs'
import {
    TodoListItem,
    CheckBoxInput,
    TodoLabel,
    LabelContainer,
    DeleteButton
} from './styledComponents'

const TodoItem = props => {
    const {onClickCheckBoxInput,todoDetails,onClickDelete} = props
    const {name,id,isChecked} = todoDetails

    const onClickCheckbox = () => {
        onClickCheckBoxInput(id)
    }

    const onClickDeleteTodo = () => {
        onClickDelete(id)
    }

    return (
        <TodoListItem>
            <CheckBoxInput type="checkbox" id={id} onClick={onClickCheckbox}/>
            <LabelContainer>
                <TodoLabel htmlFor={id} isChecked={isChecked}>{name}</TodoLabel>
                <DeleteButton type="button" onClick={onClickDeleteTodo}>
                    <BsTrash size={20} />
                </DeleteButton>
            </LabelContainer>
        </TodoListItem>
    )
}

export default TodoItem