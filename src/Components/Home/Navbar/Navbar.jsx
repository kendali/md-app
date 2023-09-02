



function NavBar() {
    return (
        <header className="container">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img src="https://ucarecdn.com/91f61d7a-89f0-418d-ac52-28e1f8f868af/whitelogo.svg" alt="Logo Moroccan Developer" width={90} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <img src="https://ucarecdn.com/85228ab3-c97b-420c-876d-faa85761f863/menu.svg" alt />
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                        <div className="cta">
                            <a href className="cta btn-main bounce-top ">Contact Me</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default NavBar
