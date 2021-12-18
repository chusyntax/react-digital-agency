import styles from "../CSS Files/About.module.css";
import aboutImage from "../Images/about-image.jpg";
import aboutImage2 from "../Images/about-image-2.jpg";

function About(){

return(

<section id="about">

<div className={styles.about}>

<div className={styles.aboutText}>
<h1>About Us</h1>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eius, voluptatum doloribus veritatis nam omnis tenetur id nesciunt perspiciatis quidem!</p>
<br></br>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae nam adipisci earum, exercitationem vitae possimus? Corrupti tenetur itaque dolorem mollitia possimus illum, molestiae reiciendis, quam, veniam delectus provident eos suscipit?</p>
<br></br>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique praesentium natus suscipit officia? Hic explicabo adipisci vitae a dolorum ipsam!</p>

<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A expedita voluptatibus dolorem? Sequi ad eum voluptatibus?</p>
</div>

<div className={styles.aboutImage}>
<div className={styles.solidBlock}></div>
<img src={aboutImage} alt="Floating Objects" />
</div>

</div>



<div className={styles.about}>



<div className={styles.aboutImage}>
<div className={styles.solidBlock}></div>
<img src={aboutImage2} alt="People in an office space" />
</div>

<div className={styles.aboutText}>
<h1>World Class Work</h1>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eius, voluptatum doloribus veritatis nam omnis tenetur id nesciunt perspiciatis quidem!</p>
<br></br>

<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique praesentium natus suscipit officia?</p>

<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ad eum voluptatibus?</p>

<button>View Our Work.</button>
</div>

</div>


</section>

)

}

export default About