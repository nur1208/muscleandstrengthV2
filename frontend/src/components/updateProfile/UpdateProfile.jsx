import React, { useState } from "react";
import { MainWrapper } from "./updateProfile.styles";

export const UpdateProfile = () => {
  const [changePassword, setChangePassword] = useState(false);
  return (
    <MainWrapper>
      <h1>Update Profile</h1>
      <div class="basic-form-wrapper">
        <form
          class="edit-form"
          action="https://www.muscleandstrength.com/store/customer/account/editPost/"
          method="post"
          id="form-validate"
          enctype="multipart/form-data"
        >
          <input
            name="form_key"
            type="hidden"
            value="tUFaKo1vtihPxrLt"
          />
          <div class="input-field-wrap">
            <div class="row">
              <div class="register-name row customer-name">
                <div class="input-box name-firstname col-full">
                  <label for="firstname">
                    First Name <span class="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value="md"
                    title="First Name"
                    class="input-text required-entry"
                  />
                </div>
                <div class="input-box name-lastname col-full">
                  <label for="lastname">
                    Last Name <span class="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value="nur"
                    title="Last Name"
                    class="input-text required-entry"
                  />
                </div>
                <div class="input-box name-displayname col-full">
                  <label for="display_name">
                    Display Name <span class="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="display_name"
                    name="display_name"
                    value="md n"
                    title="Display Name"
                    maxlength="20"
                    class="input-text required-entry validate-display-name validate-length minimum-length-3 maximum-length-20"
                  />
                </div>
              </div>{" "}
            </div>
            <div class="section-break">&nbsp;</div>
            <div class="row">
              <div class="input-box col-full">
                <label for="email_address">
                  Email Address <span class="required">*</span>
                </label>
                <input
                  type="text"
                  name="email"
                  id="email_address"
                  value="mdnuur1208@gmail.com"
                  title="Email Address"
                  class="input-text validate-email required-entry"
                />
              </div>
            </div>
            <div class="section-break">&nbsp;</div>
            <div class="row">
              <div class="dob-wrap">
                <label for="month">
                  Date of Birth (get 50 points on your birthday)
                </label>
                <div class="input-box customer-dob">
                  <div class="dob-month">
                    <input
                      placeholder="MM"
                      autocomplete="bday-month"
                      type="text"
                      id="month"
                      name="month"
                      value=""
                      title="Month"
                      class="input-text validate-custom"
                    />
                  </div>
                  <div class="dob-day">
                    <input
                      type="text"
                      placeholder="DD"
                      autocomplete="bday-day"
                      id="day"
                      name="day"
                      value=""
                      title="Day"
                      class="input-text validate-custom"
                    />
                  </div>
                  <div class="dob-year">
                    <input
                      type="text"
                      placeholder="YYYY"
                      autocomplete="off"
                      id="year"
                      name="year"
                      value=""
                      title="Year"
                      class="input-text validate-custom"
                    />
                  </div>{" "}
                  <div
                    class="dob-full"
                    style={{ display: `none` }}
                  >
                    <input type="hidden" id="dob" name="dob" />
                  </div>
                  <div
                    class="validation-advice"
                    style={{ display: `none` }}
                  ></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div>
                <label for="gender">Gender</label>
                <div class="input-box">
                  <select
                    id="register-gender"
                    placeholder="Gender"
                    data-placeholder="Gender"
                    autocomplete="sex"
                    name="gender"
                    title="Gender"
                  >
                    <option value="" disabled="">
                      Gender
                    </option>
                    <option value="24" selected="">
                      Male
                    </option>
                    <option value="25">Female</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="gender-wrap">
                <label for="fitness_goal">Fitness Goal</label>
                <div class="input-box">
                  <select
                    placeholder="Fitness Goal"
                    id="fitness_goal"
                    name="fitness_goal"
                    title="Fitness Goal"
                  >
                    <option value=""></option>
                    <option value="408" selected="selected">
                      Build Muscle
                    </option>
                    <option value="409">Lose Fat</option>
                    <option value="410">
                      Increase Strength
                    </option>
                    <option value="411">
                      Body Transformation
                    </option>
                    <option value="412">Improve Sport</option>
                    <option value="413">Endurance</option>
                    <option value="414">
                      Healthy Lifestyle
                    </option>
                    <option value="415">Contest Prep</option>
                    <option value="416">Other</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="gender-wrap">
                <label for="training_experience">
                  Training Experience
                </label>
                <div class="input-box">
                  <select
                    placeholder="Training Experience"
                    id="training_experience"
                    name="training_experience"
                    title="Training Experience"
                  >
                    <option value=""></option>
                    <option value="558">Beginner</option>
                    <option value="559" selected="selected">
                      Intermediate
                    </option>
                    <option value="560">Advanced</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <label for="current_password">
                Current Password&nbsp;
                <span class="required">*</span>
              </label>
              <div class="input-box col-left">
                <input
                  placeholder="Current Password"
                  type="password"
                  autocomplete="current-password"
                  class="input-text required-entry"
                  name="current_password"
                  id="current_password"
                />
              </div>
            </div>
          </div>
          <div class="input-field-wrap">
            <p style={{ marginTop: "10px" }}>
              <input
                style={{ marginTop: "0" }}
                type="checkbox"
                name="change_password"
                id="change_password"
                value="1"
                onclick="setPasswordForm(this.checked)"
                title="Change Password"
                class="checkbox"
                onClick={() =>
                  setChangePassword(!changePassword)
                }
              />{" "}
              <label for="change_password">
                Change Password
              </label>
            </p>
            <div
              class="change-password-form"
              style={{
                display: changePassword ? "block" : "none",
              }}
            >
              <div class="margBot10 h6 text-center">
                Update Your Password
              </div>
              <div class="section-break">&nbsp;</div>
              <div class="row">
                <label for="password">
                  New Password&nbsp;
                  <span class="required">*</span>
                </label>
                <div class="input-box col-left">
                  <input
                    placeholder="New Password"
                    type="password"
                    autocomplete="new-password"
                    class="input-text validate-password min-pass-length-7"
                    name="password"
                    id="password"
                  />
                  <p
                    class="form-instructions"
                    style={{ fontSize: "x-small" }}
                  >
                    The minimum password length is 7{" "}
                  </p>
                </div>
              </div>
              <div class="row">
                <label for="confirmation">
                  Confirm New Password&nbsp;
                  <span class="required">*</span>
                </label>
                <div class="input-box col-right">
                  <input
                    placeholder="Confirm New Password"
                    type="password"
                    class="input-text validate-cpassword"
                    autocomplete="new-password"
                    name="confirmation"
                    id="confirmation"
                  />
                </div>
              </div>
              <div class="section-break">&nbsp;</div>
            </div>
            <div class="col-full">
              <span class="required font-s-small">
                * Required Fields
              </span>
            </div>
            <div class="section-break">&nbsp;</div>
            <div class="button-wrap">
              <button
                type="submit"
                class="btn btn-blue btn-auto"
              >
                Update Information
              </button>
            </div>
          </div>
        </form>
      </div>
    </MainWrapper>
  );
};
