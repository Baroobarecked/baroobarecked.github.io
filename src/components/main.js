import React, { Component } from "react";
import { hot } from 'react-hot-loader';


class Main extends Component {

    componentDidMount(){
        function drawLines(ctx, step, amp, color) {
            let width = ctx.canvas.width;
            let height = ctx.canvas.height;
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = `rgb(${255 / 2 - color / 2}, ${0}, ${150})`;
            
            let x = 0;
            let y = 0;
            let amplitude = amp;
            let frequency = 50;
            while (x < width) {
                y = height/2 + amplitude * Math.sin((x + step)/frequency);
                ctx.lineTo(x, y);
                x = x + 1;
            }
            ctx.stroke();
        }
        let step = 0;
        function draw () {
            let canvas = document.getElementById('spiral')
            let ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, 150, 150);
            
            // drawLines(ctx, step, 50)
            let j = 6
            let color = 255;
            for (let i = -4; i < canvas.height; i += 5) {
                drawLines(ctx, i + step, j, color);
                j += 2;
                color -= 8.5;
            }
            
            step += 0.3;
            window.requestAnimationFrame(draw);
        }
        draw()
    }

    render(){
        return (
            <div id="main">
                <h1>Software</h1>
                <h1>Developer</h1>
                <canvas id="spiral" width="100vw" height="150"></canvas>
                <p>I am a software developer focused on applying creative solutions to unique problems.</p>
            </div>
        )
    }
}

export default hot(module)(Main);