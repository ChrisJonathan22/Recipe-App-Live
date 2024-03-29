import React from 'react';
import './Home.scss';
import  Salmon from '../../../src/images/Salmon.jpg';

const Home = () => {
    return (
        <div>
            <div id='title'>
                <h1>Welcome to my Recipe App</h1>
            </div>
            <div id = 'img-holder'>
                <img id = 'salmon' alt = 'Salmon dish' src = {Salmon} />
                <p>Here is a perfectly cooked salmon.</p>
            </div>
        </div>
    );
}

export default Home;