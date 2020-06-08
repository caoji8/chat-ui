import React from 'react';
import styled from "styled-components";

// tagged template literals 语法
const StyleButton = styled.div`
    width: ${({width}) => width || '80px'};
    background-color: ${
    ({theme}) => theme.primaryColor
    }`;

function Button({width, onClick, label, children}) {
    return (
        <div>
          <StyleButton width={width} onClick={onClick}>
              <button>{label}</button>
              {children}
          </StyleButton>
        </div>
    );

}

export default Button;
