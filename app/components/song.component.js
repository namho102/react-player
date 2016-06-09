import React from 'react';

class Song extends React.Component {
  constructor(props) {
    super(props);
  }

  // handleClick(event) {
  //   console.log(event.target);

  // }
  render(){
    return(
      <tr className="song">
        <td>
          <a onClick={this.props.changeCallback}>{this.props.title}</a>          
        </td>    	
      </tr>
    )
  }

}

export default Song
