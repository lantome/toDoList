import ToDoList from './componets/ToDoList'
import {Provider} from 'react-redux'
import {store} from './Redux/store'

const  App = () => {
  return (
    <div className="App">
      <Provider store={store}>
      <ToDoList/>
      </Provider>
    </div>
  );
}

export default App;
