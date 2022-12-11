import React from "react";
import SongInfoTitle from "../../elements/main/SongInfoTitle";
import SongInfoArtist from "../../elements/main/SongInfoArtist";


const SongInfo = ({ songState }) => {
    return (
        <div className="song-info">
            <SongInfoTitle songState={songState} />
            <SongInfoArtist songState={songState} />
        </div>
    );
}

export default SongInfo;