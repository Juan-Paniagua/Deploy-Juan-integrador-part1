import { Link } from "react-router-dom"

const header = () => {
    return (
        <header>
            <nav>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projectos</Link>
                </li>
            </nav>
            <h2>Holis desde el header</h2>
        </header>
    )
}

export default header

/* <a href="/">Home</a> Es una opcion viable pero no-ideal, ya que recarga la pagina*/