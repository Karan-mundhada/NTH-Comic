import React, {Fragment, useEffect, useState} from "react";
import '../styles/pane.css';

const Pane = () => {
    return (
        <div className="pane">
            <div>
            <img className="nth-logo" src="../public/static/nth-logo.png"/>
            <h1 className="nth-text">Network Treasure Hunt</h1>
            <h3 className="nth-text">Decrypt the Encrypted</h3>
            <p className="nth-text">The hunt begins in 10:10:10</p>
            </div>
        </div>
    )
}

export default Pane;