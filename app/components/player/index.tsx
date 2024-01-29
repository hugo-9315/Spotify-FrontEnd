"use client";

import useGetSongById from "@/app/hooks/useGetSongById";
import usePlayer from "@/app/hooks/usePlayer";

const Player = () => {
    const player = usePlayer();
    const {track} = useGetSongById(player.activeId)

    const trackURl = useLoadTrackUrl(track);

    return ( 
        <div>
            Player
        </div>
     );
}
 
export default Player;