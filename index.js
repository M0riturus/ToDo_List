function App(){
    const [todos, setTodos] = React.useState([
        {
            text: 'Learn react',
            isComplete: false,
        },
        {
            text: 'meet friend for lunch',
            isComplete: false,
        },
        {
            text: 'build todo app',
            isComplete: false,
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, {text:text, iscompleted:false}];
        setTodos(newTodos);
    }

    const removeTodo = index => {
        let temp = [...todos];
        temp.splice(index,1);
        setTodos(temp);
    }


    return (
        <div className = "app">
            <div className="todo-list">
                {todos.map((todo,i) => 
                        <Todo index={i} key={i} todo={todo} remove={removeTodo}/>)}
                <TodoForm addTodo={addTodo}/>
            </div>
         </div>

    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)