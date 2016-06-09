import React from 'react';
import Song from '../components/song.component';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
  }
  
  callbackClick(key) {
    this.props.playlistHandle(key);
    console.log(key);
  }
    
  render(){
    return(
      <div className="playlist">
        <table>         
          <tbody>
            {this.props.songs.map(song =>
              <Song
                key={song.id}
                changeCallback={this.callbackClick.bind(this, song.id)}
                title={song.title} />
            )}     		
            
          </tbody>
        </table>
        
      </div>
    )
  }
  
}

export default Playlist