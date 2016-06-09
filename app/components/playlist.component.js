import React from 'react';
import Song from '../components/song.component';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
  }
  
  callbackClick(key) {
    console.log(key);
  }
  
  handleClick(event) {
    // console.log('You clicked: ' + props.items[i]);
    console.log(event);
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