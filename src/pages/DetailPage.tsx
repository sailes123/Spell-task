import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSpellDetail } from "../services/spell";
import { useSpell } from "../context/useSpell";

const DetailPage = () => {
  const { spellDetail, setSpellDetail } = useSpell();
  const { index } = useParams();
  console.log('spellDetail', spellDetail);
  useEffect(() => {
    fetchSpellDetail(index as string, setSpellDetail);
  }, [index]); 

  return (
    <div className="w-full flex flex-col items-center p-10 ">
      <div className="flex justify-center">

      
      <h1 className="mt-0 text-center bg-orange-500 font-bold text-white shadow-md py-3 px-4 rounded-lg mb-1">{spellDetail?.name??''}</h1>
      </div>
      <p className="mt-0 font-bold text-yellow-600 text-[20px] text-center mb-5">Level {spellDetail?.level??''}</p>

      <div className="w-full max-w-[900px]">
           <div>
            <p className="mt-0 font-bold text-black text-[20px] text-left mb-5">Attack Type: <span className="text-yellow-600">{spellDetail?.attack_type??'Not Mentioned'}</span></p>
           </div>
           <div>
            <p className="mt-0 font-bold text-black text-[20px] text-left mb-5">Duration: <span className="text-yellow-600">{spellDetail?.duration??'Not Mentioned'}</span></p>
           </div>
           <div>
            <p className="mt-0 font-bold text-black text-[20px] text-left mb-5">Range: <span className="text-yellow-600">{spellDetail?.range??'Not Mentioned'}</span></p>
           </div>
           <div>
            <p className="mt-0 font-bold text-black text-[20px] text-left mb-5">Material: <span className="text-yellow-600">{spellDetail?.material??'Not Mentioned'}</span></p>
           </div>
           <div>
            <p className="mt-0 font-bold text-black text-[20px] text-center mb-5">Description</p>
            {
              spellDetail?.desc?.length > 0 && spellDetail?.desc.map((description:string)=> {
                return <p className="mt-0 font-bold text-yellow-600 text-[20px] text-justify mb-1">{description}</p>
              })
            }
           </div>
      </div>
    </div>
  );
};

export default DetailPage;
