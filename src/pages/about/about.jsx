import "./about.css";
const About = () => {
  return (
    <div className="about-page">
      {/* Parallax Banner */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <h2>ABOUT US</h2>
        </div>
      </section>

      {/* Page Content */}
      <section className="about-content inner-container">
        <h2>Calvary Bible Church</h2>
        <p>
          Calvary Bible Church was founded on June 14, 2009, in Hyderabad,
          India, with a vision to glorify God through the precious death of
          Jesus Christ on the Cross. Calvary Bible Church was founded on June
          14, 2009, in Hyderabad, India, with a vision to glorify God through
          the precious death of Jesus Christ on the Cross. The name "Calvary"
          reflects our commitment to honoring the Cross as the blazing center of
          God's glory. "Bible" emphasizes that Scripture is our sole authority
          for teaching, beliefs, and practices, while "Church" signifies our
          identity as the body of Christ, governed by Him. We hold to Baptistic,
          Reformed, Dispensational (in Ecclesiology and Eschatology), and
          non-charismatic convictions. Our founding pastor, Emmanuel Akepogu,
          has received extensive theological training and embraces the doctrines
          of grace. Today, Calvary Bible Church is home to 70 families, with
          around 200 members, and remains faithful to its vision of spreading
          the gospel and equipping believers to live for God’s glory. We are
          committed to sound doctrine, worship, discipleship, and serving the
          world with the hope of Christ. To God be the glory!
        </p>
      </section>
    </div>
  );
};

export default About;
