import Vuesaxlinearmenu from "./Vuesaxlinearmenu";
import PropTypes from "prop-types";
import "./SidebarContent.css";

const SidebarContent = ({ className = "" }) => {
  return (
    <div className={`sidebar-content ${className}`}>
      <div className="menu-options-list-parent">
        <div className="menu-options-list">
          <div className="menu-option-container">
            <div className="primary-menu-items-wrapper">
              <div className="menu-option-container">
                <div className="vuesaxoutlinecategory-parent">
                  <img
                    className="vuesaxoutlinecategory-icon"
                    loading="lazy"
                    alt=""
                    src="/vuesaxoutlinecategory.svg"
                  />
                  <div className="primary-menu-labels">
                    <a className="home">Home</a>
                  </div>
                </div>
                <div className="vuesaxoutlinecategory-parent">
                  <img
                    className="vuesaxoutlinecategory-icon"
                    loading="lazy"
                    alt=""
                    src="/vuesaxlinearmessage.svg"
                  />
                  <div className="primary-menu-labels">
                    <div className="messages">Messages</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vuesaxoutlinecategory-parent">
              <div className="secondary-menu-icons">
                <img
                  className="vuesaxlineartask-square-icon"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlineartasksquare.svg"
                />
                <img
                  className="vuesaxlineartask-square-icon"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearprofile2user.svg"
                />
                <div className="vuesaxlinearsetting-2-wrapper">
                  <img
                    className="vuesaxlinearsetting-2-icon"
                    loading="lazy"
                    alt=""
                    src="/vuesaxlinearsetting2.svg"
                  />
                </div>
              </div>
              <div className="primary-menu-labels">
                <div className="tasks-parent">
                  <div className="tasks">Tasks</div>
                  <div className="members">Members</div>
                  <div className="settings">Settings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent4">
          <div className="add-project-content-wrapper">
            <div className="add-project-content">
              <b className="my-projects">my projects</b>
              <img
                className="vuesaxlinearadd-square-icon"
                loading="lazy"
                alt=""
                src="/vuesaxlinearaddsquare.svg"
              />
            </div>
          </div>
          <div className="rectangle-container">
            <div className="frame-child3" />
            <div className="ellipse-wrapper">
              <div className="ellipse-div" />
            </div>
            <div className="mobile-app-wrapper">
              <div className="mobile-app">Mobile App</div>
            </div>
            <div className="project-spacer">. . .</div>
          </div>
          <div className="project-headers">
            <div className="website-redesign">Website Redesign</div>
          </div>
          <div className="project-headers">
            <div className="design-system">Design System</div>
          </div>
          <div className="wireframes-wrapper">
            <div className="wireframes">Wireframes</div>
          </div>
        </div>
        <div className="notice-content-wrapper">
          <div className="notice-content">
            <div className="notice-header">
              <img className="union-icon" alt="" src="/union.svg" />
              <div className="notice-header-child" />
            </div>
            <div className="thoughts-time-wrapper">
              <div className="thoughts-time">Thoughts Time</div>
            </div>
            <div className="we-dont-have">
              We don’t have any notice for you, till then you can share your
              thoughts with your peers.
            </div>
            <div className="rectangle-parent1">
              <div className="frame-child4" />
              <div className="write-a-message">Write a message</div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-content-wrapper">
        <div className="team-content">
          <div className="team-header">
            <div className="mobile-app-parent">
              <h1 className="mobile-app1">Mobile App</h1>
              <div className="vuesaxlineararrow-square-up-wrapper">
                <img
                  className="vuesaxlineararrow-square-up-icon"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlineararrowsquareup.svg"
                />
              </div>
            </div>
            <div className="invite-content-wrapper">
              <div className="invite-content">
                <div className="vuesaxlinearadd-square-wrapper">
                  <img
                    className="vuesaxlinearadd-square-icon1"
                    alt=""
                    src="/vuesaxlinearaddsquare-1.svg"
                  />
                </div>
                <div className="invite">Invite</div>
              </div>
            </div>
            <div className="team-header-inner">
              <div className="ellipse-parent">
                <div className="frame-child5" />
                <div className="empty-state">+2</div>
              </div>
            </div>
          </div>
          <div className="filter-options-parent">
            <div className="filter-options">
              <div className="filter-icons-parent">
                <div className="vuesaxlinearadd-square-wrapper">
                  <img
                    className="vuesaxlinearfilter-icon"
                    loading="lazy"
                    alt=""
                    src="/vuesaxlinearfilter.svg"
                  />
                </div>
                <div className="filter">Filter</div>
                <div className="frame-child6" />
                <div className="vuesaxlinearadd-square-wrapper">
                  <img
                    className="vuesaxlinearfilter-icon"
                    loading="lazy"
                    alt=""
                    src="/vuesaxoutlinearrowdown-1.svg"
                  />
                </div>
              </div>
              <div className="group-div">
                <div className="vuesaxlinearadd-square-wrapper">
                  <img
                    className="vuesaxlinearfilter-icon"
                    alt=""
                    src="/vuesaxlinearcalendar.svg"
                  />
                </div>
                <div className="frame-child7" />
                <div className="today">Today</div>
                <div className="primary-menu-labels">
                  <img
                    className="vuesaxoutlinearrow-down-icon2"
                    alt=""
                    src="/vuesaxoutlinearrowdown-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="share-menu">
              <button className="calendar-icon-parent">
                <div className="primary-menu-labels">
                  <img
                    className="vuesaxlinearfilter-icon"
                    alt=""
                    src="/vuesaxlinearcalendar-1.svg"
                  />
                </div>
                <div className="frame-child8" />
                <div className="share">Share</div>
              </button>
              <div className="menu-option">
                <Vuesaxlinearmenu />
              </div>
            </div>
          </div>
          <div className="task-board">
            <div className="to-do-list">
              <div className="to-do-list-child" />
              <div className="task-item">
                <div className="menu-option-container">
                  <div className="task-header">
                    <div className="task-priority">
                      <div className="vuesaxlinearadd-square-wrapper">
                        <div className="low-priority">
                          <div className="priority-indicator">
                            <div className="red-circle" />
                          </div>
                          <div className="to-do">To Do</div>
                          <div className="rectangle-parent2">
                            <div className="frame-child9" />
                            <div className="task-title">4</div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="vuesaxbulkadd-square-icon"
                        loading="lazy"
                        alt=""
                        src="/vuesaxbulkaddsquare.svg"
                      />
                    </div>
                    <img className="task-icon" alt="" src="/task-icon.svg" />
                  </div>
                  <div className="rectangle-parent3">
                    <div className="frame-child10" />
                    <div className="task-description">
                      <div className="description-content">
                        <div className="frame-parent5">
                          <div className="rectangle-parent4">
                            <div className="frame-child11" />
                            <div className="low">Low</div>
                          </div>
                          <div className="brainstorming">Brainstorming</div>
                          <div className="brainstorming-brings-team">{`Brainstorming brings team members' diverse experience into play. `}</div>
                        </div>
                      </div>
                      <div className="task-spacing">. . .</div>
                    </div>
                    <div className="task-actions">
                      <img
                        className="task-actions-child"
                        loading="lazy"
                        alt=""
                        src="/group-633.svg"
                      />
                      <div className="comment-content-wrapper">
                        <div className="vuesaxoutlinecategory-parent">
                          <div className="comment-icon">
                            <img
                              className="vuesaxlinearadd-square-icon"
                              alt=""
                              src="/group-627.svg"
                            />
                            <div className="vuesaxlinearadd-square-wrapper">
                              <div className="comments">12 comments</div>
                            </div>
                          </div>
                          <div className="comment-icon">
                            <img
                              className="vuesaxlinearadd-square-icon"
                              alt=""
                              src="/group-628.svg"
                            />
                            <div className="vuesaxlinearadd-square-wrapper">
                              <div className="files">0 files</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="research-task">
                      <div className="task-background" />
                      <div className="drag-icon-parent">
                        <div className="drag-icon">
                          <div className="drag-icon-child" />
                          <img
                            className="cursorgrabbed-icon"
                            loading="lazy"
                            alt=""
                            src="/cursorgrabbed.svg"
                          />
                        </div>
                        <div className="drag-area" />
                        <img
                          className="frame-child13"
                          loading="lazy"
                          alt=""
                          src="/group-634@2x.png"
                        />
                        <a className="research">Research</a>
                        <div className="research-spacing">. . .</div>
                        <div className="user-research-helps">
                          User research helps you to create an optimal product
                          for users.
                        </div>
                        <img
                          className="frame-child14"
                          loading="lazy"
                          alt=""
                          src="/group-630@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="mask-group-icon"
                loading="lazy"
                alt=""
                src="/mask-group.svg"
              />
            </div>
            <div className="rectangle-parent5">
              <div className="frame-child15" />
              <div className="progress-content">
                <div className="progress-inner-content">
                  <div className="low-priority">
                    <div className="priority-indicator">
                      <div className="progress-icon" />
                    </div>
                    <div className="on-progress">On Progress</div>
                    <div className="rectangle-parent2">
                      <div className="frame-child9" />
                      <div className="task-title">3</div>
                    </div>
                  </div>
                  <img
                    className="task-icon"
                    alt=""
                    src="/illustrations-icon.svg"
                  />
                </div>
              </div>
              <div className="frame-wrapper4">
                <div className="rectangle-parent7">
                  <div className="frame-child17" />
                  <div className="illustrations-details">
                    <div className="illustrations-header">
                      <div className="task-priority">
                        <div className="vuesaxlinearadd-square-wrapper">
                          <div className="rectangle-parent4">
                            <div className="frame-child11" />
                            <div className="low">Low</div>
                          </div>
                        </div>
                        <div className="illustrations-type">. . .</div>
                      </div>
                      <div className="onboarding-illustrations">{`Onboarding Illustrations `}</div>
                    </div>
                    <img
                      className="unsplashmicqqgydq6w-icon"
                      loading="lazy"
                      alt=""
                      src="/unsplashmicqqgydq6w@2x.png"
                    />
                  </div>
                  <div className="illustrations-meta">
                    <div className="authors-avatars">
                      <img
                        className="authors-avatars-child"
                        alt=""
                        src="/ellipse-12-1@2x.png"
                      />
                      <img
                        className="authors-avatars-item"
                        alt=""
                        src="/ellipse-13-1@2x.png"
                      />
                      <img
                        className="authors-avatars-inner"
                        alt=""
                        src="/ellipse-15-1@2x.png"
                      />
                    </div>
                    <div className="comment-content-wrapper">
                      <div className="vuesaxoutlinecategory-parent">
                        <div className="comment-icon">
                          <img
                            className="vuesaxlinearadd-square-icon"
                            alt=""
                            src="/group-627.svg"
                          />
                          <div className="vuesaxlinearadd-square-wrapper">
                            <div className="comments">14 comments</div>
                          </div>
                        </div>
                        <div className="comment-icon">
                          <img
                            className="vuesaxlinearadd-square-icon"
                            alt=""
                            src="/group-628.svg"
                          />
                          <div className="vuesaxlinearadd-square-wrapper">
                            <div className="files1">15 files</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-wrapper5">
                <div className="rectangle-parent9">
                  <div className="frame-child21" />
                  <div className="moodboard-details">
                    <div className="moodboard-header">
                      <div className="rectangle-parent4">
                        <div className="frame-child11" />
                        <div className="low">Low</div>
                      </div>
                      <div className="moodboard">Moodboard</div>
                      <img
                        className="unsplashbs-1xgrkih4-icon"
                        loading="lazy"
                        alt=""
                        src="/unsplashbs-1xgrkih4@2x.png"
                      />
                    </div>
                    <div className="moodboard-extra">
                      <div className="extra-details">
                        <div className="project-spacer">. . .</div>
                      </div>
                      <img
                        className="unsplashbs-1xgrkih4-icon"
                        loading="lazy"
                        alt=""
                        src="/unsplashkiqjfzbii9w@2x.png"
                      />
                    </div>
                  </div>
                  <div className="moodboard-authors">
                    <img
                      className="moodboard-avatar-icon"
                      loading="lazy"
                      alt=""
                      src="/ellipse-12-1@2x.png"
                    />
                    <div className="comment-content-wrapper">
                      <div className="vuesaxoutlinecategory-parent">
                        <div className="comment-icon">
                          <img
                            className="vuesaxlinearadd-square-icon"
                            loading="lazy"
                            alt=""
                            src="/group-627.svg"
                          />
                          <div className="vuesaxlinearadd-square-wrapper">
                            <div className="comments2">9 comments</div>
                          </div>
                        </div>
                        <div className="comment-icon">
                          <img
                            className="vuesaxlinearadd-square-icon"
                            loading="lazy"
                            alt=""
                            src="/group-628.svg"
                          />
                          <div className="vuesaxlinearadd-square-wrapper">
                            <div className="files1">10 files</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="mask-group-icon1"
                loading="lazy"
                alt=""
                src="/mask-group-1.svg"
              />
            </div>
            <div className="to-do-list1">
              <div className="to-do-list-item" />
              <div className="frame-parent11">
                <div className="priority-indicator">
                  <div className="frame-child25" />
                </div>
                <div className="done">Done</div>
                <div className="rectangle-parent2">
                  <div className="frame-child9" />
                  <div className="task-title">2</div>
                </div>
              </div>
              <div className="checkmark-icon-wrapper">
                <img
                  className="checkmark-icon"
                  alt=""
                  src="/checkmark-icon.svg"
                />
              </div>
              <div className="rectangle-parent12">
                <div className="frame-child27" />
                <div className="completed-content">
                  <div className="task-priority">
                    <div className="vuesaxlinearadd-square-wrapper">
                      <div className="design-header">
                        <div className="rectangle-parent13">
                          <div className="frame-child28" />
                          <div className="settings">Completed</div>
                        </div>
                        <div className="onboarding-illustrations">
                          Mobile App Design
                        </div>
                      </div>
                    </div>
                    <div className="illustrations-type">. . .</div>
                  </div>
                  <div className="design-progress">
                    <div className="design-progress-child" />
                    <img
                      className="mask-group-icon2"
                      loading="lazy"
                      alt=""
                      src="/mask-group-2@2x.png"
                    />
                  </div>
                </div>
                <div className="design-actions">
                  <div className="design-action-icons">
                    <img
                      className="comment-circle-icon"
                      loading="lazy"
                      alt=""
                      src="/ellipse-13-1@2x.png"
                    />
                    <img
                      className="file-circle-icon"
                      alt=""
                      src="/ellipse-12-3@2x.png"
                    />
                  </div>
                  <div className="comment-content-wrapper">
                    <div className="vuesaxoutlinecategory-parent">
                      <div className="comment-icon">
                        <img
                          className="vuesaxlinearadd-square-icon"
                          alt=""
                          src="/group-627.svg"
                        />
                        <div className="vuesaxlinearadd-square-wrapper">
                          <div className="comments">12 comments</div>
                        </div>
                      </div>
                      <div className="comment-icon">
                        <img
                          className="vuesaxlinearadd-square-icon"
                          alt=""
                          src="/group-628.svg"
                        />
                        <div className="vuesaxlinearadd-square-wrapper">
                          <div className="files1">15 files</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rectangle-parent12">
                <div className="frame-child30" />
                <div className="system-content">
                  <div className="task-priority">
                    <div className="vuesaxlinearadd-square-wrapper">
                      <div className="design-header">
                        <div className="rectangle-parent13">
                          <div className="frame-child28" />
                          <div className="settings">Completed</div>
                        </div>
                        <div className="onboarding-illustrations">
                          Design System
                        </div>
                      </div>
                    </div>
                    <div className="illustrations-type">. . .</div>
                  </div>
                  <div className="it-just-needs">{`It just needs to adapt the UI from what you did before `}</div>
                </div>
                <div className="system-actions">
                  <img
                    className="task-actions-child"
                    loading="lazy"
                    alt=""
                    src="/group-633-1.svg"
                  />
                  <div className="comment-content-wrapper">
                    <div className="vuesaxoutlinecategory-parent">
                      <div className="comment-icon">
                        <img
                          className="vuesaxlinearadd-square-icon"
                          loading="lazy"
                          alt=""
                          src="/group-627.svg"
                        />
                        <div className="vuesaxlinearadd-square-wrapper">
                          <div className="comments">12 comments</div>
                        </div>
                      </div>
                      <div className="comment-icon">
                        <img
                          className="vuesaxlinearadd-square-icon"
                          loading="lazy"
                          alt=""
                          src="/group-628.svg"
                        />
                        <div className="vuesaxlinearadd-square-wrapper">
                          <div className="files1">15 files</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SidebarContent.propTypes = {
  className: PropTypes.string,
};

export default SidebarContent;
