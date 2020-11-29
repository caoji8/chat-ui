
import styled from 'styled-components'

const Content = styled.div`
  ${({visible }) => !visible && `display: none`};
  background: ${({ theme }) => theme.background};
  border-radius: 21px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
  padding: 12px 30px;
  position: absolute;
  
  bottom: calc(100% + 12px);
  ${({ offset }) => offset && `transform: translate(${offset.x || 0}, ${offset.y || 0})`}
  
`;

// 三角形位置
const Triangle = styled.div`
  ${({visible }) => !visible && `display: none`};
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 6px 0 6px;
  border-color: ${({ theme }) =>  theme.background} transparent transparent transparent;
  left: calc(50% - 6px);
  bottom: calc(100% + 12px - 5px);
  
  ${({ offset }) => offset && `transform: translateY(${offset.x || 0}, ${offset.y || 0})`}
`;

const Target = styled.div``;

const StyledPopover = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export default StyledPopover;
export {
    Content,
    Triangle,
    Target
}
