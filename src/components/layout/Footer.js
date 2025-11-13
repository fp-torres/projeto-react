import {FaFacebook, FaLinkedin, FaInstagram,} from 'react-icons/fa';

import styles from './Footer.module.css'; 

function Footer() {
  return (
    <footer>
      <ul className={styles.social_list}> 
      <li><FaFacebook /></li>
      <li><FaInstagram /></li>
      <li><FaLinkedin /></li>
      </ul>
     
      <p>© 2024 My Company. All rights reserved.</p>
    </footer>
  );
}
export default Footer;