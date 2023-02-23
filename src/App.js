import {Component} from 'react'
import TodoContext  from './context/TodoContext'
import TodoPage from './components/TodoPage'

class App extends Component{
  state = {todoList:[]}

  componentDidMount(){
    const storedTodoList = localStorage.getItem("todoList")
    if (storedTodoList) {
      this.setState({todoList:JSON.parse(storedTodoList)})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todoList !== this.state.todoList) {
      localStorage.setItem('todoList', JSON.stringify(this.state.todoList));
    }
  }

  addToList = (newTodoItem) => {
    this.setState(prevState => ({todoList:[...prevState.todoList,newTodoItem]}))
    // localStorage.setItem("todoList",JSON.stringify(this.state.todoList))
  }

  removeFromList = (todoId) => {
     const {todoList} = this.state 

     const newTodoList = todoList.filter(eachTodo => eachTodo.id!== todoId)
     this.setState({todoList:newTodoList})
  }
  
  changeCheckedStatus = (todoId) => {
     const {todoList} = this.state 

     const updatedList = todoList.map(eachTodo => {
      if(eachTodo.id === todoId){
         return {...eachTodo, isChecked: !eachTodo.isChecked}
      }
      return eachTodo
     })
     
     this.setState({todoList:updatedList})
  }

  render(){
    const {todoList} = this.state
    
    return (
      <TodoContext.Provider value={{
        todoList, 
        addToList:this.addToList, 
        removeFromList:this.removeFromList,
        changeCheckedStatus:this.changeCheckedStatus,
      }}
      >
          <TodoPage />
      </TodoContext.Provider>
    )
  }

}

export default App
