import React, { Component } from 'react'
import AgiIcon from './img/agi.png'
import IntIcon from './img/int.png'
import StrIcon from './img/str.png'


class AttributeBadge extends Component{
  constructor(props) {
    super(props);

    if (this.props.attribute === 'agi'){
      this.state = { attributeIcon : AgiIcon };
    }else if (this.props.attribute === 'str'){
      this.state = { attributeIcon : StrIcon };
    }else if (this.props.attribute === 'int') {
      this.state = {attributeIcon: IntIcon};
    }else {
      this.state = { attributeIcon: ""}
    }

  }

  render (){
    return (
      <div>
        <img src={this.state.attributeIcon} alt="atr"/>
      </div>
    )
  }
}

export default AttributeBadge