import { useNavigate } from "react-router-dom";
import { BookMark, PurpleBookMark } from "../assets";
import { useEffect, useState } from "react";

type Props = {
  item: {
    index: string;
    name: string;
    level: number;
  };
};

const SpellBox = ({ item }: Props) => {
  const navigate = useNavigate();
  const [isFavourite, setIsFavourite] = useState(false);

  const favoriteList = localStorage.getItem("favourite") || "[]";

  useEffect(() => {
    const itemPresent = JSON.parse(favoriteList).find(
      (ele: any) => item.index == ele.index
    );
    if(itemPresent){
      setIsFavourite(true)
    }
  }, [favoriteList]);

  const addToFavourite = () => {
    // Get existing favorite spells from localStorage
    const list = localStorage.getItem("favourite") || "[]";
    const existingSpells = JSON.parse(list);
    

    //Push the new data in the array
    existingSpells.push(item);
    //Again, store the updated data in localStorage
    localStorage.setItem("favourite", JSON.stringify(existingSpells));
    setIsFavourite(true)
  };

  const removeFromFavorite = () => {
    // Get existing favorite spells from localStorage
    const favoriteList = localStorage.getItem("favourite");

    // If favoriteList exists, parse it as JSON
    if (favoriteList) {
        const existingSpells = JSON.parse(favoriteList);

        // Find index of the item to remove
        const index = existingSpells.findIndex((favItem:any) => favItem.index === item.index);

        if (index !== -1) {
            // If the item is found in the list, remove it
            existingSpells.splice(index, 1);

            // Store the updated list of favorite spells in localStorage
            localStorage.setItem("favourite", JSON.stringify(existingSpells));
            setIsFavourite(false)
            // Optionally, you can return the updated list of favorite spells
            return existingSpells;
        }
        
    }
};

  return (
    <div
      className=" sm:w-[350px] w-full h-[200px]  shadow-xl items-center justify-between flex flex-col p-4 bg-[#eeebeb] rounded-lg"
      key={item?.index}
    >
      <div className="w-full flex justify-between">
        <div>
          <h2 className="text-black text-left mb-1 text-[23px] font-medium ">
            {item?.name ?? ""}
          </h2>
          <p className="text-[16px] font-medium text-black">
            Level <span>{item?.level ?? ""}</span>
          </p>
        </div>
        { isFavourite ? <div onClick={removeFromFavorite} className="mt-3 hover:cursor-pointer">
          <PurpleBookMark/>
        </div>
        :<div onClick={addToFavourite} className="mt-3 hover:cursor-pointer">
          <BookMark/>
        </div>}
      </div>
      <button
        onClick={() => navigate(`/${item?.index}`)}
        className="px-4 py-3 hover:cursor-pointer text-[12px] bg-blue-500 text-white"
      >
        View Details
      </button>
    </div>
  );
};

export default SpellBox;
