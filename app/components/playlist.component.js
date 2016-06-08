import React from 'react';
import Song from '../components/song.component';

class Playlist extends React.Component {
  constructor(props) {
  	console.log(props)
    super(props);
  }
  render(){
    return(
      <div className="playlist">
        <table>
        	<tbody>
	        	{this.props.songs.map(song => <Song key={song.id} title={song.title} /> )}     		
        	</tbody>
        </table>	
      </div>
    )
  }

}

export default Playlist
/**/