import React from 'react'

const TodoContext = React.createContext({
    todoList:[],
    addToList:() => {},
    removeFromList:() => {},
    changeCheckedStatus:() => {},
})

export default TodoContext