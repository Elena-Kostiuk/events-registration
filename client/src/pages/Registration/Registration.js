import React from 'react';
import { Formik, Form, Field } from 'formik';
import styles from './Registration.module.css';

export default function Registration () {
  const initialValues = {
    name: '',
    email: '',
    birthday: '',
    source: '',
  };

  const handleSubmit = (values, formikBag) => {};
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {formikProps => {
        return (
          <Form className={styles.form}>
            <label>Full name</label>
            <Field type='text' name='name' className={styles.input}></Field>
            <label>Email</label>
            <Field type='text' name='email' className={styles.input}></Field>
            <label>Date of birth</label>
            <Field type='date' name='birthday' className={styles.input}></Field>
            <p>Where did you hear about this event?</p>
            <div className={styles['radio-box']}>
              <label>
                <Field type='radio' name='source' value='Social media'></Field>
                Social media
              </label>
              <label>
                <Field type='radio' name='source' value='Friends'></Field>
                Friends
              </label>
              <label>
                <Field type='radio' name='source' value='Found myself'></Field>
                Found myself
              </label>
            </div>
            <button type='submit'>Save</button>
          </Form>
        );
      }}
    </Formik>
  );
}
