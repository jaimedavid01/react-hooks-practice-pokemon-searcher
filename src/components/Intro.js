import React from 'react';
import "./Intro.css";
import GIF from "./img/pokemongif.gif";
import { Link } from "react-router-dom";

function Intro() {
    return (
        <div className="intro">
            <Link to="/app">  
            <div className="btn">
                <p>X</p>
            </div>
            </Link>
            <div className="intro__left">
                <img className="gif" src={GIF} alt="" />
                <h1 className="h1title demo">DEMO</h1>
            </div>
            <div className="intro__right">
            <h1 className="h1title">Pokemon Searcher</h1>
            <h2 className="h1title">Project Goals:</h2>
            <ul>
                <li>
                Create an index displaying Pokemon 'cards'
                </li>
                <li>
                Render each Pokemon name, sprite, and hp in a card
                </li>
                <li>
                When clicked, the card should toggle between displaying the front and back sprites
                </li>
                <li>
                Allow users to search a Pokemon by its name in order to narrow down the cards shown on the page
                </li>
                <li>
                Wire up the form to add Pokemon.
                </li>
                <li>
                When a new Pokemon is added, it should show on the page without having to refresh.
                </li>
                </ul>
                    <h2 className="h1title">Project Requirements:</h2>
                <ul>
                    <li>
                     Components using state and props
                    </li>
                    <li>
                    Re-renders based on client-side events
                    </li>
                    <li>
                     Can both get data from, and post data to the json server/database
                    </li>
                </ul>

                <Link to="/app">
                <button className="introbutton">View Final Product</button>
                </Link>
                <a href="https://github.com/jaimedavid01/react-hooks-practice-pokemon-searcher">
                <button className="introbutton">View Code</button>
                </a>
                
            </div>
            
        </div>
    )
}

export default Intro;
