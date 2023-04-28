import { useDispatch , useSelector } from "react-redux";
import {  SongCard, Loader } from "../components";
import { genres } from "../assets/constants";
import { shazamCoreApi } from "../redux/services/shazamCore";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

// CAKE = {
//     CHOCO : MUSIC PLAYER FUNCTIONALITY 
//     VANILLA : SHAZAM CORE FUNCTIONALITY 
// }

const Discover = () => {
    const  dispatch = useDispatch();
    const  { activeSong  , isPlaying} = useSelector((state)=> state.player)
    console.log(genres);
    const  {data , isFetching , error  } = useGetTopChartsQuery();
    console.log(data);
    if(isFetching) return <Loader  title="Loading Songs....."  />
    if(error) return <Error />

    return (
        <div className="flex flex-col"  >
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10"  >
                <h2 className="font-bold text-3x1 Itext-white text-left">Discover </h2>
                <select
                    onChange={() => { }}
                    value=""
                    className="bg-black text-gray-300 p-3 text-sm rounded-1g outline-none sm:mt-0 mt-5" >
                    {genres.map((genre) => <option key={genre.key}  value={genre.value} >{genre.title}</option>)}
                </select>
            </div>

            <div className="flex flex-wrap sm:justify:start justify-center gap-8" >
                {
                    data.tracks.map((song,i)=>{
                         console.log("data tracks");
                         console.log(data.tracks);
                         console.log("inside data");
                         console.log(song);
                         return  <SongCard 
                         key={song.key}  
                         activeSong={activeSong}  
                         isPlaying={isPlaying} 
                         value={song.key} 
                         i={i} 
                         song={song} 
                         data={data}
                         />
                    })
                }

            </div>

        </div >

    )

}






export default Discover;
