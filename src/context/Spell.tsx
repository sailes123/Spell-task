import { ReactNode, createContext, useState } from "react";

type Props = {
  children: ReactNode;
};

export const SpellContext = createContext<any>(null);

export const SpellProvider = ({ children }: Props) => {
  const [spellList, setSpellList] = useState([])
  const [spellDetail, setSpellDetail] = useState<any>()
  return <SpellContext.Provider value={{spellList, setSpellList, spellDetail, setSpellDetail}}>{children}</SpellContext.Provider>;
};
