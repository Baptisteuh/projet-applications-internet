import * as React from 'react';
import background from "../../../assets/images/fuseItemBackground.png"
import testSword1 from "../../../assets/images/items/boulder-breaker-weapon-zelda-totk-wiki-guide.png"
import testSword2 from "../../../assets/images/items/bomb_flower_materials_zelda_tears_of_the_kingdom_wiki_guide_200px.png"
import './amalgameCase.css'

class AmalgameCase extends React.Component {
  render() {
    return  <div class="image-container" id="container">
    <img src={background} alt="Case" />
    {this.props.idItem === "2" ? <img class="itemCase" src={testSword1} alt="Weapon" />:<div></div>}
    {this.props.idItem === "1" ? <img class="itemCase" src={testSword2} alt="Item" />:<div></div>}
            </div>
  }
}

export default AmalgameCase