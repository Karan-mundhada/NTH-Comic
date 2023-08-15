import React, {Fragment, useEffect, useRef, useState} from "react";

const BackGround = () => {
    const canvasRef = useRef(null);
    // const canvas = document.querySelector('canvas')
    // const c = canvas.getContext('2d')
    useEffect(() => {
        const canvas = canvasRef.current;
        const c = canvas.getContext('2d');
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight 
        c.fillStyle = 'rgb(0.5, 0, 0, 1)';
        c.fillRect(0, 0, canvas.width, canvas.height);
    }, [])

    return( 
    <Fragment>
        <canvas ref={canvasRef} style={{padding : '0px'}}></canvas>
    </Fragment>
    )
}

export default BackGround;