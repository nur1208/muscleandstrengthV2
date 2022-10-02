import React from "react";
import { GridX } from "../../app.styles";
import { Button } from "../button/Button";
import { MainWrapper } from "./articleComments.styles";

export const ArticleComments = () => {
  return (
    <MainWrapper>
      <div className="comment-wrapper">
        <GridX>
          <div class="grid-x comments-header">
            <div class="cell small-6">
              <h5>4K Comments</h5>
            </div>
            <div class="cell small-6 text-right">
              <a
                class="inner-link"
                onclick="jQuery('.new-comment-form').toggle()"
              >
                Post Comment
              </a>
            </div>
            <a name="comment-form"></a>
            <div class="cell small-12 comment-form-new clearfix">
              <div
                class="new-comment-form"
                style={{ display: "none" }}
              >
                <form
                  class="comment-form user-info-from-cookie user-info-from-cookie-processed"
                  action="/comment/reply/4442"
                  method="post"
                  id="comment-form"
                  accept-charset="UTF-8"
                >
                  <div>
                    <div class="form-item form-type-textfield form-item-name">
                      <label for="edit-name">
                        Your name{" "}
                        <span
                          class="form-required"
                          title="This field is required."
                        >
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        id="edit-name"
                        name="name"
                        value=""
                        size="30"
                        maxlength="60"
                        class="form-text required"
                      />
                    </div>
                    <div class="form-item form-type-textfield form-item-mail">
                      <label for="edit-mail">
                        E-mail{" "}
                        <span
                          class="form-required"
                          title="This field is required."
                        >
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        id="edit-mail"
                        name="mail"
                        value=""
                        size="30"
                        maxlength="64"
                        class="form-text required"
                      />
                      <div class="description">
                        The content of this field is kept private
                        and will not be shown publicly.
                      </div>
                    </div>
                    <div
                      class="field-type-text-long field-name-comment-body field-widget-text-textarea form-wrapper"
                      id="edit-comment-body"
                    >
                      <div id="comment-body-add-more-wrapper">
                        <div class="text-format-wrapper">
                          <div class="form-item form-type-textarea form-item-comment-body-und-0-value">
                            <label for="edit-comment-body-und-0-value">
                              Comment{" "}
                              <span
                                class="form-required"
                                title="This field is required."
                              >
                                *
                              </span>
                            </label>
                            <div class="form-textarea-wrapper resizable textarea-processed resizable-textarea">
                              <textarea
                                class="text-full form-textarea required"
                                id="edit-comment-body-und-0-value"
                                name="comment_body[und][0][value]"
                                cols="60"
                                rows="5"
                              ></textarea>
                              <div class="grippie"></div>
                            </div>
                          </div>
                          <fieldset
                            class="filter-wrapper form-wrapper"
                            id="edit-comment-body-und-0-format"
                          >
                            <div class="fieldset-wrapper">
                              <div
                                class="filter-help form-wrapper"
                                id="edit-comment-body-und-0-format-help"
                              >
                                <p>
                                  <a
                                    href="/filter/tips"
                                    target="_blank"
                                  >
                                    More information about text
                                    formats
                                  </a>
                                </p>
                              </div>
                              <div
                                class="filter-guidelines form-wrapper filter-guidelines-processed"
                                id="edit-comment-body-und-0-format-guidelines"
                              >
                                <div class="filter-guidelines-item filter-guidelines-plain_text">
                                  <h3
                                    style={{ display: "none" }}
                                  >
                                    Plain text
                                  </h3>
                                  <ul class="tips">
                                    <li>
                                      No HTML tags allowed.
                                    </li>
                                    <li>
                                      Web page addresses and
                                      e-mail addresses turn into
                                      links automatically.
                                    </li>
                                    <li>
                                      Lines and paragraphs break
                                      automatically.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                    <input
                      type="hidden"
                      name="form_build_id"
                      value="form-sj2m8F2A0mDtVZuEY_PY8rFbP3NzA_AJ_Qbk_lLfoBA"
                    />
                    <input
                      type="hidden"
                      name="form_id"
                      value="comment_node_workout_form"
                    />
                    <div class="form-item form-type-checkbox form-item-notify">
                      <input
                        type="checkbox"
                        id="edit-notify"
                        name="notify"
                        value="1"
                        class="form-checkbox"
                      />{" "}
                      <label class="option" for="edit-notify">
                        Notify me when new comments are posted{" "}
                      </label>
                    </div>
                    <div
                      id="edit-notify-type"
                      class="form-radios"
                      style={{ display: "none" }}
                    >
                      <div class="form-item form-type-radio form-item-notify-type">
                        <input
                          type="radio"
                          id="edit-notify-type-1"
                          name="notify_type"
                          value="1"
                          checked="checked"
                          class="form-radio"
                        />{" "}
                        <label
                          class="option"
                          for="edit-notify-type-1"
                        >
                          All comments{" "}
                        </label>
                      </div>
                      <div class="form-item form-type-radio form-item-notify-type">
                        <input
                          type="radio"
                          id="edit-notify-type-2"
                          name="notify_type"
                          value="2"
                          class="form-radio"
                        />{" "}
                        <label
                          class="option"
                          for="edit-notify-type-2"
                        >
                          Replies to my comment{" "}
                        </label>
                      </div>
                    </div>
                    <div
                      class="form-actions form-wrapper"
                      id="edit-actions"
                    >
                      <input
                        class="btn btn-blue form-submit form-disabled"
                        type="submit"
                        id="edit-submit"
                        name="op"
                        value="Post Comment"
                        disabled="disabled"
                      />
                    </div>
                  </div>
                </form>{" "}
              </div>
            </div>
          </div>
        </GridX>
        {Array(10)
          .fill(1)
          .map(() => (
            <>
              <div class="user-comment comment comment-by-anonymous">
                <div class="comment-body">
                  <div class="name">
                    <span class="username">Luke</span>{" "}
                  </div>
                  <div class="posted-date">
                    Posted on: Tue, 09/27/2022 - 14:23{" "}
                  </div>
                  <div class="field field-name-comment-body field-type-text-long field-label-hidden">
                    <div class="field-items">
                      <div class="field-item even">
                        <p>
                          Will this program build a lot of
                          strength too? Or will it not be good
                          for strength?
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  <ul class="links inline">
                    <li class="comment-reply first last">
                      <a
                        href="/comment/reply/4442/1548725"
                        rel="nofollow"
                      >
                        Reply
                      </a>
                    </li>
                  </ul>{" "}
                </div>
                <div class="comment-footer">
                  <ul class="links inline">
                    <li class="comment-reply first last">
                      <a href="/comment/reply/4442/1548725">
                        reply
                      </a>
                    </li>
                  </ul>{" "}
                </div>
              </div>
              <div class="indented">
                <a id="comment-1548837"></a>
                <div class="user-comment comment">
                  <div class="comment-body">
                    <img
                      class="mns-team-badge"
                      src="https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/mns-team-badge.jpg"
                      alt="M&amp;S Team Badge"
                    />
                    <div class="name">
                      <span class="username">Roger</span>{" "}
                    </div>
                    <div class="posted-date">
                      Posted on: Wed, 09/28/2022 - 21:13{" "}
                    </div>
                    <div class="field field-name-comment-body field-type-text-long field-label-hidden">
                      <div class="field-items">
                        <div class="field-item even">
                          <p>
                            You can get stronger with the reps
                            you're working with. In other words,
                            the weight you use at the end of the
                            10 weeks will be more than what you
                            start with. It may not be the best
                            choice for single rep strength.
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    <ul class="links inline">
                      <li class="comment-reply first last">
                        <a
                          href="/comment/reply/4442/1548837"
                          rel="nofollow"
                        >
                          Reply
                        </a>
                      </li>
                    </ul>{" "}
                  </div>
                  <div class="comment-footer">
                    <ul class="links inline">
                      <li class="comment-reply first last">
                        <a href="/comment/reply/4442/1548837">
                          reply
                        </a>
                      </li>
                    </ul>{" "}
                  </div>
                </div>
              </div>

              <div class="user-comment comment comment-by-anonymous">
                <div class="comment-body">
                  <div class="name">
                    <span class="username">Luke</span>{" "}
                  </div>
                  <div class="posted-date">
                    Posted on: Tue, 09/27/2022 - 14:21{" "}
                  </div>
                  <div class="field field-name-comment-body field-type-text-long field-label-hidden">
                    <div class="field-items">
                      <div class="field-item even">
                        <p>
                          The program only hits 1 muscle group a
                          week. My natural inclination is to
                          think this wouldn't be enough. Will
                          this be plenty though if I use the
                          program? Could I do a muscle group
                          using this program more than once a
                          week or would this be overdoing it?
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  <ul class="links inline">
                    <li class="comment-reply first last">
                      <a
                        href="/comment/reply/4442/1548723"
                        rel="nofollow"
                      >
                        Reply
                      </a>
                    </li>
                  </ul>{" "}
                </div>
                <div class="comment-footer">
                  <ul class="links inline">
                    <li class="comment-reply first last">
                      <a href="/comment/reply/4442/1548723">
                        reply
                      </a>
                    </li>
                  </ul>{" "}
                </div>
              </div>
              <div class="indented">
                <a id="comment-1548091"></a>
                <div class="user-comment comment">
                  <div class="comment-body">
                    <img
                      class="mns-team-badge"
                      src="https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/mns-team-badge.jpg"
                      alt="M&amp;S Team Badge"
                    />
                    <div class="name">
                      <span class="username">Roger</span>{" "}
                    </div>
                    <div class="posted-date">
                      Posted on: Tue, 09/20/2022 - 16:08{" "}
                    </div>
                    <div class="field field-name-comment-body field-type-text-long field-label-hidden">
                      <div class="field-items">
                        <div class="field-item even">
                          <p>Yes you can, Manny. Good luck.</p>
                        </div>
                      </div>
                    </div>{" "}
                    <ul class="links inline">
                      <li class="comment-reply first last">
                        <a
                          href="/comment/reply/4442/1548091"
                          rel="nofollow"
                        >
                          Reply
                        </a>
                      </li>
                    </ul>{" "}
                  </div>
                  <div class="comment-footer">
                    <ul class="links inline">
                      <li class="comment-reply first last">
                        <a href="/comment/reply/4442/1548091">
                          reply
                        </a>
                      </li>
                    </ul>{" "}
                  </div>
                </div>
              </div>
            </>
          ))}

        <div className="btn-wrapper">
          <Button text="View More Comments" isBlue />
        </div>
      </div>
    </MainWrapper>
  );
};
