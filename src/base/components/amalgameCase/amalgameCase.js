import * as React from 'react';
import background from "../../../assets/images/fuseItemBackground.png"
import testSword1 from "../../../assets/images/items/testSword1.png"
import testSword2 from "../../../assets/images/items/testSword2.png"
import './amalgameCase.css'

class AmalgameCase extends React.Component {
  render() {
    return  <div class="image-container" id="container">
    <img src={background} />
    {this.props.idItem == "2" ? <img class="itemCase" src={testSword2} />:<div></div>}
    {this.props.idItem == "1" ? <img class="itemCase" src={testSword1} />:<div></div>}
            </div>
  }
}

export default AmalgameCase