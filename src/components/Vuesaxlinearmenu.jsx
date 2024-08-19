import PropTypes from "prop-types";
import "./Vuesaxlinearmenu.css";

const Vuesaxlinearmenu = ({ className = "" }) => {
  return (
    <div className={`vuesaxlinearmenu ${className}`}>
      <div className="menu">
        <div className="menu">
          <div className="group">
            <img className="group-child" alt="" src="/group-609.svg" />
            <img className="group-item" alt="" src="/group-609.svg" />
          </div>
          <img className="vector-icon1" alt="" />
        </div>
      </div>
    </div>
  );
};

Vuesaxlinearmenu.propTypes = {
  className: PropTypes.string,
};

export default Vuesaxlinearmenu;
