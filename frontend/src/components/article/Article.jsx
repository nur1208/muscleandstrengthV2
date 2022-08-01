import React from "react";
import { MainWrapper } from "./article.styles";
import { Button } from "../index";
export const Article = ({
  href,
  imgUrl,
  imgAlt,
  title,
  shortSummary,
  reads,
  comments,
  type,
}) => {
  return (
    <MainWrapper>
      <div class="node-image">
        <a href={href}>
          <img
            class=" ls-is-cached lazyloaded"
            width="800"
            height="500"
            alt={imgAlt}
            src={imgUrl}
          />
        </a>
      </div>
      <div class="node-title">
        <a href={href} alt={title} title={href}>
          {title}
        </a>
      </div>
      <div class="node-short-summary">{shortSummary}</div>

      <div class="node-meta">
        <span>
          {Intl.NumberFormat("en", {
            notation: "compact",
          }).format(reads)}{" "}
          Reads
        </span>
        <span>{comments} Comments </span>
      </div>

      <div class="view-content-button">
        <a href={href} alt={title} title={title}>
          <Button text={`View ${type}`} isBlue />
        </a>
      </div>
    </MainWrapper>
  );
};
