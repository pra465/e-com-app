import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/organisms/Header/Header';
import Home from './components/Tamplates/Home';
function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}
export default App;
