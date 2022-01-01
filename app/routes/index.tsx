import axios from "axios";
import { useLoaderData } from "remix";
import Characters from "~/Components/Characters";
import Navbar from "~/Components/Navbar"
import Search from "~/Components/Search";
import { Result } from "~/types";

const ApiUrl = "https://rickandmortyapi.com/api/character"

export async function getData(name: string | any) {
  const { data } = await axios.get(`${ApiUrl}`)
  const character: Result[] = data.results;
  return character.filter((newCharacter) => name ? newCharacter.name.toLowerCase().includes(name.toLowerCase()) : true
  )
}

export async function loader({ request }: any) {
  const url = new URL(request.url)
  const name = url.searchParams.get('name');
  return getData(name);
}

export default function Index() {
  const item = useLoaderData<Result[]>();
  return (
    <div className="h-[10rem]">
      <div className="px-2 md:px-20 lg:px-30 mt-12">
        <Navbar />
        <Search />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 p-10 ">
          {item.length <= 0 && <div className="p-5"><span className="text-white text-2xl font-mono ">Character Not Found</span></div> ||
            item.map((character =>
              <Characters character={character} key={character.id}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}
