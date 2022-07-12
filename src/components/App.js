import '../styles/App.css';
import Form from './Form/Form';
import Table from './Table/Table';
import store from '../modules/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
            Portfel walutowy
        </header>
        <Form/>
        <Table/>
      </div>
    </Provider>
  );
}

export default App;
