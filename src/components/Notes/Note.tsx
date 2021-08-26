import { FC,FocusEvent } from "react"; //it for defining type
import INote from "../../interfaces/notes.interface";
import "./Note.css";
type Props = {
  note: INote;
};
const noteTextUpdated = (event: FocusEvent<HTMLDivElement>) => {
  console.log(event.currentTarget.textContent)
};
const Note: FC<Props> = ({ note }) => {
  return (
    <div className="note">
      <div
        contentEditable
        suppressContentEditableWarning={true}
        className="note__text"
        onBlur={noteTextUpdated}
      >
        {note.text} 
      </div>
      <div className="note__link">
        {/* <a href={note.link}>Link</a> */}
        <a href={note.link}>Link</a>
      </div>
    </div>
  );
};
export default Note;
