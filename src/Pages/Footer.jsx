import React from 'react';
import styles from "../CSS Files/Footer.module.css";

function Footer(){

    return(
        <footer>
        <div className={styles.footer_content}>
            <h3>KREATIVE KORNER</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quas vitae dolores libero, quod, iste esse voluptatem soluta minus natus dolorem commodi.</p>
            <ul className={styles.socials}>
                <li><a href="https://github.com/chusyntax"><i class="fa fa-github"></i></a></li>
                <li><a href="https://linkedin.com/in/thabotheko"><i class="fa fa-linkedin-square"></i></a></li>
                <li><a href="https://www.instagram.com/chusyntax/"><i class="fa fa-instagram"></i></a></li>
            </ul>
        </div>
        <div className={styles.footer_bottom}>
            <p>copyright &copy;2021 KREATIVE KORNER</p>
        </div>
    </footer>
    );
    
    };

export default Footer