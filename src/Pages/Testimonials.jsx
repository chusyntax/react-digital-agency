import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "../CSS Files/Testimonials.module.css";

export default class Testimonials extends Component {
  render() {
    return (

      <section className={styles.containerCarousel} id="feedback">


        <h1>Testimonials</h1>

        <h3>Have a look at a few of out happy customers</h3>

        <Carousel

showArrows={true}
infiniteLoop={true}
showThumbs={false}
showStatus={false}
autoPlay={true}
interval={5100}
>



<div>
  <img src="/images/shirley.png" alt="person"/>
  <div className={styles.myCarousel}>
    <h3>Shirley Fultz</h3>
    <h4>Designer</h4>
    <p>
      It's freeing to be able to catch up on customized news and not be
      distracted by a social media element on the same site
    </p>
  </div>
</div>

<div>
  <img src="/images/daniel.png" alt="person"/>
  <div className={styles.myCarousel}>
    <h3>Daniel Keystone</h3>
    <h4>Designer</h4>
    <p>
      The simple and intuitive design makes it easy for me use. I highly
      recommend Fetch to my peers.
    </p>
  </div>
</div>


<div>
  <img src="/images/shirley.png" alt="person"/>
  <div className={styles.myCarousel}>
    <h3>Shirley Fultz</h3>
    <h4>Designer</h4>
    <p>
      It's freeing to be able to catch up on customized news and not be
      distracted by a social media element on the same site
    </p>
  </div>
</div>

<div>
  <img src="/images/theo.png" alt="person"/>
<div className={styles.myCarousel}>
    <h3>Theo Sorel</h3>
    <h4>Designer</h4>
    <p>
      I enjoy catching up with Fetch on my laptop, or on my phone when
      I'm on the go!
    </p>
  </div>
</div>
</Carousel>

      </section>

     
    );
  }
}