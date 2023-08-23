import React, {Fragment, useEffect, useRef, useState} from "react";
import '../styles/background.css';

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
        // c.fillRect(0, 0, canvas.width, canvas.height);

        const numX = 12
        const numY = 4
        const comicWidth = canvas.width/numX
        const comicHeight = canvas.height/numY
        const numTextures = 10
        const comicSpeed = 1
        const opacity = 0

        let textures = []
        let assTexture = []
        for(let i=1; i<=numTextures; i++){
            const texture = new Image()
            texture.src = `./public/static/textures/texture${i}.jpg`
            texture.onload = ()=>{
                //console.log(texture)
                textures.push(texture);
            }
        }

        let offsets = []
        let speed = []
        for(let i=0; i<numX+1; i++){
            offsets.push(0)
            speed.push(0.2+comicSpeed*Math.random())
        }
        // let offset = 0;
        
        function draw(){
            // c.fillStyle = 'white'
            c.fillStyle = 'rgb(0, 0, 0, 0.7)'
            for(let i=0; i<numX+1; i++){
                for(let j=0; j<numY+1; j++){
                    const xpos = i*comicWidth;
                    const ypos = (j*comicHeight+offsets[i])%(canvas.height+comicHeight)-comicHeight;
                    const texture = textures[(i+j)%numTextures]
                    if(texture)c.drawImage(texture, 0, 0, texture.width, texture.height, xpos, ypos, comicWidth, comicHeight);
                    c.fillStyle = `rgb(0, 0, 0, ${0.3+0.2*Math.sin((i+j)/numX)+0.4*Math.sin(offsets[i]/canvas.height)})`
                    c.fillRect(xpos, ypos, comicWidth, comicHeight)
                }
            }
        }
        
        function animate(){
            window.requestAnimationFrame(animate)
            draw()
            // c.drawImage(texture, 0, 0, texture.width, texture.height, 0, -150, comicWidth, comicHeight);    
            for(let i=0; i<numX+1; i++){
                offsets[i]+=speed[i];
                if(offsets[i]>canvas.width+comicHeight)offsets[i]=0;
            }
            // offset+=1;
            // if(offset>canvas.width)offset=0;
            c.restore()
        }
        
        animate()
        
    }, [])

    return( 
    <Fragment>
        <canvas ref={canvasRef} style={{padding : '0px'}}></canvas>

    </Fragment>
    )
}

export default BackGround;