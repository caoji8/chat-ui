import {useState} from "react";

/*
* @function     改变颜色hook
* @param        beforChangeColor    改变前颜色
* @param        changeColor         改变后颜色
* @return       Array               color颜色, changeHookCallback
* */
function useColorSwitch(beforeChangeColor,changeColor) {
    const [color, setColor] = useState(beforeChangeColor)

    const handleButtonClick = () => {
            console.log('点击事件')
            setColor(changeColor)
        }

    return [color, handleButtonClick]
}

export default useColorSwitch
