import SpellBox from "../components/SpellBox";

const FavouritePage = () => {
  const favouriteData = JSON.parse(localStorage.getItem("favourite") || "[]");

  return (
    <div className="w-full p-10 ">
      <h1 className="mt-0 text-center mb-10">Spells</h1>

      <div className="flex gap-10 justify-center flex-wrap">
        {favouriteData?.length > 0 &&
          favouriteData.map((item: any) => {
            return <SpellBox item={item} />;
          })}
      </div>
    </div>
  );
};

export default FavouritePage;
