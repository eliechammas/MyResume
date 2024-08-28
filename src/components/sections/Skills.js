import { Fragment } from "react";

const Slice = () => (
  <div className="slice">
    <div className="bar" />
    <div className="fill" />
  </div>
);

const Skills = () => {
  return (
    <Fragment>
      <div className="content skills">
        {/* title */}
        <div className="title">My Skills</div>
        {/* content */}
        <div className="row">
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-paint-brush" />
                </div>
                <div className="name">Programming Languages</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">C#, .Net Core, ASP.Net, VB.Net</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "90%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Entity Framework, LINQ</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "85%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Javascript, Jquery, HTML5, CSS</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "75%" }} />
                  </div>
                </li>
                <li>
                  <div className="name">VueJs, ReactJs</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "55%" }} />
                  </div>
                </li>
                <li>
                  <div className="name">Wordpress</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "80%" }} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-flag" />
                </div>
                <div className="name">DB Design & Management</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">MS SQL SERVER</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "90%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">ORACLE, MYSQL</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "80%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">JSON</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "80%" }} />
                  </div>
                </li>
                <li>
                  <div className="name">FIREBASE</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "50%" }} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list">
                <div className="skill-title border-line-h">
                    <div className="icon">
                        <i className="fa fa-flag" />
                    </div>
                    <div className="name">Design Patterns</div>
                </div>
                <ul>
                    <li className="border-line-h">
                        <div className="name">4-Tiers</div>
                        <div className="progress">
                            <div className="percentage" style={{ width: "90%" }} />
                        </div>
                    </li>
                    <li className="border-line-h">
                        <div className="name">Unit of Work</div>
                        <div className="progress">
                            <div className="percentage" style={{ width: "90%" }} />
                        </div>
                    </li>
                    <li className="border-line-h">
                        <div className="name">Repository</div>
                        <div className="progress">
                            <div className="percentage" style={{ width: "90%" }} />
                        </div>
                    </li>
                    <li className="border-line-h">
                        <div className="name">Generic Repository</div>
                        <div className="progress">
                            <div className="percentage" style={{ width: "90%" }} />
                        </div>
                    </li>
                    <li>
                        <div className="name">Singleton</div>
                        <div className="progress ">
                            <div className="percentage" style={{ width: "90%" }} />
                        </div>
                    </li>
                    <li>
                        <div className="name">Factory</div>
                        <div className="progress ">
                            <div className="percentage" style={{ width: "90%" }} />
                        </div>
                    </li>
                    <li>
                        <div className="name">Domain Driven Design</div>
                        <div className="progress ">
                            <div className="percentage" style={{ width: "75%" }} />
                        </div>
                    </li>
                </ul>
            </div>
                  </div>
            {/* skill item */}
            <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                <div className="skills-list circles">
                    <div className="skill-title border-line-h">
                        <div className="icon">
                            <i className="fa fa-code" />
                        </div>
                        <div className="name">Cloud & DevOps</div>
                    </div>
                    <ul>
                        <li>
                            <div className="name">MS Azure</div>
                            <div className="progress p75">
                                <span>75%</span>{" "}
                                <div className="slice">
                                    <div className="bar" />
                                    <div className="fill" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="name">Git</div>
                            <div className="progress p85">
                                <span>85%</span>{" "}
                                <div className="slice">
                                    <div className="bar" />
                                    <div className="fill" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="name">CI/CD Pipeline & Github</div>
                            <div className="progress p70">
                                <span>70%</span>{" "}
                                <div className="slice">
                                    <div className="bar" />
                                    <div className="fill" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="name">AWS</div>
                            <div className="progress p95">
                                <span>45%</span>{" "}
                                <div className="slice">
                                    <div className="bar" />
                                    <div className="fill" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
          {/* skill item */}
            <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                <div className="skills-list circles">
                    <div className="skill-title border-line-h">
                        <div className="icon">
                            <i className="fa fa-code" />
                        </div>
                        <div className="name">Agile & PM Tools</div>
                    </div>
                    <ul>
                        <li>
                            <div className="name">Scrum</div>
                            <div className="progress p80">
                                <span>80%</span>{" "}
                                <div className="slice">
                                    <div className="bar" />
                                    <div className="fill" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="name">Kanban</div>
                            <div className="progress p85">
                                <span>85%</span>{" "}
                                <div className="slice">
                                    <div className="bar" />
                                    <div className="fill" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="name">JIRA</div>
                            <div className="progress p85">
                                <span>85%</span>{" "}
                                <div className="slice">
                                    <div className="bar" />
                                    <div className="fill" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="name">TRELLO</div>
                            <div className="progress p65">
                                <span>65%</span>{" "}
                                <div className="slice">
                                    <div className="bar" />
                                    <div className="fill" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                  </div>
                  {/* skill item */}
                  <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                      <div className="skills-list circles">
                          <div className="skill-title border-line-h">
                              <div className="icon">
                                  <i className="fa fa-code" />
                              </div>
                              <div className="name">Web Components & Tools</div>
                          </div>
                          <ul>
                              <li>
                                  <div className="name">DevExpress</div>
                                  <div className="progress p75">
                                      <span>75%</span>{" "}
                                      <div className="slice">
                                          <div className="bar" />
                                          <div className="fill" />
                                      </div>
                                  </div>
                              </li>
                              <li>
                                  <div className="name">SEO Optimization</div>
                                  <div className="progress p85">
                                      <span>85%</span>{" "}
                                      <div className="slice">
                                          <div className="bar" />
                                          <div className="fill" />
                                      </div>
                                  </div>
                              </li>
                              <li>
                                  <div className="name">Google Analytics</div>
                                  <div className="progress p70">
                                      <span>70%</span>{" "}
                                      <div className="slice">
                                          <div className="bar" />
                                          <div className="fill" />
                                      </div>
                                  </div>
                              </li>
                              <li>
                                  <div className="name">Google Services</div>
                                  <div className="progress p65">
                                      <span>65%</span>{" "}
                                      <div className="slice">
                                          <div className="bar" />
                                          <div className="fill" />
                                      </div>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </div>
            {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-list" />
                </div>
                <div className="name">Knowledge</div>
              </div>
              <ul>
                <li>
                  <div className="name">Mobile Development</div>
                </li>
                <li>
                  <div className="name">IIS & Web Servers</div>
                </li>
                <li>
                  <div className="name">Microservices</div>
                </li>
                <li>
                  <div className="name">NoSQL</div>
                </li>
                <li>
                  <div className="name">Umbraco</div>
                </li>
                <li>
                  <div className="name">Project Management (PMP)</div>
                </li>
                <li>
                  <div className="name">MS Office</div>
                </li>
                <li>
                  <div className="name">Web Services Monitoring</div>
                </li>
                <li>
                  <div className="name">WooCommerce</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default Skills;

export const SkillsFitness = () => {
  return (
    <Fragment>
      <div className="content skills">
        {/* title */}
        <div className="title">Skills</div>
        {/* content */}
        <div className="row">
          {/* skill item */}
          <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div className="skills-list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-bicycle" />
                </div>
                <div className="name">Fitness</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">Agility</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "90%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Balance</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "65%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Power</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "75%" }} />
                  </div>
                </li>
                <li>
                  <div className="name">Speed</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "85%" }} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list dotted">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-flag" />
                </div>
                <div className="name">Languages</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">English</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "90%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">German</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "60%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Italian</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "30%" }} />
                  </div>
                </li>
                <li>
                  <div className="name">French</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "70%" }} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-list" />
                </div>
                <div className="name">Knowledge</div>
              </div>
              <ul>
                <li>
                  <div className="name">Fat Burn</div>
                </li>
                <li>
                  <div className="name">Body condition</div>
                </li>
                <li>
                  <div className="name">Strength training</div>
                </li>
                <li>
                  <div className="name">Faster exercise</div>
                </li>
                <li>
                  <div className="name">Bodybuilding</div>
                </li>
                <li>
                  <div className="name">Fitness training</div>
                </li>
                <li>
                  <div className="name">Cardio training</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export const SkillsLawyer = () => {
  return (
    <Fragment>
      <div className="content skills">
        {/* title */}
        <div className="title">Skills</div>
        {/* content */}
        <div className="row">
          {/* skill item */}
          <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div className="skills-list">
              <ul>
                <li className="border-line-h">
                  <div className="name">Oral Communication</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "90%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Written Communication</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "65%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Analytical and Logical Reasoning</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "75%" }} />
                  </div>
                </li>
                <li>
                  <div className="name">Legal Research</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "85%" }} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list dotted">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-flag" />
                </div>
                <div className="name">Languages</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">English</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "90%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">German</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "60%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Italian</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "30%" }} />
                  </div>
                </li>
                <li>
                  <div className="name">French</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "70%" }} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-list" />
                </div>
                <div className="name">Knowledge</div>
              </div>
              <ul>
                <li>
                  <div className="name">Client Service</div>
                </li>
                <li>
                  <div className="name">Technology Skills</div>
                </li>
                <li>
                  <div className="name">Knowledge of Substantive Law</div>
                </li>
                <li>
                  <div className="name">Legal Procedure</div>
                </li>
                <li>
                  <div className="name">Organization</div>
                </li>
                <li>
                  <div className="name">Teamwork</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};

