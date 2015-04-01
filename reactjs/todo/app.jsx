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

var App = React.createClass({
  render : function(){
    return (
      <div>
        <h1>My Todo</h1>
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
