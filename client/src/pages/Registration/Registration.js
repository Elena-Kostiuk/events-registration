import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./Registration.module.css";
import { addParticipant } from "../../api";
import { USER_VALIDATION_SHEMA } from "../../utils/validate/validationSchema";

export default function Registration(props) {
  const [registrated, setRegistrated] = useState();

  const initialValues = {
    name: "",
    email: "",
    birthday: "",
    source: "",
  };

  const handleSubmit = (values, formikBag) => {
    addParticipant(values, props.location.state.eventId).then((res) => {
      setRegistrated(res.data.message);
    });
    formikBag.resetForm();
  };

  const btnHandler = () => {
    props.history.replace("/");
  };

  const createForm = () => {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={USER_VALIDATION_SHEMA}
      >
        {(formikProps) => {
          return (
            <Form className={styles.form}>
              <label>Full name</label>
              <Field type="text" name="name" className={styles.input}></Field>
              <ErrorMessage
                name="name"
                component="i"
                className={styles.error}
              />
              <label>Email</label>
              <Field type="text" name="email" className={styles.input}></Field>
              <ErrorMessage
                name="email"
                component="i"
                className={styles.error}
              />
              <label>Date of birth</label>
              <Field
                type="date"
                name="birthday"
                className={styles.input}
              ></Field>
              <ErrorMessage
                name="birthday"
                component="i"
                className={styles.error}
              />
              <p>Where did you hear about this event?</p>
              <div className={styles["radio-box"]}>
                <label>
                  <Field
                    type="radio"
                    name="source"
                    value="Social media"
                  ></Field>
                  Social media
                </label>
                <label>
                  <Field type="radio" name="source" value="Friends"></Field>
                  Friends
                </label>
                <label>
                  <Field
                    type="radio"
                    name="source"
                    value="Found myself"
                  ></Field>
                  Found myself
                </label>
              </div>
              <button className={styles["btn-form"]} type="submit">
                S a v e
              </button>
            </Form>
          );
        }}
      </Formik>
    );
  };

  const createMessage = () => {
    return (
      <div className={styles.form}>
        <p>{registrated}</p>
        <button className={styles["btn-form"]} onClick={btnHandler}>
          return to the list of events
        </button>
      </div>
    );
  };
  return (
    <main>
      <h2>Event registration</h2>
      {registrated ? createMessage() : createForm()}
    </main>
  );
}
