import React from 'react';
import './App.css';
import Button from "./component/Button";
import useColorSwitch from "./Hooks/useColorSwitch";

function App() {
    // 接收hook
    const [color, handleButtonClick1] = useColorSwitch('green','red')
    const [color2, handleButtonClick2] = useColorSwitch('red','yellow')


  return (
    <div>
        <Button label={'按钮'} width={'50px'} onClick={handleButtonClick1}>
            <span>&gt;</span>
        </Button>
        <p style={{color: color}}>Text 1</p>
        <Button label={'Click me'} width={'90px'} onClick={handleButtonClick2}/>
        <p style={{color: color2}}>Text 1</p>
    </div>
  );
}

export default App;
