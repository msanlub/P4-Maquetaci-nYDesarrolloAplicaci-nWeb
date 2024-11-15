import logo from '../assets/logoFooter.png';
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <section className='footer'>
        <nav className='navbarfooter'>
            <ul>
                <li><a href="#politicaPrivacidad">Política de Privacidad</a></li>
                <li><a href="#cookies">Cookies</a></li>
                <li><a href="#avisoLegal">Aviso legal</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
        <section className='logoFooter'>
            <img src={logo} alt="LogoFooter" />
        </section>
    </section>
  )
}

export default Footer