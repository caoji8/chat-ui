
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import StyledDropdown, {DropdownContainer} from "./style";

function Dropdown ({children, content, align = 'right',...rest}) {
        const [visible, setVisiable] = useState(false)
        return (
            <StyledDropdown onClick={() => setVisiable(!visible)} { ...rest }>
                { children }
                {content && (
                    <DropdownContainer align={align} visible={visible} >{content}</DropdownContainer>
                )}
            </StyledDropdown>
        );
}

Dropdown.propTypes = {
    children: PropTypes.any,
    content: PropTypes.any,
    align: PropTypes.oneOf(['top','left','right','bottom'])
};

export default Dropdown;
