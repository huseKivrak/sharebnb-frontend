//import formik components like in ListingForm:
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
function RegisterForm() {


  const handleSubmit = async (values) => {
    const response = axios.post("http://localhost:3001/auth/register", values);

    const data = await response.json();
    console.log("data:", data);
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <Formik
        initialValues={{
          username: "",
          password: "",
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // handle the submit
            handleSubmit(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <div className="form-group row align-items-center">
              <label htmlFor="username" className="col-sm-2 col-form-label">
                Username
              </label>
              <div className="col-sm-10">
                <Field
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="form-control"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-danger"
                />
              </div>
            </div>
            <div className="form-group row align-items-center">
              <label htmlFor="password" className="col-sm-2 col-form-label">
                Password
              </label>
              <div className="col-sm-10">
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-danger"
                />
              </div>
            </div>
            <div className="form-group row align-items-center">
              <label htmlFor="firstName" className="col-sm-2 col-form-label">
                First Name
              </label>
              <div className="col-sm-10">
                <Field
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="form-control"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-danger"
                />
              </div>
            </div>
            <div className="form-group row align-items-center">
              <label htmlFor="lastName" className="col-sm-2 col-form-label">
                Last Name
              </label>
              <div className="col-sm-10">
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="form-control"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-danger"
                />
              </div>
            </div>
            <div className="form-group row align-items-center">
              <label htmlFor="email" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterForm;
