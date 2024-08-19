import FrameComponent from "../components/FrameComponent";
import SidebarContent from "../components/SidebarContent";
import "./ProjectManagement.css";

const ProjectManagement = () => {
  return (
    <div className="project-management">
      <main className="rectangle-parent">
        <div className="frame-child" />
        <FrameComponent />
        <section className="frame-parent">
          <img className="frame-item" alt="" src="/group-612.svg" />
          <img className="email-icon" alt="" src="/email.svg" />
          <img
            className="content-elements-icon"
            alt=""
            src="/content-elements.svg"
          />
          <img className="frame-inner" alt="" src="/vector-8.svg" />
          <div className="content-elements" />
          <div className="content-elements1" />
          <div className="content-elements2" />
          <img
            className="group-icon"
            loading="lazy"
            alt=""
            src="/group-626.svg"
          />
          <img
            className="content-elements-icon1"
            alt=""
            src="/content-elements1@2x.png"
          />
          <img
            className="content-elements-icon2"
            alt=""
            src="/content-elements2@2x.png"
          />
          <img
            className="content-elements-icon3"
            alt=""
            src="/content-elements3@2x.png"
          />
          <img
            className="content-elements-icon4"
            loading="lazy"
            alt=""
            src="/ellipse-14@2x.png"
          />
        </section>
        <section className="sidebar-content-wrapper">
          <SidebarContent />
        </section>
      </main>
      <img
        className="vuesaxbulklamp-on-icon"
        loading="lazy"
        alt=""
        src="/vuesaxbulklampon.svg"
      />
      <footer className="footer">
        <h3 className="wwwnickelfoxcom">www.nickelfox.com</h3>
      </footer>
    </div>
  );
};

export default ProjectManagement;
