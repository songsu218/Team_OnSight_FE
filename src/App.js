import './css/my_reset.css';
import './css/App.css';
import Header from './components/Header';
// import Search from './pages/Search';
import SignInPage from './pages/SignInPage';

function App() {
  return (
    <div>
      <Header />
      {/* <Search /> */}
      <SignInPage />
    </div>
  );
}

export default App;
