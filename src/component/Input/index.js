
import React from 'react';
import PropTypes from 'prop-types';
import StyledInput, {InputContainer, Prefix, Suffix} from "./style";
import Icon from "../Icon";

import { ReactComponent as SearchIcon } from "../../assets/icon/search.svg";
import {useTheme} from "styled-components";
import InputText from "./InputText";

function Input ({placeholder = "请输入内容...", prefix, suffix, ...rest}) {
        return (
            <InputContainer {...rest}>
                {prefix && <Prefix>{prefix}</Prefix>}
                <StyledInput placeholder={placeholder}/>
                {suffix && <Suffix>{suffix}</Suffix>}
            </InputContainer>
        );
}

function Search({placeholder = '请输入搜索内容...', ...rest}) {
    // 自定义自定义组件主题方法二
    const theme = useTheme();
    return (
        <Input
            placeholder={placeholder}
            prefix={<Icon icon={SearchIcon} color={theme.gray3} width={18} height={18} />}
            { ...rest }
        />
    )
}

Input.Search = Search;
Input.Text = InputText

Input.propTypes = {
    placeholder: PropTypes.string,
    prefix: PropTypes.any,
    suffix: PropTypes.any
};

export default Input;
