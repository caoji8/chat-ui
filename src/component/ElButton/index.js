import React from 'react';
import PropTypes from 'prop-types';
import StyledElButton, {ElButtonText} from "./style";

const ElButton = ({type, onClick,round,children,...rest}) => {
    return (
        <StyledElButton type={type} round={round} onClick={onClick} {...rest}>
            <ElButtonText  type={type}>{children}</ElButtonText>
        </StyledElButton>
    );
};

ElButton.propTypes = {
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    round: PropTypes.bool,
};

export default ElButton;
