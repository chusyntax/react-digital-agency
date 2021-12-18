import styles from "../CSS Files/Services.module.css";
import image1 from "../Images/service-card-1.png";
import image2 from "../Images/service-card-2.png";
import image3 from "../Images/service-card-3.png";
import image4 from "../Images/service-card-4.png";
import image5 from "../Images/service-card-5.png";
import image6 from "../Images/service-card-6.png";

function Services(){

    return(

        <section id="services">

            <div className={styles.services}>
<h1 >Our Services</h1>

<div className={styles.servicesGrid}>

<div className={styles.servicesCard}>
<img src={image1} alt="Floating Objects" />
    <h2>Web Development</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ad laborum quaerat illum accusamus, exercitationem animi maiores voluptate dolorem magnam.</p>
    <button>More Info</button>
</div>

<div  className={styles.servicesCard}>
<img src={image2} alt="Floating Objects" />
    <h2>Networking</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ad laborum quaerat illum accusamus, exercitationem animi maiores voluptate dolorem magnam.</p>
    <button>More Info</button>
</div>

<div  className={styles.servicesCard}>
<img src={image3} alt="Floating Objects" />
    <h2>Marketing</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ad laborum quaerat illum accusamus, exercitationem animi maiores voluptate dolorem magnam.</p>
    <button>More Info</button>
</div>



</div>






<div className={styles.servicesGrid}>

<div className={styles.servicesCard}>
<img src={image4} alt="Floating Objects" />
    <h2>24hr Staff</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ad laborum quaerat illum accusamus, exercitationem animi maiores voluptate dolorem magnam.</p>
    <button>More Info</button>
</div>

<div  className={styles.servicesCard}>
<img src={image5} alt="Floating Objects" />
    <h2>App Maintainance</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ad laborum quaerat illum accusamus, exercitationem animi maiores voluptate dolorem magnam.</p>
    <button>More Info</button>
</div>

<div  className={styles.servicesCard}>
<img src={image6} alt="Floating Objects" />
    <h2>Growth Hacking</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ad laborum quaerat illum accusamus, exercitationem animi maiores voluptate dolorem magnam.</p>
    <button>More Info</button>
</div>



</div>


            </div>


        </section>

    )

}

export default Services