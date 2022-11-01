import React from "react";
import './Calculadora.css';
import Container from '@mui/material/Container';
import { Box } from "@mui/system";

export default function Calculadora() {
    return (
        <div>
            <Box m={5}/>
            <Container maxWidth="xs">
                <div className="wrapper">

                    <button>AC</button>
                    <button>+/-</button>
                    <button>%</button>
                    <button>/</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>X</button>
                    <button>6</button>
                    <button>5</button>
                    <button>4</button>
                    <button>-</button>
                    <button>3</button>
                    <button>2</button>
                    <button>1</button>
                    <button>+</button>              
                    <button>0</button>
                    <button>,</button>        
                    <button>=</button>
                    
                </div>
            </Container>
        </div>                
    )
}