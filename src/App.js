import './css/my_reset.css';
import './css/App.css';

import Header from './components/Header';
import Main from './pages/Main';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
