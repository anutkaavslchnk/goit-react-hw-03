import { useId} from "react";
import s from './SearchBox.module.css'

const SearchBox = ({valueFind, handleInputChange}) => {
  const idishki=useId();

  return (
    <div className={s.form}>
    <label htmlFor={idishki}>Find contacts by name</label>
    <input value={valueFind.text}  onChange={handleInputChange} className={s.input}name="text" id={idishki}></input>
    </div>
  )
};

export default SearchBox;