export const SkillsWritter = () => {
  return (
    <div className="content skills">
      {/* title */}
      <div className="title">Skills</div>
      {/* content */}
      <div className="row">
        {/* skill item */}
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="skills-list">
            <ul>
              <li className="border-line-h">
                <div className="name">The Ability to Communicate</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "90%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">The Power of Observation</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "65%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">Reasoning and Problem Solving</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "75%" }} />
                </div>
              </li>
              <li>
                <div className="name">Knowledge of Grammar, Spelling</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "85%" }} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list dotted">
            <div className="skill-title border-line-h">
              <div className="icon">
                <i className="fa fa-flag" />
              </div>
              <div className="name">Languages</div>
            </div>
            <ul>
              <li className="border-line-h">
                <div className="name">English</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "90%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">German</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "60%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">Italian</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "30%" }} />
                </div>
              </li>
              <li>
                <div className="name">French</div>
                <div className="progress ">
                  <div className="percentage" style={{ width: "70%" }} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list list">
            <div className="skill-title border-line-h">
              <div className="icon">
                <i className="fa fa-list" />
              </div>
              <div className="name">Knowledge</div>
            </div>
            <ul>
              <li>
                <div className="name">Adaptability</div>
              </li>
              <li>
                <div className="name">Strong Research Skills</div>
              </li>
              <li>
                <div className="name">The Ability to Get Focused</div>
              </li>
              <li>
                <div className="name">Communicate</div>
              </li>
              <li>
                <div className="name">The Ability to Meet Deadlines</div>
              </li>
              <li>
                <div className="name">Organizational Skills</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export const SkillsMusican = () => {
  return (
    <div className="content skills">
      {/* title */}
      <div className="title">Skills</div>
      {/* content */}
      <div className="row">
        {/* skill item */}
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="skills-list">
            <ul>
              <li className="border-line-h">
                <div className="name">Motivation / Determination</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "90%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">Violin Expertise</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "65%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">Creativity</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "75%" }} />
                </div>
              </li>
              <li>
                <div className="name">Guitar Expertise</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "85%" }} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list circles">
            <div className="skill-title border-line-h">
              <div className="icon">
                <i className="fa fa-music" />
              </div>
              <div className="name">Read Music</div>
            </div>
            <ul>
              <li>
                <div className="name">Chords</div>
                <div className="progress p90">
                  <span>90%</span>
                  <Slice />
                </div>
              </li>
              <li>
                <div className="name">Intervals</div>
                <div className="progress p75">
                  <span>75%</span>
                  <Slice />
                </div>
              </li>
              <li>
                <div className="name">Melody</div>
                <div className="progress p85">
                  <span>85%</span>
                  <Slice />
                </div>
              </li>
              <li>
                <div className="name">Pitch</div>
                <div className="progress p95">
                  <span>95%</span>
                  <Slice />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list list">
            <div className="skill-title border-line-h">
              <div className="icon">
                <i className="fa fa-list" />
              </div>
              <div className="name">Knowledge</div>
            </div>
            <ul>
              <li>
                <div className="name">A Tight Sense of Rhythm</div>
              </li>
              <li>
                <div className="name">Rhythm is the heartbeat of all music</div>
              </li>
              <li>
                <div className="name">An Accurate Sense of Pitch</div>
              </li>
              <li>
                <div className="name">The Ability to “Jam”</div>
              </li>
              <li>
                <div className="name">An Ability to “Talk Music”</div>
              </li>
              <li>
                <div className="name">Singing in Tune</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export const SkillsPhotographer = () => {
  return (
    <div className="content skills">
      {/* title */}
      <div className="title">
        <span className="first-word">My</span> Skills
      </div>
      {/* content */}
      <div className="row">
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list circles">
            <div className="skill-title border-line-h">
              <div className="icon">
                <i className="fa fa-paint-brush" />
              </div>
              <div className="name">Design</div>
            </div>
            <ul>
              <li>
                <div className="name">Logo Design</div>
                <div className="progress p90">
                  <span>90%</span>
                  <Slice />
                </div>
              </li>
              <li>
                <div className="name">Web Design</div>
                <div className="progress p75">
                  <span>75%</span>
                  <Slice />
                </div>
              </li>
              <li>
                <div className="name">Illustration</div>
                <div className="progress p85">
                  <span>85%</span>
                  <Slice />
                </div>
              </li>
              <li>
                <div className="name">Photography</div>
                <div className="progress p95">
                  <span>95%</span>
                  <Slice />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list list">
            <div className="skill-title border-line-h">
              <div className="icon">
                <i className="fa fa-list" />
              </div>
              <div className="name">Knowledge</div>
            </div>
            <ul>
              <li>
                <div className="name">Website hosting</div>
              </li>
              <li>
                <div className="name">iOS and android apps</div>
              </li>
              <li>
                <div className="name">Create logo design</div>
              </li>
              <li>
                <div className="name">Design for print</div>
              </li>
              <li>
                <div className="name">Modern and mobile-ready</div>
              </li>
              <li>
                <div className="name">Advertising services include</div>
              </li>
              <li>
                <div className="name">Graphics and animations</div>
              </li>
              <li>
                <div className="name">Search engine marketing</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export const SkillsPhotographerForAbout = () => {
  return (
    <div className="row">
      {/* skill item */}
      <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
        <div className="skills-list">
          <div className="skill-title border-line-h">
            <div className="icon">
              <i className="fa fa-paint-brush" />
            </div>
            <div className="name">Software Skills</div>
          </div>
          <ul>
            <li className="border-line-h">
              <div className="name">Sketch</div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }} />
              </div>
            </li>
            <li className="border-line-h">
              <div className="name">Adobe Photoshop</div>
              <div className="progress">
                <div className="percentage" style={{ width: "65%" }} />
              </div>
            </li>
            <li className="border-line-h">
              <div className="name">Adobe illustration</div>
              <div className="progress">
                <div className="percentage" style={{ width: "75%" }} />
              </div>
            </li>
            <li>
              <div className="name">Figma</div>
              <div className="progress">
                <div className="percentage" style={{ width: "85%" }} />
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* skill item */}
      <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
        <div className="skills-list dotted">
          <div className="skill-title border-line-h">
            <div className="icon">
              <i className="fa fa-flag" />
            </div>
            <div className="name">Languages</div>
          </div>
          <ul>
            <li className="border-line-h">
              <div className="name">English</div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }} />
              </div>
            </li>
            <li className="border-line-h">
              <div className="name">German</div>
              <div className="progress">
                <div className="percentage" style={{ width: "60%" }} />
              </div>
            </li>
            <li className="border-line-h">
              <div className="name">Italian</div>
              <div className="progress">
                <div className="percentage" style={{ width: "30%" }} />
              </div>
            </li>
            <li>
              <div className="name">French</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "70%" }} />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="clear" />
    </div>
  );
};

