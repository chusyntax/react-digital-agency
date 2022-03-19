import styles from "../CSS Files/Contact.module.css";


function Contact() {

    return (
        <section>
          <h1 style={{

fontWeight: '900',
fontSize:'4rem',
textAlign: 'center',
marginTop:'0.5rem'

          }}>Contact Me</h1>
        <div id="contact" className={styles.container}>
          
          <span className={styles.bigCircle}></span>
          <img src="img/shape.png" className={styles.square} alt="" />
          <div className={styles.form}>
            <div className={styles.contactInfo}>
              <h3 className={styles.title}>Let's get in touch</h3>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ipsam placeat modi illo. Necessitatibus, atque minus. In fugiat eius incidunt voluptates provident commodi.
              </p>
    
              <div className={styles.info}>

                <div className={styles.information}>
                  <p>Email: digitalagency@gmail.com</p>
                </div>
               
                <div className={styles.information}>
                  <p>Phone:+1 432 7896 345</p>
                </div>
              </div>
    
              <div className={styles.socialMedia}>
                <p className={styles.information}>Follow Us On Social Media:</p>
                <div className={styles.socialIcons}>
                  <a href="https://github.com">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://linkedin.com">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://www.instagram.com">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
    
            <div className={styles.contactForm}>
              <span className={`${styles.circle} ${styles.one}`}></span>
              <span className={`${styles.circle} ${styles.two}`}></span>
    
              <form   autocomplete="on">
                <h3 className={styles.title}>Message Us</h3>
                <div className={styles.inputContainer}>
                  <input type="text" name="name" className={`${styles.input} required  ${styles.focus}`} placeholder="Name" />
                  
                </div>
                <div className={styles.inputContainer}>
                  <input type="email" name="email" className={styles.input}  placeholder="E-mail"/>

                </div>
                <div className={styles.inputContainer}>
                  <input type="tel" name="phone" className={styles.input} placeholder="Phone (optional)"/>

                </div>
                <div className={`${styles.inputContainer} ${styles.textarea}`}>
                  <textarea id="message" name="message" placeholder="Message" className={styles.input}></textarea>

                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact