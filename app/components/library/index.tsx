"use client";

import {TbPlaylist} from "react-icons/tb"
import {AiOutlinePlus} from "react-icons/ai"
import { Track } from "@/app/services/tracks";

interface LibraryProps {
    tracks: Track[];
}

const Library: React.FC<LibraryProps> = ({tracks}) => {
    // console.log('Tracks:', tracks);
    
    return ( 
        <div className="flex flex-col">
            <div className="flex items-center justify-between px-5 pt-4">
                <div className="inline-flex items-center gap-x-2">
                    <TbPlaylist className="text-neutral-400" size={26} />
                    <p className="text-neutral-400 font-medium text-md">Your Library</p>
                </div>
                <AiOutlinePlus size={20} className="text-neutral-400 cursor-pointer hover:text-white transition"/>
            </div>
            {/* <div className="flex flex-col gap-y-2 mt-4 px-3">
                {tracks.map((item) => (
                <div key={item._id}>{item.title}</div>
            ))}
            </div> */}
        </div>
     );
}
 
export default Library;