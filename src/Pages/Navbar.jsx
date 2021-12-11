import styles from "../CSS Files/Navbar.module.css";


function Navbar(){

 
return(

<body>

<nav>
         <div className={styles.logo}>
            Brand
         </div>
         <input type="checkbox" id="click" className={styles.click}/>
         <label for="click" className={styles.menu_btn}>
         <i className="fas fa-bars"></i>
         </label>
         <ul>
            <li><a className={styles.name} href="#w">Home</a></li>
            <li><a href="#w">About</a></li>
            <li><a href="#w">Services</a></li>
            <li><a href="#w">Gallery</a></li>
            <li><a href="#w">Feedback</a></li>
         </ul>
      </nav>

      <div className={styles.content}>
         <div>
            Responsive Navigation Menu Bar Design
         </div>
         <div>
            using only HTML & CSS
         </div>
      </div>

</body>    


);

}

export default Navbar