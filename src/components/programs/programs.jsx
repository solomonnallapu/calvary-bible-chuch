import "./programs.css";
const Programs = () => {
  return (
    <section className="programs">
      <div className="inner-container">
        <h2>Weekly Church Programs</h2>

        <div className="program-list">
          <div className="program-item">
            <h3>Sundays</h3>
            <ul>
              <li>09:00 AM - 12:00 PM - Worship Service</li>
              <li>10:30 AM - 12:00 PM - Sunday School </li>
            </ul>
          </div>
          <div className="program-item">
            <h3>Youth meeting</h3>
            <ul>
              <li>12:00 PM - 1:00 PM - Sunday</li>
            </ul>
          </div>
          <div className="program-item">
            <h3>Second Friday</h3>
            <ul>
              <li>10:30 PM - 5:00 AM - All Night Prayer</li>
            </ul>
          </div>
          <div className="program-item">
            <h3>Women's fellowship</h3>
            <ul>
              <li>01:00 PM - 3:00 PM - Wednesday</li>
            </ul>
          </div>
          <div className="program-item">
            <h3>True Life Bible Academy</h3>
            <ul>
              <li>7:00 PM - 9:00 PM - Saturday</li>
              <li>06:00 PM - 9:00 PM - Sunday</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Programs;
