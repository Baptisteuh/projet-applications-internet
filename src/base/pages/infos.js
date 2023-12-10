import * as React from 'react';
import './infos.css';

export default function Infos() {

    return (
        <div className='infos-text'>
            <section>
                <h1>Welcome to our Zelda: Tears of the Kingdom Amalgae Creation Site - Zeldam !</h1>
                <p>We are thrilled to welcome you to the fascinating universe of this game, and we hope our site will make your experience even more enriching.</p>
            </section>
            <section>
                <h2>Site Features :</h2>

                <ul>

                    <li><h3>Amalgame :</h3></li>
                    <p>The <a href='/' className='page-link'>Amalgame</a> tab allows you to visualize the fusion of two weapons from Zelda: Tears of the Kingdom. Create unique combinations and discover synergies between different weapons to maximize your knowledge of the game.</p>

                    <li><h3>Wiki :</h3></li>
                    <p>Visit the <a href='/wiki' className='page-link'>Wiki</a> tab to explore a comprehensive database of various items in Zelda: Tears of the Kingdom.</p>

                    <li><h3>Shop :</h3></li>
                    <p>In the <a href='/shop' className='page-link'>Shop</a> tab, personalize your experience by purchasing unique themes for the site. Earn rubies by creating amalgams, unlock new items in the Wiki, and use these points to acquire themes that match your style.</p>

                </ul>
            </section>

            <section>
                <h2>Rupees System :</h2>
                <p>Earn 30 rupees with each amalgame creation. These rubies can be used in the Shop to purchase exclusive themes. Additionally, creating amalgams unlocks new items in the Wiki, encouraging exploration and active participation on the site.</p>
            </section>

            <section>
                <h2>Credits :</h2>
                <p>This project was carried out as part of the "Web and Mobile Applications" module by Mehdi Boudjema, Enzo Furriel, and Baptiste Touchais. Their passion and dedication enabled the creation of this site for the Zelda: Tears of the Kingdom community.</p>
                <p>We would like to express our gratitude to the community supporting this project. Your enthusiasm and commitment make this platform a dynamic and interactive space for fans of the game.</p>
                <p>Explore, create, and fully enjoy your adventure on the Zelda: Tears of the Kingdom site!</p>
                <p>Best regards, The development team</p>
            </section>
        </div>
    );
}
