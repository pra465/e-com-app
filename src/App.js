import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/organisms/Header/Header';
import Footer from './components/Tamplates/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}
export default App;
