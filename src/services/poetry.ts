import { Poem } from "../types/poems";

export const getPoems = async (loadingState:setLoading): Promise<Poem[]> => {

  try {
    const rawData = await fetch ("https://poetrydb.org/poemcount/20")
    console.log("rawData ", rawData)
    const data = await rawData.json()
    console.log("data ", data)
    
    loadingState(false)
    return data as Poem[];

  } catch (error) {
    console.error(error)
  }

  
  return [
    {
      title: "Epitaph. Intended for Sir Isaac Newton, in Westminster Abbey.",
      author: "Alexander Pope",
      lines: [
        "    ISAACUS NEWTONUS:",
        "    QUEM IMMORTALEM",
        "TESTANTUR TEMPUS, NATURA, COELUM:",
        "      MORTALEM",
        "    HOC MARMOR FATETUR.",
        "",
        "Nature and Nature's laws lay hid in night",
        "God said, Let Newton be! and all was light.",
      ],
      linecount: "7",
    },
  ];
};  
