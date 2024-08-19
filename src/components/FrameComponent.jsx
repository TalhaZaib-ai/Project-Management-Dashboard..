import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <header className={`frame-group ${className}`}>
      <div className="frame-wrapper">
        <div className="frame-container">
          <div className="frame-div">
            <div className="frame-wrapper1">
              <div className="frame-parent1">
                <img
                  className="vuesaxlinearcalendar-2-icon"
                  loading="lazy"
                  alt=""
                  src="/group-7.svg"
                />
                <div className="project-m-parent">
                  <div className="project-m">Project M.</div>
                  <div className="frame-wrapper2">
                    <img
                      className="frame-child2"
                      loading="lazy"
                      alt=""
                      src="/group-639.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle-group">
              <div className="rectangle-div" />
              <img
                className="vuesaxtwotonesearch-normal-icon"
                alt=""
                src="/vuesaxtwotonesearchnormal.svg"
              />
              <input
                className="frame-input"
                placeholder="Search for anything..."
                type="text"
              />
            </div>
          </div>
          <div className="frame-wrapper3">
            <div className="contact-icons">
              <div className="frame-parent3">
                <div className="contact-icons-wrapper">
                  <div className="contact-icons">
                    <img
                      className="vuesaxlinearcalendar-2-icon"
                      loading="lazy"
                      alt=""
                      src="/vuesaxlinearcalendar2.svg"
                    />
                    <img
                      className="vuesaxlinearcalendar-2-icon"
                      loading="lazy"
                      alt=""
                      src="/vuesaxlinearmessagequestion.svg"
                    />
                    <img
                      className="vuesaxlinearcalendar-2-icon"
                      loading="lazy"
                      alt=""
                      src="/vuesaxlinearnotification.svg"
                    />
                  </div>
                </div>
                <div className="anima-agrawal-parent">
                  <div className="anima-agrawal">Anima Agrawal</div>
                  <div className="up-india">U.P, India</div>
                </div>
              </div>
              <div className="vuesaxoutlinearrow-down-wrapper">
                <img
                  className="vuesaxoutlinearrow-down-icon"
                  alt=""
                  src="/vuesaxoutlinearrowdown.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="vector-icon" alt="" src="/vector-7.svg" />
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
