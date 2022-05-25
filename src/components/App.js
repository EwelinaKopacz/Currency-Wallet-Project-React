import '../styles/App.css';
import Form from './Form/Form';
import store from '../modules/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
            Currency Wallet
        </header>
        <Form/>
      </div>
    </Provider>
  );
}

export default App;
