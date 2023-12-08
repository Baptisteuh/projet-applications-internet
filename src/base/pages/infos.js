import * as React from 'react';
import './infos.css'

class Infos extends React.Component {

    render() {
        return  <div className='infos-text'>
            <section>
                <p>Nous sommes ravis de vous accueillir dans l'univers fascinant de ce jeu, et nous espérons que notre site rendra votre expérience encore plus enrichissante.</p>
            </section>
            <section>
                <h2>Fonctionnalités du site :</h2>

                <h3>Amalgame :</h3>
                <p>L'onglet Amalgame vous permet de visualiser la fusion de deux armes de Zelda: Tears of the Kingdom. Créez des combinaisons uniques et découvrez les synergies entre différentes armes pour maximiser votre puissance.</p>

                <h3>Wiki :</h3>
                <p>Consultez l'onglet Wiki pour explorer une base de données complète des différents items présents dans Zelda: Tears of the Kingdom. Obtenez des informations détaillées sur les objets du jeu pour améliorer votre stratégie.</p>

                <h3>Shop :</h3>
                <p>Dans l'onglet Shop, personnalisez votre expérience en achetant des thèmes uniques pour le site. Accumulez des points en créant des amalgames, débloquez de nouveaux items dans le Wiki et utilisez ces points pour acquérir des thèmes qui correspondent à votre style.</p>
            </section>

            <section>
                <h2>Système de Points :</h2>
                <p>Gagnez des points en créant des amalgames. Ces points peuvent être utilisés dans le Shop pour acheter des thèmes exclusifs. De plus, la création d'amalgames débloque de nouveaux items dans le Wiki, encourageant ainsi l'exploration et la participation active sur le site.</p>
            </section>

            <section>
                <h2>Crédits :</h2>
                <p>Ce projet a été réalisé dans le cadre du module "Applications web et mobiles" par Mehdi Boudjema, Enzo Furriel et Baptiste Touchais. Leur passion et leur dévouement ont permis la création de ce site pour la communauté de Zelda: Tears of the Kingdom.</p>
                <p>Nous tenons à exprimer notre gratitude envers la communauté qui soutient ce projet. Votre enthousiasme et votre engagement font de cette plateforme un lieu dynamique et interactif pour les fans du jeu.</p>
            </section>
            <section>
                <p>Explorez, créez, et profitez pleinement de votre aventure sur le site de Zelda: Tears of the Kingdom!</p>
                <p>Cordialement, L'équipe de développement</p>
            </section>
            </div>
    }
}

export default Infos