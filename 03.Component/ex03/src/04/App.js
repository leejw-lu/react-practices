import React, {useRef} from 'react';
import logo from './assets/images/react-logo.png';

export default function App() {

    const imgRef= useRef(null);

    const onKeyPressInput= (e) => {
        if (e.key="Enter") {
            console.log("KeyPress: "+ e.target.value);
        }

    };

    const onChangeInput= (e) => {
        console.log("Changed" + e.target.value);
    };

    const onFocusInput = () => {
        console.log("Focused");
    }

    const onBlurInput = () => {
        console.log("Blur");
    }

    const onMouseOverImg = (e) => {
        const offsetTop = imgRef.current.offsetTop;
        const offsetLeft= imgRef.current.offsetLeft;
        
        //console.log("Mousemove", `x=${e.clientX}, y=${e.clientY}`);
        console.log("Mouseover", `x=${e.clientX- offsetLeft}, y=${e.clientY-offsetTop}`);
    }

    const onMouseMoveImg = (e) => {
        console.log("Mousemove", `x=${e.clientX}, y=${e.clientY}`);
    }

    const onMouseOutImg = (e) => {
        console.log("Mouseout", `x=${e.clientX}, y=${e.clientY}`);
    }

    const onMouseDownImg = (e) => {
        console.log("Mousedown", `x=${e.clientX}, y=${e.clientY}`);
    }

    const onMouseUpImg = (e) => {
        console.log("MouseUp", `x=${e.clientX}, y=${e.clientY}`);
    }

    const onClickImg = (e) => {
        console.log("onclick", `x=${e.clientX}, y=${e.clientY}`);
    }

    const onDoubleClickImg = (e) => {
        console.log("dbclick", `x=${e.clientX}, y=${e.clientY}`);
    }

    return (
        <>
            <h2>Event Handler  예제</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요'
                onKeyPress={onKeyPressInput}
                onChange={onChangeInput}
                onFocus={onFocusInput} 
                onBlur={onBlurInput}
                />
                <br/>
                <br/>
            <img
                ref={imgRef}
                style={ {
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                } }
                src={logo} 
                onMouseOver ={onMouseOverImg} 
                onMouseMove = {onMouseMoveImg}
                onMouseOut= {onMouseOutImg}
                onMouseDown= {onMouseDownImg}
                onMouseUp= {onMouseUpImg}
                onClick= {onClickImg}
                onDoubleClick= {onDoubleClickImg}
                />
        </>
    );
}