export const SkillsClassic = () => {
  return (
    <div className="content skills">
      {/* title */}
      <div className="title">My Skills</div>
      {/* content */}
      <div className="row">
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list">
            <div className="skill-title border-line-h">
              <div className="icon">
                <i className="ion ion-easel" />
              </div>
              <div className="name">Design</div>
            </div>
            <ul>
              <li className="border-line-h">
                <div className="name">Web Design</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "90%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">Write Music</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "65%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">Photoshop</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "75%" }} />
                </div>
              </li>
              <li>
                <div className="name">Graphic Design</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "85%" }} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list dotted">
            <div className="skill-title border-line-h">
              <div className="icon">
                <i className="ion ion-flag" />
              </div>
              <div className="name">Languages</div>
            </div>
            <ul>
              <li className="border-line-h">
                <div className="name">English</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "90%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">German</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "60%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">Italian</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "30%" }} />
                </div>
              </li>
              <li>
                <div className="name">French</div>
                <div className="progress ">
                  <div className="percentage" style={{ width: "70%" }} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list circles">
            <div className="skill-title border-line-h">
              <div className="icon">
                <i className="ion ion-code" />
              </div>
              <div className="name">Coding</div>
            </div>
            <ul>
              <li>
                <div className="name">WordPress</div>
                <div className="progress p90">
                  <span>90%</span>
                  <Slice />
                </div>
              </li>
              <li>
                <div className="name">PHP / MYSQL</div>
                <div className="progress p75">
                  <span>75%</span>
                  <Slice />
                </div>
              </li>
              <li>
                <div className="name">Angular / JavaScript</div>
                <div className="progress p85">
                  <span>85%</span>
                  <Slice />
                </div>
              </li>
              <li>
                <div className="name">HTML / CSS</div>
                <div className="progress p95">
                  <span>95%</span>
                  <Slice />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list list">
            <div className="skill-title border-line-h">
              <div className="icon">
                <i className="ion ion-android-list" />
              </div>
              <div className="name">Knowledge</div>
            </div>
            <ul>
              <li>
                <div className="name">Website hosting</div>
              </li>
              <li>
                <div className="name">iOS and android apps</div>
              </li>
              <li>
                <div className="name">Create logo design</div>
              </li>
              <li>
                <div className="name">Design for print</div>
              </li>
              <li>
                <div className="name">Modern and mobile-ready</div>
              </li>
              <li>
                <div className="name">Advertising services include</div>
              </li>
              <li>
                <div className="name">Graphics and animations</div>
              </li>
              <li>
                <div className="name">Search engine marketing</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
