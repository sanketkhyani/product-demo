import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LogIn = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "please enter email";
      }
      if (!values.password) {
        errors.password = "please enter password";
      }
      return errors;
    },
    onSubmit: (values) => {
      try {
        axios
          .post(`${process.env.REACT_APP_ENDPOINT}/auth/login`, {
            username: values.email,
            password: values.password,
          })
          .then((res) => {
            if (res?.status == 200 && res?.data?.token) {
              localStorage.setItem("token", res?.data?.token);
              localStorage.setItem("userData", JSON.stringify(res?.data));
              navigate("/products");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Enter Email"
            className={formik.errors.email ? "is_error" : ""}
          />
          {formik.errors.email && (
            <p className="error">{formik.errors.email}</p>
          )}
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="*******"
            value={formik.values.password}
            onChange={formik.handleChange}
            className={formik.errors.password ? "is_error" : ""}
          />
          {formik.errors.password && (
            <p className="error">{formik.errors.password}</p>
          )}
        </div>
        <div>
          <button>Log In</button>
        </div>
       
      </form>
    </>
  );
};

export default LogIn;
