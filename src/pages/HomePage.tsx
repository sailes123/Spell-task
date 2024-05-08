import { useEffect } from "react";
import { fetchSpell } from "../services/spell";
import { useSpell } from "../context/useSpell";
import SpellBox from "../components/SpellBox";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { spellList, setSpellList } = useSpell();
  const navigate = useNavigate();


  useEffect(() => {
    fetchSpell(setSpellList);
  }, []);

  return (
    <div className="w-full p-10 ">
      <div className="w-full relative">
      <h1 className="mt-0 text-center mb-10">Spells</h1>
      <button onClick={()=> navigate('/favourite')} className="bg-green-500 absolute top-0 right-0 text-white">
        Favourite Spells
      </button>
      </div>

      <div className="flex gap-10 justify-center flex-wrap">
        {spellList?.length > 0 &&
          spellList.map((item: any) => {
            return (
              <SpellBox item={item} />
            );
          })}
      </div>
    </div>
  );
};

export default HomePage;
