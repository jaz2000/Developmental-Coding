
import './App.css'
import Header from './components/Header'
function App() {
  const data="Description"
  const name="Jazeel Anwar"
  return (
    <div>
      <Header name={name}/>
      <h1 className='hello'style={{color:'red'}}>Hello World</h1>
      <Hello/>
      <p>This is sample {data}</p>
      
    </div>
    
  );
}

export default App;

function Hello(){
  return <h1 className='hello'>Hello World</h1>
}