
import Contact from "./Contact";
import s from './ContactList.module.css';

const ContactList = ({ items, handleDeleteCard}) => {

  return(
  <>

<ul className={s.list}>
  {items.map(item=>(
   <Contact handleDeleteCard={handleDeleteCard} key={item.id} {...item}></Contact>
  ))}
</ul>

  </>

  ) 
};

export default ContactList;
