import "./info.scss";

export const InfoTab = () => {
  return (
    <>
      <div className="info-tab">
        <textarea>
          The name’s John Deo. I am a tireless seeker of knowledge, occasional purveyor of wisdom
          and also, coincidentally, a graphic designer. Algolia helps businesses across industries
          quickly create relevant 😎, scalable 😀, and lightning 😍 fast search and discovery
          experiences.
        </textarea>
        <label>Bio</label>
        <div className="form">
          <div className="datetime">
            <input type="date" />
            <label>date</label>
          </div>
          <div className="sex">
            <p>Gender</p>
            <div className="genders">
              <div className="gender">
                <input type="radio" name="gen" id="Male" />
                <label htmlFor="Male">Male</label>
              </div>
              <div className="gender">
                <input type="radio" name="gen" id="Female" />
                <label htmlFor="Female">Female</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
