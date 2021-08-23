import "./App.css";
// import axios from "axios";
import { useState,useEffect } from "react";
import DUMMY_NOTES from "./DUMMY_NOTES";
import Note from "./components/Notes/Note";
function App() {
  const [notesList,setNotesList] = useState<Array<any>>([]);
  // async function getNotes() {
  //   try {
  //     const response = await axios.get("http://localhost:5000/notes");
  //     setNotesList(response.data.notes)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  
  useEffect(() => {
    setNotesList(DUMMY_NOTES);
  }, [notesList]);

  return (
    <div className="App">     
     <div className="notes-list">
       {notesList.map((notesItem,index)=>{
         return (
           <div key={index} className="notes-item">
            
            <Note note={notesItem} key={index}/>

             {/* <h4 >{notesItem.text}</h4>
             <h5>{notesItem.link}</h5> */}
           </div>
         )
       })}
     </div>

      {/* <div>
        <h4>{notesList[0]?.text}</h4>
        <h5>{notesList[0]?.link}</h5>
      </div> */}
    </div>
  );
}

export default App;
