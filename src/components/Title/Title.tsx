import React from "react";
import './Title.css';


function Title(props: any) {
    return (
        <h1>FESTA DE ANIVERSSARIO DO {props.nome}!</h1>
    );
}

export {Title};