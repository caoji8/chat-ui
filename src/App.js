import React from 'react';
import ChatApp from "./component/ChatApp";
import theme from "./theme";
import {ThemeProvider} from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <ChatApp />
            </ThemeProvider>
        </Router>
        );
  // return (
  //   <div>
  //       {/*<Button label={'按钮'} width={'50px'} onClick={handleButtonClick1}>*/}
  //           <span>&gt;</span>
  //       {/*</Button>*/}
  //       <p style={{color: color}}>Text 1</p>
  //       {/*<Button label={'Click me'} width={'90px'} onClick={handleButtonClick2}/>*/}
  //       <p style={{color: color2}}>Text 1</p>
  //   </div>
  // );
}

export default App;
