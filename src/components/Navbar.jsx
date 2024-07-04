// global context
import { useGlobalContext } from "../hooks/useGlobalContext";

import { Link } from "react-router-dom";

// firbase
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";
function Navbar() {
  const { user } = useGlobalContext();

  const signOutProfile = async () => {
    await signOut(auth);
    toast.success("See you Soon");
  };

  return (
    <>
      <header className="bg-base-200">
        <nav className="navbar align-elemnts">
          <div className="navbar-start">
            <h3 className="btn btn-primary text-2xl">Empty for (LOGO)</h3>
            <details className="dropdown">
              <summary className="btn m-1 text-2xl">Pages</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/login">
                    <del>Login</del>
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    <del>Register</del>
                  </Link>
                </li>
              </ul>
            </details>
          </div>
          <div className="navbar-center"></div>
          <div className="navbar-end">
            <div className="flex items-center gap-4">
              <div>
                <p className="font-semibold ">{user.displayName}</p>
              </div>
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                  <img src={user.photoURL} />
                </div>
              </div>
              <div>
                <button
                  onClick={signOutProfile}
                  className="btn btn-accent bg-cyan-500"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
