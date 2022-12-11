import colors from "../../utils/Colors";

const SongInfoArtist = ({ songState }) => {
    return (
        <h1 className="song-info__artist">
            {songState.currentSong[0].artist}
        </h1>
    );
}

export default SongInfoArtist;