import { Alert } from "reactstrap";
import { useState } from "react";
import { useNavigate } from "react-router";

/** LoginForm
 *
 * Props:
 * - None
 *
 * States:
 * - formErrors:  "" | "invalid"
 *
 * RoutesList -> LoginForm
 *
 */
function LoginForm({ handleLogin }) {
  const [formErrors, setFormErrors] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(evt) {
    evt.preventDefault();
    let username = evt.target.username.value;
    let password = evt.target.password.value;
    try {
      await handleLogin(username, password);
      navigate("/listings");
    } catch (err) {
      setFormErrors("Invalid username/password!");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          placeholder="Username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      {formErrors && (
        <Alert color="danger">
          <p>{formErrors}</p>
        </Alert>
      )}
    </form>
  );
}
export default LoginForm;