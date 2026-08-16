// import logo from './logo.svg';
// import './App.css';
import Navbar from "./components/navbar";
const getRandomNumber = ()=>{
  return Math.floor(Math.random()*100);
}
const showDesc = false;

const isloggedProps = true;
function App() {
  return (
    <div>
      <Navbar isloggedProps= {isloggedProps}/>
      <h1>Hi This is my first react app!!</h1>
      {showDesc ? <p1>{getRandomNumber()}</p1> : <p1>No Description</p1>}
    </div>
  );
}
// JSX is the javascript extention where you can return HTML objects
// it should start with capital word

export default App;
