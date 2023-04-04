import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={{ backgroundColor: '#fff' }}>
        <div className="container-fluid me-3">
          <Link className="navbar-brand fw-bold" to="/">SonicNews</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ display: "flex", alignItems: "center"}}>
              <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
              {/* <li className="nav-item"><Link className="nav-link active" to="/about">About</Link></li> */}
              <li>
                <div className="dropdown">
                  <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ border: "none"}}>
                    Categories
                  </button>
                  <ul className="dropdown-menu" style={{ padding: "5px", border: "1px solid #fff", borderRadius: "0px", backgroundColor: "rgba(255,255,255,0.7)"}}>
                    <li><Link className="nav-link active" to="/business">Business</Link></li>
                    <li><Link className="nav-link active" to="/entertainment">Entertainment</Link></li>
                    <li><Link className="nav-link active" to="/general">General</Link></li>
                    <li><Link className="nav-link active" to="/health">Health</Link></li>
                    <li><Link className="nav-link active" to="/science">Science</Link></li>
                    <li><Link className="nav-link active" to="/sports">Sports</Link></li>
                    <li><Link className="nav-link active" to="/technology">Technology</Link></li>
                  </ul>
                </div>
              </li>
            </ul>
            <form className="d-flex w-75" role="search">
              <input className="form-control me-2 text-center w-50" style={{ borderRadius: "0px", border: "1px solid #666", backgroundColor: '#f5f5f5' }} type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-dark me-3" style={{ borderRadius: "0px", }} type="submit">&#128269;</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}