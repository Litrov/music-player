import LibraryListItem from "../component/library/LibraryListItem";

const Library = ({uiState, setUiState, setSongState, songState, chillHop, audioRef,}) => {
    return (
        <div
            className={`library ${
                uiState.libraryShown ? "" : "library--hidden"
            }`}
        >
            <div className="library__wrapper">
                {chillHop.map((song) => (
                    <LibraryListItem
                        song={song}
                        songState={songState}
                        setSongState={setSongState}
                        audioRef={audioRef}
                    />
                ))}
            </div>
        </div>
    );
}

export default Library;