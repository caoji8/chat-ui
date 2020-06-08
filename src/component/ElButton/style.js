import styled from "styled-components";
import theme from "../../theme";

let selectTypeColor = (type) => {
    if (type === 'primary') {
        return theme.primaryColor
    } else if (type === 'message') {
        return theme.elMessageColor
    } else if (type === 'error') {
        return theme.elErrorColor
    } else if (type === 'success') {
        return theme.elSuccessColor
    } else if (type === 'warning') {
        return theme.elWarningColor
    } else if (type === 'normal') {
        return theme.elNormalColor
    } else {
        return theme.elNormalColor
    }
}

const StyledElButton = styled.button`
    height: 39.6px;
    width: 98px;
    background-color: ${({type}) => selectTypeColor(type)};
    border: 1px solid rgba(0,0,0,0.7);
    border-radius: ${({round}) => {
        if (round) {
            return '20px'
        } else {
            return '5px'
        }
}};
    outline: none;
    cursor: pointer;
    &:hover {
      filter: hue-rotate(15deg);
    }
    &:focus {
      filter: hue-rotate(15deg);
    }
`;

const ElButtonText = styled.span`
    color: ${({type}) => {
        if (type === 'normal') {
            return 'rgb(0,0,0)'
        } else {
            return 'rgb(255,255,255)'
        }
}};
    font-size: 14px;
    font-weight: 500;
`;

export default StyledElButton
export {
    ElButtonText
}
