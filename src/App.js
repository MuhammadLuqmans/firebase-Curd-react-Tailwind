import "./App.css";
import { useEffect, useState } from "react";
import db from "./firebase";
import { collection, onSnapshot } from "@firebase/firestore";
import { EditeHendel, AddNewColor, HandelDelete } from "./Components/util";
import { Dotes } from "./Components/Dotes";

const initial = {
  name: "...Loading",
  id: "initial",
};

function App() {
  // this code is for getting the data from firebase
  const [colors, setColors] = useState([initial]);
  // const [name, setName] = useState("");
  // const [value, setValue] = useState("");

  useEffect(
    () =>
      onSnapshot(collection(db, "Colors"), async (snapshot) => {
        setColors(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        // console.log(snapshot.docs.map((doc) => doc.data()))
      }),
    []
  );

  // this code for send or (Insert) data in firebase and show on screen

  ////// code of update thing on firebase store

  return (
    <div className="shadow-2xl hover:shadow-lg hover:bg-white  border-2 border-gray-300 p-4 w-3/6 pl-3 m-auto my-2 py-2 bg-gray-200 mt-28 rounded">
      <button
        className="bg-red-500 w-4/6 text-lg font-bold text-white w-full bg-blue-500 hover:bg-blue-700 text-white rounded py-5"
        onClick={AddNewColor}
      >
        Add Color
      </button>

      {colors.map((color, index) => {
        return (
          <div  
            className=" border-2 border-gray-300 w-6/6 flex pl-3 m-auto my-2 py-2 bg-gray-200 rounded"
            key={index}
          >
            <button 
              className=" bg-red-700 px-10  rounded text-white font-smaibold font-Roboto... hover:bg-red-400 text-lg"
              type="button"
              onClick={() => EditeHendel(color.id)}
            >
              Edit
            </button>
            <button
              className="mx-2 bg-red-700 px-10  rounded text-white font-smaibold font-Roboto... hover:bg-red-400 text-lg"
              type="button"
              onClick={() => HandelDelete(color.id)}
            >
              Delete
            </button>
            <Dotes colors={color.value} />
            {color.name}
          </div>
        );
      })}
    </div>
  );
}

export default App;
