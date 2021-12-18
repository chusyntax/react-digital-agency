import styles from "../CSS Files/Navbar.module.css";


function Navbar(){

 
return(



<nav>
         <div className={styles.logo}>
            Kreative Korner.
         </div>
         <input type="checkbox" id="click" className={styles.click}/>
         <label for="click" className={styles.menu_btn}>
         <i className="fas fa-bars"></i>
         </label>
         <ul>
            <li><a className={styles.name} href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#w">Services</a></li>
            <li><a href="#w">Gallery</a></li>
            <li><a href="#w">Feedback</a></li>
         </ul>
      </nav>

     

   


);

}

export default Navbar