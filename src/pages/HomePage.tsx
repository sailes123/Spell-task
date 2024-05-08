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
    <div className="w-full sm:p-10 p-4">

      <div className="w-full relative flex flex-col items-center">
        <div className="flex justify-center">
          <h1 className="mt-0 text-center bg-purple-500 font-bold text-white shadow-md py-3 px-4 rounded-lg mb-1">
            Spells
          </h1>
        </div>
        <button
          onClick={() => navigate("/favourite")}
          className="bg-green-500 relative sm:absolute top-0 right-0 text-white"
        >
          Favourite Spells
        </button>
      </div>

      <div className="flex gap-10 mt-5 justify-center flex-wrap">
        {spellList?.length > 0 &&
          spellList.map((item: any) => {
            return <SpellBox item={item} />;
          })}
      </div>
    </div>
  );
};

export default HomePage;
