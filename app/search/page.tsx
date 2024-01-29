"use client";
import { useEffect, useState } from 'react';
import Header from "../components/header";
import SearchInput from "../components/searchInput";
import SearchContent from "./components/searchContent";
import useGetSongById from '../hooks/useGetSongById';
import * as AWS from 'aws-sdk';
import { Track } from '../services/tracks';



interface SearchProps {
    tracks: Track[];
    searchParams: {
        title: string;
    }
}

const Search: React.FC<SearchProps> = ({ searchParams }) => {

    const [tracks, setTracks] = useState<Track[]>([]);

    // const { isLoading, tracks } = useGetSongById(searchParams.title);

    // useEffect(() => {
    //     // Mettez ici le code que vous souhaitez exécuter lorsqu'il y a un changement dans 'tracks' ou 'isLoading'
    // }, [tracks, isLoading]);

    return (
        <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
            <Header className="from-bg-neutral-900">
                <div className="mb-2 flex flex-col gap-y-6">
                    <h1 className="text-white text-3xl font-semibold">
                        Search
                    </h1>
                </div>
            </Header>
            <SearchContent tracks={tracks} />
        </div>
    );
};

export default Search;
