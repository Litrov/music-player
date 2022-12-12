const LibrarySongCover = ({ song }) => {
    return (
        <figure className="library__song--cover">
            <img
                src={`${song.cover}`}
                alt="Artwork"
                className="library-song-cover-art"
                // style={{
                //     boxShadow: `${shadow(0, 0, 15, 0, colors[song.palette])}`,
                // }}
            />
        </figure>
    );
}

export default LibrarySongCover;