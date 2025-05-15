import logo from "../../assets/imges/nav/logo.png";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg  p-4 ">
      <div className="container">
        <div>
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-3 mb-lg-0">
            <li className="nav-item">
              <button className="btn my-1 my-md-0 mt-3 mt-md-0">
                Become a renter
              </button>
            </li>
            <li className="nav-item">
              <button className="btn">Rental deal</button>
            </li>
            <li className="nav-item">
              <button className="btn my-1 my-md-0">How it works</button>
            </li>
            <li className="nav-item">
              <button className="btn">Why choose us</button>
            </li>
          </ul>
          <div>
            <button className="btn " type="submit">
              Sign in
            </button>

            <button className="btn btn-primary" type="submit">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
