
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import s from './ContactList.module.css';
const Contact = ({id, name,number, handleDeleteCard}) => {
  return(
<li className={s.itemcont}>
<span><FaUser />    {name}</span>
<span><FaPhoneAlt />    {number}</span>
<button className={s.btn} onClick={()=>handleDeleteCard(id)} size="18px">Delete</button>

</li>
  )
};

export default Contact;
