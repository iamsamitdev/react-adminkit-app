import Footer from '../../shared/backend/Footer'
import Navbar from '../../shared/backend/Navbar'
import Sidebar from '../../shared/backend/Sidebar'

const BackendLayout = ({children}) => {
    return (
        <>
            <div className="wrapper">
                <Sidebar />
                <div className="main">
                    <Navbar />
                    <main className="content">
                        <div className="container-fluid p-0">
                            {children }
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default BackendLayout
