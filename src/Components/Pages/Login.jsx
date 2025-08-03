import { Link } from "react-router-dom";

const Login = () => {
  return (
        < div className="card bg-base-100 w-full max-w-sm mx-auto mt-20 shrink-0 shadow-2xl">
            <h1 className="text-5xl text-center font-bold">Login now!</h1>
          <form  className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6 mx-auto">
              <button className="btn btn-primary">Submit</button>
            </div>
            <p>Do you have no account?<Link className="text-blue-400" to='/register'>Log In</Link></p>
          </form>
        </div>
  );
};

export default Login;
