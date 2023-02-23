import { Component } from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoContext from '../../context/TodoContext'
import TodoItem from '../TodoItem'
import {
    TodoContainer,
    TodoHeading,
    Input,
    CreateTaskHeading,
    SpanItem,
    AddButton,
    MyTasksHeading,
    TodoItemsList,
    ErrorMessage
} from './styledComponents'

class TodoPage extends Component {
    state={todoItemName:'',todoItem:{},showTaskErrMsg:false}

    onChangeTodoInput = event => {
        this.setState({todoItemName:event.target.value})
    }

    onClickAddTask = () => {
        const {todoItemName} = this.state 
        const newTodoItem = {
            id:uuidv4(),
            name:todoItemName,
            isChecked:false,
        } 

        if (todoItemName !== ''){
            this.context.addToList(newTodoItem);
            this.setState({todoItem:{...newTodoItem}, todoItemName:''})
        }else{
            this.setState(prevState => ({showTaskErrMsg:!prevState.showTaskErrMsg}))
        }

    }

    render(){
        const {todoItemName,showTaskErrMsg} = this.state 
        
        return (
            <TodoContext.Consumer>
            {
                value => {
                    const {todoList,changeCheckedStatus,removeFromList} = value
        
                    return (
                        <TodoContainer>
                            <TodoHeading>Todos</TodoHeading>
                            <CreateTaskHeading>Create <SpanItem>Task</SpanItem></CreateTaskHeading>
                            <Input type="text" 
                            value={todoItemName} 
                            onChange={this.onChangeTodoInput} />
                            {showTaskErrMsg && <ErrorMessage>*Required</ErrorMessage>}
                            <AddButton type="button" onClick={this.onClickAddTask}>Add Task</AddButton>
                            <MyTasksHeading>My Tasks</MyTasksHeading> 
                            <TodoItemsList>
                                {todoList.map(eachTodo => 
                                    <TodoItem 
                                        todoDetails={eachTodo} 
                                        key={eachTodo.id} 
                                        onClickCheckBoxInput={changeCheckedStatus}
                                        onClickDelete={removeFromList}
                                    />
                                )}
                            </TodoItemsList>
                        </TodoContainer>
                    )
                }
            }
            </TodoContext.Consumer>
        )
       
    }
    
}

TodoPage.contextType = TodoContext;
export default TodoPage