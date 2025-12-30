import "./banner.css";
import bannerBg from "../../assets/images/cross-banner.jpg";

const Banner = () => {
  return (
    <section
      className="banner"
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "100% 37%",
        height: "400px",
      }}
    >
      <div className="cbc-container">
        <div className="banner-text">
          <h1>
            <span>Welcome to</span> <span>CALVARY BIBLE CHURCH</span>
          </h1>
          <p>
            Living for the glory of God and the good of the Church of Jesus
            Christ by preaching Expository sermons through the Bible
          </p>
        </div>
      </div>
    </section>
  );
};
export default Banner;
