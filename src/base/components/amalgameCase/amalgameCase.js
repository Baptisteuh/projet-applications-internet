import * as React from 'react';
import background from "../../../assets/images/fuseItemBackground.png"
import testSword from "../../../assets/images/sword.png"
import testApple from "../../../assets/images/apple.png"
import './amalgameCase.css'

class AmalgameCase extends React.Component {
  render() {
    return  <div class="image-container" id="container">
    <img id="koroguMoche" src={background} />
    {this.props.idItem == "2" ? <img class="test" src={testSword} />:<div></div>}
    {this.props.idItem == "1" ? <img class="test" src={testApple} />:<div></div>}
            </div>
  }
}

export default AmalgameCase