import { useContext } from "react";
import { SpellContext } from "./Spell";

export const useSpell = () => {
  const { spellList, setSpellList, spellDetail, setSpellDetail } =
    useContext(SpellContext);

  return { spellList, setSpellList, spellDetail, setSpellDetail };
};
