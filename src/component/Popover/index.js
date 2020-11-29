
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import StyledPopover, {Content, Target, Triangle} from "./style";

/* @params content 文本内容
*  @params offset  偏移位置
*  @params onVisible 显示回调
*  @params onHide   隐藏回调
* */
function Popover ({children, content, offset = {}, onVisible, onHide,...rest}) {
        //设置显示隐藏状态
        const [visible, setVisible] = useState(false)

        const handleClick = () => {
            if (visible) {
                setVisible(false)
                onHide && onHide()
            } else {
                setVisible(true)
                onVisible && onVisible()
            }
        }

        return (
            <StyledPopover onClick={handleClick} { ...rest }>
                <Content visible={visible} offset={offset}>{content}</Content>
                <Triangle visible={visible} offset={offset} />
                <Target>{ children }</Target>
            </StyledPopover>
        );
}

Popover.propTypes = {
    children: PropTypes.any,
    content: PropTypes.any,
    offset: PropTypes.shape({
        x: PropTypes.string,
        y: PropTypes.string,
    }),
    onVisible: PropTypes.func,
    onHide: PropTypes.func,
};

export default Popover;
