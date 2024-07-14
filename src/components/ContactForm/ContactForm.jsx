import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from './ContactForm.module.css';

const FeedbackSchema = Yup.object({
  username: Yup.string().required("Required").min(3, "Too short!").max(50, 'Too long!'),
  number: Yup.string().required("Required").min(3, "Too short!").max(50, 'Too long!')
});

const initialValues = {
  username: "",
  number: ""
};

const ContactForm = ({ handleAddCard }) => {

  const handleChangeFormik = (values, actions) => {
    handleAddCard(values.username, values.number);
    actions.resetForm();
  }

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={FeedbackSchema} onSubmit={handleChangeFormik}>
        <Form className={s.form}>
          <label className={s.label}>
            Name
            <Field name="username" />
            <ErrorMessage name="username" component="span" />
          </label>
          <label className={s.label}>
            Number
            <Field name="number" />
            <ErrorMessage name="number" component="span" />
          </label>
          <button className={s.btnform} type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
