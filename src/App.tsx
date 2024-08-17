import logo from './logo.svg';
import './styles/App.css';
import Form from './components/Form';
import { LOGO_TEST_ID } from './constants/tests.constants';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' data-testid={LOGO_TEST_ID} />
      </header>
      <Form />
    </div>
  );
};

export default App;
