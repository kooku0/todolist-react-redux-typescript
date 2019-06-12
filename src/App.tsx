import * as React from 'react';
import TodoListContainer from './containers/TodoListContainer'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TodoListContainer />
      </div>
    );
  }
}

export default App;