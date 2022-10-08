import React from "react";
import { MainWrapper } from "./article.styles";
import { Button } from "../index";
import { Link } from "react-router-dom";
export const Article = ({
  href,
  imgUrl,
  imgAlt,
  title,
  shortSummary,
  reads,
  comments,
  type,
  isWorkout,
  level,
  forGender,
  time,
  _id,
}) => {
  return (
    <MainWrapper>
      <div class="node-image">
        <Link to={`/articles/${_id}`}>
          <img
            class=" ls-is-cached lazyloaded"
            width="800"
            height="500"
            alt={imgAlt}
            src={imgUrl[0] || imgUrl[1]}
          />
        </Link>
      </div>
      <div class="node-title">
        <Link to={`/articles/${_id}`} alt={title} title={href}>
          {title}
        </Link>
      </div>
      <div class="node-short-summary">{shortSummary}</div>

      <div class="node-meta">
        {isWorkout ? (
          <>
            <span>{level}</span>
            <span>{forGender}</span>
            <span>{time}</span>
          </>
        ) : (
          <>
            <span>
              {Intl.NumberFormat("en", {
                notation: "compact",
              }).format(reads)}{" "}
              Reads
            </span>
            <span>{comments} Comments </span>
          </>
        )}
      </div>

      <div class="view-content-button">
        <Link to={`/articles/${_id}`} alt={title} title={title}>
          <Button text={`View ${type}`} isBlue />
        </Link>
      </div>
    </MainWrapper>
  );
};
