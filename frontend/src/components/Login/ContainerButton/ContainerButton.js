import {Link} from 'react-router-dom'

import styles from './ContainerButton.module.css';
const ContainerButton = ({buttonText, linkText, linkTo, buttonTextLinkTo}) => {
    return(
        <div className={styles.containerButton}>
          <button type="submit">{buttonText}</button>
          <span className={styles.span}>
            <p className={styles.text} > {linkText}</p>
            <li className={styles.buttonRegister} href="#"><Link to={linkTo}>{buttonTextLinkTo}</Link></li>
          </span>
          
        </div>
    )
}
export default ContainerButton;