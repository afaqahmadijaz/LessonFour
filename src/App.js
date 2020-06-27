import React, {useState} from 'react';
import Message from './Message.js'
import './App.css';

function App() {

  let [count, setCount] = useState(1);

  return (
    <div>
      <Message counter = {count}/>
        < br />
          <button onClick = { () => setCount(++count)}>
            Update Counter
            </button>
    </div>
  );
}

export default App;
