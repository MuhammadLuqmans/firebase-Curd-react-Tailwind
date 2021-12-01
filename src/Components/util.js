import { addDoc, deleteDoc } from "@firebase/firestore";
import db from "../firebase";
import { collection, doc, setDoc } from "@firebase/firestore";

export const AddNewColor = async () => {
  // docRet get 3 paramenters one is db , and collection name lastone is id
  // Code updat by id
  // const docRef = doc(db,"color" ,"#000color");
  // const payload = { name:"Black" , value : "#000"}
  // await setDoc(docRef , payload);

  // add as you want
  // const name = prompt("Please enter the name of Color", "" )
  // const value = prompt("Enter the value of color in Hex code" ,"")

  do {
    var Name = prompt("Please write your color Name");
    var Value = prompt("Please enter your color Value");
  } while ((Name === null || Name === "", Value === null || Value === ""));

  const collectionRef = collection(db, "Colors");
  const payload = { name: Name, value: Value };
  const docRef = await addDoc(collectionRef, payload);
  console.log("Your id is: " + docRef.id);
};

// function to updata data to firebase
export const EditeHendel = async (id) => {
  do {
    var Name = prompt("Please write your color Name");
    var Value = prompt("Please enter your color Value");
  } while ((Name === null || Name === "", Value === null || Value === ""));
  const docRef = doc(db, "Colors", id);
  const payload = { name: Name, value: Value };
  await setDoc(docRef, payload);
  console.log(id);
};
// function to delete data for firebase
export const HandelDelete = async (id) =>{
    const docRef = doc(db , "Colors" ,id)
    await deleteDoc(docRef)
}
