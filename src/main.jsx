import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import STORE from './redux/store';
import App from './App';

const ROOT = ReactDOM.createRoot(document.getElementById('root'));
ROOT.render(
  <Provider store={STORE}>
    <App />
  </Provider>
);