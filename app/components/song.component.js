import React from 'react';

class Song extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <tr className="song">
        <td>
          {this.props.title}
        </td>    	
      </tr>
    )
  }

}

export default Song
