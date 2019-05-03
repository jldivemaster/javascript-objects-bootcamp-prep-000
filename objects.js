var playlist = { artist: "song" };

function updatePlaylist(playlist, artist, song) {
  Object.assign({}, playlist, {artist: song } )
  playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.artist;
  playlist;
}