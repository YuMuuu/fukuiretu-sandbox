var todos = [
  {
    id: '_1',
    name: 'Buy some milk',
    done: false
  },
  {
    id: '_2',
    name: 'Birthday present to Alice',
    done: false
  }
];

var Todo = React.createClass({
  render: function(){
    var todo = this.props.todo;
    return (
      <li>{todo.name}
        <button>Done</button>
      </li>
    );
  }
});

var TodoList = React.createClass({
  render: function(){
    // Note: todo.doneがfalseのもののみ抽出し、jsxとして返す
    var rows = this.props.todos.filter(function(todo){
      return !todo.done;
    }).map(function(todo){
      // Note: Todoコンポーネントからthis.props.todoで参照される.
      // key属性はコンポーネントを配列化する場合必須.
      return (<Todo key={todo.id} todo={todo}></Todo>);
    });

    return (
      <div className="active-todos">
        <h2>Active</h2>
        <ul>{rows}</ul>
      </div>
    )
  }
});

var TodoForm = React.createClass({
  getInitialState: function(){
    return {
      name: ''
    }
  },
  handleNameChange: function(e){
    this.setState({
      name: e.target.value
    })
  },
  handleSubmit: function(e){
    e.preventDefault();
    var name = this.state.name.trim();
    alert(name);
    this.setState({
      name: ''
    });
  },
  render: function() {
    var disabled = this.state.name.trim().length <= 0;
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.name} onChange={this.handleNameChange}></input>
        <input type="submit" disabled={disabled}></input>
      </form>
    );
  }
})






var App = React.createClass({
  render : function(){
    return (
      <div>
        <h1>My Todo</h1>
        <TodoForm/>
        // Note: TodoListコンポーネントからthis.props.todosで参照される
        <TodoList todos={todos}/>
      </div>
    );
  }
})

React.render(
  <App></App>,
  document.getElementById('app-container')
);
