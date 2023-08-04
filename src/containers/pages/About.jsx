import Header from "components/about/Header"
import Team from "components/about/Team"
import Footer from "components/navigation/Footer"
import NavBar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { Helmet } from 'react-helmet-async'

function About(){
    return(
        <Layout>
            <Helmet>
                <title>HerbaCare | Sobre Nosotros</title>
                <meta name="description" content="Plantas Medicinales, Recetas Medicinales todo aqui en nuestra pagina HerbaCare"/>
                <meta name="keywords" content="plantas medicinales, hierbas medicinales, remedios caseros" />
                <meta name="author" content="HerbaCare" />
            </Helmet>
            <NavBar/>
            <div className="pt-28">
                <Header/>
                <Team/>
                <div className="bg-white">
      <div className="mx-12 max-w-full py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Conoce la magia que poseen las plantas medicinales</span>
          <span className="block text-indigo-600">Dejar que la naturaleza cure cualquier dolencia</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="https://herbacare.onrender.com/remedios"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-5 py-3 text-base font-medium text-white hover:bg-green-700"
            >
              Ver Remedios
            </a>
          </div>
        </div>
      </div>
    </div>
            </div>
                <Footer/>
        </Layout>
    )
}
export default About