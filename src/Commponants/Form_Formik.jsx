import React from "react";
import { Form, Formik, Field } from "formik";

 const Form_Formik = () => {
  const Form_List = {
    firstname: "",
    lastName: "",
    fatherName: "",
    className: "",
    address: "",
    email: "",
    gender: "",
  };

  return (
    <div>
      <Formik
        initialValues={Form_List}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <div className="Feld">
            <label style={{fontSize:25, color:"blue",padding:10}}>First Name</label>
            <Field name="firstname" type="text"  />
          </div>

          <div className="Feld">
            <label style={{fontSize:25, color:"blue",padding:10}}>Last Name</label>
            <Field name="lastName" type="text" />
          </div>

          <div className="Feld">
            <label style={{fontSize:25, color:"blue",padding:10}}>Father's Name</label>
            <Field name="fatherName" type="text"  />
          </div>

          <div className="Feld">
            <label style={{fontSize:25, color:"blue",padding:10}}>Class Name</label>
            <Field name="className" type="text" />
          </div>

          <div className="Feld">
            <label style={{fontSize:25, color:"blue",padding:10}}>Address</label>
            <Field name="address" type="text" />
          </div>

          <div className="Feld">
            <label style={{fontSize:25, color:"blue",padding:10}}>Email</label>
            <Field name="email" type="email" />
          </div>

          <div className="Feld">
            <label style={{fontSize:25, color:"blue",padding:10}}>Gender</label>
            <Field name="gender" as="select">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Field>
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Form_Formik
