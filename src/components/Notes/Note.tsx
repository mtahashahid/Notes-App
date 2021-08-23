import { FC } from "react"; //it for defining type
import INote from "../../interfaces/notes.interface";
import "./Note.css";
type Props = {
  note: INote;
};
const Note: FC<Props> = ({ note }) => {
  return (
    <div className="note">
      <div contentEditable className="note__text">{note.text}</div>
      <div className="note__link">
        <a href={note.link}>Link</a>
      </div>
    </div>
  );
};
export default Note;
