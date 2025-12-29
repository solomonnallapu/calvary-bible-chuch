import "./programs.css";
const Programs = () => {
  return (
    <section className="programs">
      <div className="cbc-container">
        <h2>Weekly Church Programs</h2>
        <p className="program-description">
          Explore our various programs and services
        </p>
        <div className="program-list">
          <div className="program-item">
            <h3>Sundays</h3>
            <ul>
              <li>09:00 AM - Sunday Worship Service</li>
              <li>11:00 AM - Sunday School for all ages</li>
            </ul>
          </div>
          <div className="program-item">
            <h3>Wednesdays</h3>
            <ul>
              <li>7:00 PM - Midweek Bible Study</li>
            </ul>
          </div>
          <div className="program-item">
            <h3>Second Friday</h3>
            <ul>
              <li>10:30 PM - 5:00 AM - Whole Night Prayer</li>
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
