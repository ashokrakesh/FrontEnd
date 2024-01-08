import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { deletePost } from "../../../../redux/posts/posts.actions";

import TagBadge from "../../../../components/molecules/TagBadge/TagBadge.component";
import UserCard from "../../../../components/molecules/UserCard/UserCard.component";

import "./PostCell.styles.scss";
import censorBadWords from "../../../../utils/censorBadWords";

const PostCell = ({
  deletePost,
  auth,
  post: {
    post: { _id, body, tags},
  },
}) => {
  return (
    <Fragment>
      <div className="post-cell">
        <div
          className="post-text fc-black-800"
          dangerouslySetInnerHTML={{ __html: censorBadWords(body) }}
        ></div>
        <div className="post-tags fc-black-800">
  
        </div>
        <div className="post-actions fc-black-800">
          <div className="post-actions-extended">
            <div className="post-btns">
              <div className="post-menu">
                <Link
                  className="post-links"
                  title="short permalink to this question"
                  to="/"
                >
                  share
                </Link>
                <Link
                  className="post-links"
                  title="Follow this question to receive notifications"
                  to="/"
                >
                  follow
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

PostCell.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
  auth: state.auth,
});

export default connect(mapStateToProps, { deletePost })(PostCell);
