import { ErrorMessage, Field, Form, Formik } from "formik";

import s from './ContactForm.module.css';
import * as Yup from "yup";
const FeedbackSchema=Yup.object({
name:Yup.string().required("Required").min(3,"Too short!").max(50, 'Too long!'),
number:Yup.string().required("Required").min(3,"Too short!").max(50, 'Too long!'),
})
const initialValues={
  username:"",
  email:""
}
const ContactForm = ({handleAddCard}) => {

const handleChangeFormik=(values,actions)=>{
  handleAddCard(values.name, values.number);
  actions.resetForm();
}



  return (
  <>
  <Formik initialValues={initialValues} validationSchema={FeedbackSchema} onSubmit={handleChangeFormik}>
    <Form className={s.form}>
<label className={s.label}>
  Name
  <Field name="name"></Field>
  <ErrorMessage name="name" component="span"></ErrorMessage>
</label>
<label className={s.label}>
  Number
  <Field  name="number"></Field>
  <ErrorMessage name="number" component="span"></ErrorMessage>
</label>
<button className={s.btnform} type="submit" onSubmit={handleAddCard}>Add contact</button>
</Form>
  </Formik>
  </>
  )
};

export default ContactForm;
