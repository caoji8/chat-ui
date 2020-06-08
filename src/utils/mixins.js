import {css} from "styled-components";
// 圆形icon样式
// @params      color       icon颜色
export const circle = (color, size = '8px') => css`
      width: ${size};
      height: ${size};
      border-radius: 50%;
      background-color: ${color};
`;
