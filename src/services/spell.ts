import axios from "axios";
import { SetStateAction } from "react";

const baseUrl = "https://www.dnd5eapi.co";

export const fetchSpell = async (setSpellList:SetStateAction<any>) => {
  try {
    const res = await axios.get(`${baseUrl}/api/spells`);
    setSpellList(res.data.results)
  } catch (error) {
    console.log("error", error);
  }
};

export const fetchSpellDetail = async (index:string, setDetail:SetStateAction<any> ) => {
  try {
    const res = await axios.get(`${baseUrl}/api/spells/${index}`);
    // setSpellList(res.data.results)
    setDetail(res.data)
  } catch (error) {
    console.log("error", error);
  }
};
