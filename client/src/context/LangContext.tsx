import { createContext } from "react";

type LangContextType = {
  lang: string;
  setLang: (lang: string) => void;
};

export const LangContext = createContext<LangContextType>({
  lang: "ru",
  setLang: () => {},
});
