var playlist = { Metallica: "The Unforgiven II" };

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, {artistName: songTitle } )
  playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  playlist;
}
