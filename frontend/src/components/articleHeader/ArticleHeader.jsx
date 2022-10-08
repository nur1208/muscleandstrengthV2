import React from "react";
import { useSelector } from "react-redux";
import { GridX } from "../../app.styles";
import { MainWrapper } from "./articleHeader.styles";

export const ArticleHeader = () => {
  const {
    data: { article },
  } = useSelector((state) => state.article_store);

  return (
    <MainWrapper>
      <h1>{article.title}</h1>
      <div className="node-meta-wrapper">
        <GridX>
          <div className="grid-x grid-margin-x node-meta">
            <div className="cell small-12 bp600-4 bp960-4 large-4 author-info">
              <div className="grid-x">
                <div className="cell shrink">
                  <img
                    width="100"
                    height="100"
                    className="author-image ls-is-cached lazyloaded"
                    src="https://cdn.muscleandstrength.com/sites/default/files/styles/100x100/public/field/image/author/mns.jpg?itok=_9tNZRfe"
                    data-src="https://cdn.muscleandstrength.com/sites/default/files/styles/100x100/public/field/image/author/mns.jpg?itok=_9tNZRfe"
                    alt="M&amp;S Writers"
                    // alt={article.imgAlt}
                    // src={
                    //   (article.imgUrl && article.imgUrl[0]) ||
                    //   article.imgUrl[1]
                    // }
                  />
                </div>
                <div className="cell auto author-meta">
                  Written By:{" "}
                  <a href="/authors/mands-writer.html">
                    M&amp;S Writers
                  </a>
                  <br />
                  September 27th, 2009 <br />
                  Updated: March 22nd, 2021{" "}
                </div>
              </div>
            </div>
            <div className="cell small-12 bp600-8 category-info">
              <div className="categories">
                Categories:{" "}
                {article.category
                  ? article.category.map((type) => (
                      <>
                        <a
                          className="category-link"
                          // href="/workout-routines"
                        >
                          {type}
                        </a>{" "}
                      </>
                    ))
                  : []}
              </div>
              <div className="count">
                {Intl.NumberFormat("en", {
                  notation: "compact",
                }).format(article.reads || 0)}{" "}
                Reads{" "}
              </div>
            </div>
          </div>
        </GridX>
      </div>

      <div className="feature-image">
        <picture>
          <source
            width="800"
            height="500"
            srcset={article.imgUrl && article.imgUrl[0]}
            media="(max-width: 800px)"
          />
          <img
            width="1200"
            height="630"
            src={article.imgUrl && article.imgUrl[1]}
            alt={article.title}
          />
        </picture>
      </div>
    </MainWrapper>
  );
};
