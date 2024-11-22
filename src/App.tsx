import "./App.css";

import Intro from "./screens/Intro/Intro";
import Dashboard from "./screens/Dashboard/Dashboard";
import Detail from "./screens/Detail/Detail";
import Form from "./screens/Form/Form";

import { getPoems } from "./services/poetry";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react";
import { useAppDispatch } from "./hooks/store";
import { addPoem } from "./store/slices/poems/slice";

// const poems = [
//   {
//     id: "1",
//     title: "The Road Not Taken",
//     excerpt: "Two roads diverged in a yellow wood",
//   },
//   {
//     id: "2",
//     title: "Ozymandias",
//     excerpt: "I met a traveler from an antique land",
//   },
//   { id: "3", title: "Daffodils", excerpt: "I wandered lonely as a cloud" },
// ];

const examplePoem = {
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
};

function App() {
  const [loading, setLoading] = useState(true)

  const dispatch = useAppDispatch();

  
  const getData = async () => {
    const poems = getPoems(setLoading)
    console.log("here ", poems);

    dispatch(addPoem(await poems));
  }

  useEffect(() => {
    getData();
  }, []);

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={loading ?
          <p>Loading</p>
          :
          <Dashboard onViewPoem={() => { }} />
        } />
        {<Route path="/form" element={loading?
           <p>Loading</p>
           :
           <Form />
        }/>}
        {<Route path="/detail/id:" element={loading?
          <p>Loading</p>
          :
          <Detail poem={examplePoem} onBack={() => {}} />
       } /> }
       {<Route path="/detail/id:" element={loading?
        <p>Loading</p>
        :
        <Intro onNext={() => { }} />
     }/>

        }
      </Routes>
    </Router>
  )
}


export default App;
