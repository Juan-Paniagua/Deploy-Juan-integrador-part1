import Header from "../Header/Encabezado";
import Footer from "../Footer/Footer";

const layout = ({ children }) => {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}

export default layout