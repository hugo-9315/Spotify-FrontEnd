"use client";
import SongItem from "@/app/components/SongItem.tsx";
import { Track } from "@/app/services/tracks";

interface PageContentProps {
    tracks: Track[];
}

const PageContent: React.FC<PageContentProps> = ({tracks}) => {
    // console.log('Tracks:', tracks);
    
    if (tracks.length === 0) {
        return (
            <div className="mt-4 text-neutral-400">
                No songs available.
            </div>
        )
    }
    return ( 
        <div className="flex overflow-x-auto mt-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
            {tracks.slice(0,10).map((track) => (
             <SongItem key={track._id} onClick={() => {}} data={track} />
            ))}
        </div>
        </div>
        
     );
}
 
export default PageContent;