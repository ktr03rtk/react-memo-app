import './App.css';
import Main from './components/Main';

function App() {
  return (
    <div>
      <h1 className='bg-primary text-white display-4'>Memo app</h1>
      <div className='container'>
        <h4 className='my-3'>Memo. </h4>
        <Main />
      </div>
    </div>
  );
}

export default App;
