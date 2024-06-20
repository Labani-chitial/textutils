
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


let name = "Harry"
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" homeText="Home TextUtils" />

      <div className='container my-3'>
      <TextForm heading="Enter text here"/>
      </div>
      
    </>
  );
}

export default App;
