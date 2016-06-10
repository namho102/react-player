import React from 'react';
import ClassNames from 'classnames';


class Song extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <tr>
        <td>
          <a className="song" onClick={this.props.changeCallback}>{this.props.title}</a>          
        </td>    	
      </tr>
    )
  }

}

export default Song
