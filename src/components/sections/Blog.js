import { Fragment, useContext } from "react";
import Context from "../../context/context";

const BlogSection = () => {
  const { changeNav } = useContext(Context);
  return (
    <Fragment>
      <div className="content blog">
        {/* title */}
        <div className="title">
          <span>Blog</span>
        </div>
        {/* content */}
        <div className="row border-line-v">
          {/* blog item */}
          <div className="col col-d-6 col-t-6 col-m-12">
            <div className="box-item">
              <div className="image">
                <a href="#" onClick={() => changeNav("blog-post")}>
                  <img
                    src="images/blog/blog1.jpg"
                    alt="Codility 100% solution"
                  />
                  <span className="info">
                    <span className="ion ion-document-text" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a href="#" onClick={() => changeNav("blog-post")}>
                  <span className="date">April 25, 2024</span>
                </a>
                <a
                  href="#"
                  onClick={() => changeNav("blog-post")}
                  className="name"
                >
                  SQLWorldCup
                </a>
                <div className="text">
                  <p>
                    Programming Language: SQL Server
                  </p>
                  <p>
                    You are given two tables, teams and matches, with the following structures:
                    Each record in the table teams represents a single soccer team. Each record in the table matches represents a finished match between two teams. Teams (host_team, guest_team) are represented by their IDs in the teams table (team_id). No team plays a match against itself. You know the result of each match (that is, the number of goals scored by each team).

                    You would like to compute the total number of points each team has scored after all the matches described in the table. The scoring rules are as follows:

                    If a team wins a match (scores strictly more goals than the other team), it receives three points.
                    If a team draws a match (scores exactly the same number of goals as the opponent), it receives one point.
                    If a team loses a match (scores fewer goals than the opponent), it receives no points.
                    Write an SQL query that returns a ranking of all teams (team_id) described in the table teams. For each team you should provide its name and the number of points it received after all described matches (num_points). The table should be ordered by num_points (in decreasing order). In case of a tie, order the rows by team_id (in increasing order).
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* blog item */}
          <div className="col col-d-6 col-t-6 col-m-12">
            <div className="box-item">
              <div className="image">
                <a href="#" onClick={() => changeNav("blog-post")}>
                  <img
                    src="images/blog/blog2.jpg"
                    alt="By spite about do of allow"
                  />
                  <span className="info">
                    <span className="ion ion-document-text" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a href="#" onClick={() => changeNav("blog-post")}>
                  <span className="date">April 28, 2020</span>
                </a>
                <a
                  href="#"
                  onClick={() => changeNav("blog-post")}
                  className="name"
                >
                  By spite about do of allow
                </a>
                <div className="text">
                  <p>
                    Ex audire suavitate has, ei quodsi tacimates sapientem sed,
                    pri zril ubique ut. Te cule tation munere noluisse. Enim
                    torquatos…
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* blog item */}
          <div className="col col-d-6 col-t-6 col-m-12">
            <div className="box-item">
              <div className="image">
                <a href="#" onClick={() => changeNav("blog-post")}>
                  <img
                    src="images/blog/blog3.jpg"
                    alt="By spite about do of allow"
                  />
                  <span className="info">
                    <span className="ion ion-document-text" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a href="#" onClick={() => changeNav("blog-post")}>
                  <span className="date">April 28, 2020</span>
                </a>
                <a
                  href="#"
                  onClick={() => changeNav("blog-post")}
                  className="name"
                >
                  By spite about do of allow
                </a>
                <div className="text">
                  <p>
                    Ex audire suavitate has, ei quodsi tacimates sapientem sed,
                    pri zril ubique ut. Te cule tation munere noluisse. Enim
                    torquatos…
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* blog item */}
          <div className="col col-d-6 col-t-6 col-m-12">
            <div className="box-item">
              <div className="image">
                <a href="#" onClick={() => changeNav("blog-post")}>
                  <img
                    src="images/blog/blog1.jpg"
                    alt="By spite about do of allow"
                  />
                  <span className="info">
                    <span className="ion ion-document-text" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a href="#" onClick={() => changeNav("blog-post")}>
                  <span className="date">April 28, 2020</span>
                </a>
                <a
                  href="#"
                  onClick={() => changeNav("blog-post")}
                  className="name"
                >
                  By spite about do of allow
                </a>
                <div className="text">
                  <p>
                    Ex audire suavitate has, ei quodsi tacimates sapientem sed,
                    pri zril ubique ut. Te cule tation munere noluisse. Enim
                    torquatos…
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
        <div className="pager">
          <nav className="navigation pagination">
            <div className="nav-links">
              <span className="page-numbers current">1</span>
              <a className="page-numbers" href="#">
                2
              </a>
              <a className="next page-numbers" href="#">
                Next
              </a>
            </div>
          </nav>
        </div>
      </div>
    </Fragment>
  );
};
export default BlogSection;

export const BlogClassic = () => {
  const { changeNav } = useContext(Context);
  return (
    <Fragment>
      <div className="content blog">
        {/* title */}
        <div className="title">Latest Posts</div>
        {/* content */}
        <div className="row border-line-v">
          {/* blog item */}
          <div className="col col-d-12 col-t-12 col-m-12 border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#" onClick={() => changeNav("blog-post")}>
                  <img src="images/blog/blog1.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-document-text" />
                  </span>
                  <span className="date">
                    <strong>20</strong>Jun
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="#"
                  onClick={() => changeNav("blog-post")}
                  className="name"
                >
                  By spite about do of do allow blush
                </a>
                <div className="category">Design</div>
              </div>
            </div>
          </div>
          {/* blog item */}
          <div className="col col-d-12 col-t-12 col-m-12 border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#" onClick={() => changeNav("blog-post")}>
                  <img src="images/blog/blog2.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-document-text" />
                  </span>
                  <span className="date">
                    <strong>19</strong>Jun
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="#"
                  onClick={() => changeNav("blog-post")}
                  className="name"
                >
                  Two Before Arrow Not Relied
                </a>
                <div className="category">Coding</div>
              </div>
            </div>
          </div>
          {/* blog item */}
          <div className="col col-d-12 col-t-12 col-m-12 border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#" onClick={() => changeNav("blog-post")}>
                  <img src="images/blog/blog3.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-document-text" />
                  </span>
                  <span className="date">
                    <strong>20</strong>Jun
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="#"
                  onClick={() => changeNav("blog-post")}
                  className="name"
                >
                  By spite about do of do allow blush
                </a>
                <div className="category">Travel</div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
