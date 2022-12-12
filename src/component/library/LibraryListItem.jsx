import chillHop from "../../data/data";
import LibrarySongName from "../../elements/library/LibrarySongName";
import LibrarySongArtist from "../../elements/library/LibrarySongArtist";
import LibrarySongCover from "../../elements/library/LibrarySongCover";

const LibraryListItem = ({ song, setSongState, songState, audioRef }) => {

    const changeCurrentSongHandler = () => {
        setTimeout(() => {
            setSongState({
                ...songState,
                currentSong: [chillHop[chillHop.findIndex((s) => s === song)]],
            });
            console.log(songState.isPlaying);
            if (songState.isPlaying) {
                const playPromise = audioRef.current.play();
                console.log(playPromise);
                if (playPromise !== undefined) {
                    console.log("undefined");
                    playPromise.then((audio) => {
                        audioRef.current.play();
                    });
                }
            }
        }, 150);
    };

    return (
        <div
            onClick={changeCurrentSongHandler}
            className={`library__list-item ${
                song.id === songState.currentSong[0].id ? "active-song" : ""
            }`}
        >
            <LibrarySongCover song={song} />
            <div className="library__song-column">
                <LibrarySongName song={song} />
                <LibrarySongArtist song={song} />
            </div>
        </div>
    );
}

export default LibraryListItem;