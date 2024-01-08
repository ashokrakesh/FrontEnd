import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import censorBadWords from "../../../utils/censorBadWords";

import htmlSubstring from "../../../utils/htmlSubstring";
import injectEllipsis from "../../../utils/injectEllipsis";

import UserCard from "../UserCard/UserCard.component";
import TagBadge from "../TagBadge/TagBadge.component";

import "./PostItem.styles.scss";

const PostItem = ({
  post: {
    _id,
    title,
    body,
    username,
    tags,
  },
}) => {
  const answerVoteUp = (
    <div className="vote answer">
      <span className="vote-count">0</span>
      <div className="count-text">answers</div>
    </div>
  );

  const answerVoteDown = (
    <div className="vote">
      <span className="vote-count">0</span>
      <div className="count-text">answers</div>
    </div>
  );

  return (
    <div className="posts">
      <div className="summary">
        <h3>
          <Link to={`/questions/${_id}`}>{censorBadWords(title)}</Link>
        </h3>
        <div
          className="brief"
          dangerouslySetInnerHTML={{
            __html: injectEllipsis(censorBadWords(htmlSubstring(body, 200))),
          }}
        ></div>
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};

export default connect(null)(PostItem);
