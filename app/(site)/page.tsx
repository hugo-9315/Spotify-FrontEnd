import Header from "../components/header";
import ListItem from "../components/listItem";
import getTracks, { Track } from "../services/tracks"; // Importez le type Track
import PageContent from "./pageContent";

export const revalidate = 0;

export default async function Home() {
  const tracks: Track[] = await getTracks();
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">Good morning</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:gird-cols-4 gap-3 mt-4">
            <ListItem image="/images/liked.png" name="Liked Songs" href="liked" />
            <ListItem image="/images/onrepeat.jpeg" name="OnRepeat" href="onrepeat" />
            <ListItem image="/images/dailymix.webp" name="Daily Mix" href="dailymix" />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-whie text-2xl font-semibold">
            Newest Songs
          </h1>
        </div>
        <PageContent tracks={tracks}/>
        {/* <div>
          {tracks.map((track) => (
            <div key={track._id}>{track.title}</div>
          ))}
        </div> */}
      </div>
    </div>
  );
}