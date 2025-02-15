import data from './data'
import Header from './components/Header';
import Pipeline from './components/Pipeline';
import React, {useState} from 'react';

function App() {
  const [selectedButton, setSelectedButton] = useState(null);
  return (
    <div className="App">
        <Header />
        {data.map((item, index) => {
            return <Pipeline key={index} {...item} isSelected={selectedButton===index} onClick={()=> setSelectedButton(index)} />
        })}
    </div>
  );
}

export default App;
