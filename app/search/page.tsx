"use client";
import { useEffect } from 'react';
import Header from "../components/header";
import SearchInput from "../components/searchInput";
import SearchContent from "./components/searchContent";
import useGetSongById from '../hooks/useGetSongById';
import { Howl } from 'howler';
import mm from 'music-metadata-browser';
import * as AWS from 'aws-sdk';



interface SearchProps {
    searchParams: {
        title: string;
    }
}

const Search: React.FC<SearchProps> = ({ searchParams }) => {
      
      // Création d'une instance S3
      const s3 = new AWS.S3();
      
      // Paramètres du fichier à récupérer
      const bucketName = 'tracksbucket';
      const key = 'https://tracksbucket.s3.eu-west-3.amazonaws.com/1.%20Elvis%20Presley%20-%20Blue%20Suede%20Shoes.m4aIER.m4a';
      
      // Paramètres pour récupérer les métadonnées
      const params = {
        Bucket: bucketName,
        Key: key,
      };
      
      // Appel de la fonction getObject pour récupérer les métadonnées
      s3.getObject(params, (err, data) => {
        if (err) {
          console.error('Erreur lors de la récupération du fichier :', err);
        } else {
          // Les métadonnées du fichier se trouvent dans data.Metadata
          console.log('Métadonnées du fichier :', data.Metadata);
        }
      });

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
                    <SearchInput />
                </div>
            </Header>
            {/* <SearchContent tracks={tracks} /> */}
        </div>
    );
};

export default Search;
