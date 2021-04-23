import './App.css';
import {Routes} from './routes';
import { GlobalProvider } from './context/GlobalState';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Routes/>
      </GlobalProvider>
    </div>
  );
}

export default App;
