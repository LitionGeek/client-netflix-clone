import "./footer.scss"
import LanguageIcon from '@mui/icons-material/Language';

export const Footer = () => {
  return (
    <div className="footer">
        <h1>Atencion al cliente 0800-111-1234</h1>
        <div className="links-reference">
            <a href="">Preguntas frecuentes</a>
            <a href="">Privacidad</a>
            <a href="">Centro de ayuda</a>
            <a href="">Avisos legales</a>
            <a href="">Cuenta</a>
            <a href="">Términos de uso</a>
            <a href="">Prueba de velocidad</a>
            <a href="">Contáctanos</a>
        </div>
        <div className="lang-selection">
            <div className="lang-title">
              {/*   <LanguageIcon/> */}
                <span>Select you language</span>
            </div>
            <select className="select-language">
                <option value="es">Español</option>
                <option value="en">English</option>
            </select>
        </div>
    </div>
  )
}
