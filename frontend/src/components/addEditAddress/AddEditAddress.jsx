import React from "react";
import { Button } from "../button/Button";
import { MainWrapper } from "./addEditAddress.styles";

export const AddEditAddress = () => {
  return (
    <MainWrapper>
      <h1>Add/Edit Address</h1>
      <form
        class="fstyle-one"
        action="https://www.muscleandstrength.com/store/customer/address/formPost/"
        method="post"
        id="form-validate"
      >
        <input
          name="form_key"
          type="hidden"
          value="tUFaKo1vtihPxrLt"
        />
        <input type="hidden" name="success_url" value="" />
        <input type="hidden" name="error_url" value="" />

        <div class="row">
          <div class="customer-name">
            <div class="input-box name-firstname col-left">
              <label for="firstname" class="required">
                First Name{" "}
              </label>
              <input
                placeholder="First Name"
                type="text"
                id="firstname"
                name="firstname"
                value="md"
                title="First Name"
                class="input-text required-entry"
                autocomplete="given-name"
              />
            </div>
            <div class="input-box name-lastname col-right">
              <label for="lastname" class="required">
                Last Name{" "}
              </label>
              <input
                placeholder="Last Name"
                type="text"
                id="lastname"
                name="lastname"
                value="nur"
                title="Last Name"
                class="input-text required-entry"
                autocomplete="family-name"
              />
            </div>
          </div>
        </div>
        <div class="section-break">&nbsp;</div>
        <div class="col-full">
          <input
            placeholder="Company"
            type="text"
            name="company"
            id="company"
            title="Company"
            value=""
            class="input-text"
          />
        </div>
        <div class="section-break">&nbsp;</div>
        <div class="row">
          <div class="input-box col-left">
            <span class="required-tag">*</span>
            <input
              placeholder="Telephone"
              type="text"
              name="telephone"
              value=""
              title="Telephone"
              class="input-text required-entry"
              id="telephone"
            />
          </div>
          <div class="input-box col-right">
            <input
              placeholder="Fax"
              type="text"
              name="fax"
              id="fax"
              title="Fax"
              value=""
              class="input-text"
            />
          </div>
        </div>
        <div class="section-break">&nbsp;</div>
        <div class="row">
          <div class="col-full">
            <span class="required-tag">*</span>
            <input
              placeholder="Address Line 1"
              type="text"
              name="street[]"
              value=""
              title="Street Address"
              id="street_1"
              class="input-text required-entry"
            />
            <input
              placeholder="Address Line 2"
              type="text"
              name="street[]"
              value=""
              title="Street Address 2"
              id="street_2"
              class="input-text"
            />
          </div>
        </div>
        <div class="section-break">&nbsp;</div>
        <div class="row">
          <div class="input-box col-left">
            <span class="required-tag">*</span>
            <input
              placeholder="City"
              type="text"
              name="city"
              value=""
              title="City"
              class="input-text required-entry"
              id="city"
            />
          </div>
          <div class="input-box col-right">
            <span class="required-tag">*</span>
            <select
              id="region_id"
              name="region_id"
              title="State/Province"
              class=""
              style={{ display: "none" }}
            >
              <option value="">
                Please select region, state or province
              </option>
            </select>

            <input
              type="text"
              id="region"
              name="region"
              value=""
              title="State/Province"
              class="input-text"
              //   style=""
            />
          </div>
        </div>
        <div class="section-break">&nbsp;</div>
        <div class="row">
          <div class="input-box col-left">
            <span class="required-tag">*</span>
            <input
              placeholder="Zip/Postal Code"
              type="text"
              name="postcode"
              value=""
              title="Zip/Postal Code"
              id="zip"
              class="input-text validate-zip-international required-entry"
            />
          </div>
          <div class="input-box col-right">
            <span class="required-tag">*</span>
            <select
              name="country_id"
              id="country"
              class="validate-select"
              title="Country"
            >
              <option value=""> </option>
              <option value="US">United States</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
              <option value="BE">Belgium</option>
              <option value="BR">Brazil</option>
              <option value="CA">Canada</option>
              <option value="CL">Chile</option>
              <option value="CN">China</option>
              <option value="HR">Croatia</option>
              <option value="CY">Cyprus</option>
              <option value="EG">Egypt</option>
              <option value="FI">Finland</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
              <option value="GR">Greece</option>
              <option value="IN">India</option>
              <option value="IE">Ireland</option>
              <option value="IL">Israel</option>
              <option value="IT">Italy</option>
              <option value="JP">Japan</option>
              <option value="LV">Latvia</option>
              <option value="LB">Lebanon</option>
              <option value="LT">Lithuania</option>
              <option value="MY">Malaysia</option>
              <option value="MU">Mauritius</option>
              <option value="MX">Mexico</option>
              <option value="MA">Morocco</option>
              <option value="NL">Netherlands</option>
              <option value="NZ">New Zealand</option>
              <option value="NO">Norway</option>
              <option value="PK">Pakistan</option>
              <option value="PT">Portugal</option>
              <option value="QA">Qatar</option>
              <option value="RU">Russia</option>
              <option value="SA">Saudi Arabia</option>
              <option value="SG">Singapore</option>
              <option value="SK">Slovakia</option>
              <option value="ZA">South Africa</option>
              <option value="ES">Spain</option>
              <option value="LK">Sri Lanka</option>
              <option value="SE">Sweden</option>
              <option value="CH">Switzerland</option>
              <option value="TW">Taiwan</option>
              <option value="TH">Thailand</option>
              <option value="TR">Turkey</option>
              <option value="UA">Ukraine</option>
              <option value="AE">United Arab Emirates</option>
              <option value="GB">United Kingdom</option>
              <option value="disabled">──────────</option>
              <option value="AF">Afghanistan</option>
              <option value="AL">Albania</option>
              <option value="DZ">Algeria</option>
              <option value="AS">American Samoa</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguilla</option>
              <option value="AQ">Antarctica</option>
              <option value="AG">Antigua and Barbuda</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AW">Aruba</option>
              <option value="AZ">Azerbaijan</option>
              <option value="BS">Bahamas</option>
              <option value="BH">Bahrain</option>
              <option value="BD">Bangladesh</option>
              <option value="BB">Barbados</option>
              <option value="BY">Belarus</option>
              <option value="BZ">Belize</option>
              <option value="BJ">Benin</option>
              <option value="BM">Bermuda</option>
              <option value="BT">Bhutan</option>
              <option value="BO">Bolivia</option>
              <option value="BA">Bosnia and Herzegovina</option>
              <option value="BW">Botswana</option>
              <option value="BV">Bouvet Island</option>
              <option value="IO">
                British Indian Ocean Territory
              </option>
              <option value="VG">British Virgin Islands</option>
              <option value="BN">Brunei</option>
              <option value="BG">Bulgaria</option>
              <option value="BF">Burkina Faso</option>
              <option value="BI">Burundi</option>
              <option value="KH">Cambodia</option>
              <option value="CM">Cameroon</option>
              <option value="CV">Cape Verde</option>
              <option value="KY">Cayman Islands</option>
              <option value="CF">
                Central African Republic
              </option>
              <option value="TD">Chad</option>
              <option value="CX">Christmas Island</option>
              <option value="CC">Cocos (Keeling) Islands</option>
              <option value="CO">Colombia</option>
              <option value="KM">Comoros</option>
              <option value="CG">Congo - Brazzaville</option>
              <option value="CD">Congo - Kinshasa</option>
              <option value="CK">Cook Islands</option>
              <option value="CR">Costa Rica</option>
              <option value="CU">Cuba</option>
              <option value="CW">Curaçao</option>
              <option value="CZ">Czech Republic</option>
              <option value="CI">Côte d’Ivoire</option>
              <option value="DK">Denmark</option>
              <option value="DJ">Djibouti</option>
              <option value="DM">Dominica</option>
              <option value="DO">Dominican Republic</option>
              <option value="EC">Ecuador</option>
              <option value="SV">El Salvador</option>
              <option value="GQ">Equatorial Guinea</option>
              <option value="ER">Eritrea</option>
              <option value="EE">Estonia</option>
              <option value="ET">Ethiopia</option>
              <option value="FK">Falkland Islands</option>
              <option value="FO">Faroe Islands</option>
              <option value="FJ">Fiji</option>
              <option value="GF">French Guiana</option>
              <option value="PF">French Polynesia</option>
              <option value="TF">
                French Southern Territories
              </option>
              <option value="GA">Gabon</option>
              <option value="GM">Gambia</option>
              <option value="GE">Georgia</option>
              <option value="GH">Ghana</option>
              <option value="GI">Gibraltar</option>
              <option value="GL">Greenland</option>
              <option value="GD">Grenada</option>
              <option value="GP">Guadeloupe</option>
              <option value="GU">Guam</option>
              <option value="GT">Guatemala</option>
              <option value="GG">Guernsey</option>
              <option value="GN">Guinea</option>
              <option value="GW">Guinea-Bissau</option>
              <option value="GY">Guyana</option>
              <option value="HT">Haiti</option>
              <option value="HM">
                Heard &amp; McDonald Islands
              </option>
              <option value="HN">Honduras</option>
              <option value="HK" selected="selected">
                Hong Kong SAR China
              </option>
              <option value="HU">Hungary</option>
              <option value="IS">Iceland</option>
              <option value="ID">Indonesia</option>
              <option value="IR">Iran</option>
              <option value="IQ">Iraq</option>
              <option value="IM">Isle of Man</option>
              <option value="JM">Jamaica</option>
              <option value="JE">Jersey</option>
              <option value="JO">Jordan</option>
              <option value="KZ">Kazakhstan</option>
              <option value="KE">Kenya</option>
              <option value="KI">Kiribati</option>
              <option value="KW">Kuwait</option>
              <option value="KG">Kyrgyzstan</option>
              <option value="LA">Laos</option>
              <option value="LS">Lesotho</option>
              <option value="LR">Liberia</option>
              <option value="LY">Libya</option>
              <option value="LI">Liechtenstein</option>
              <option value="LU">Luxembourg</option>
              <option value="MO">Macau SAR China</option>
              <option value="MK">Macedonia</option>
              <option value="MG">Madagascar</option>
              <option value="MW">Malawi</option>
              <option value="MV">Maldives</option>
              <option value="ML">Mali</option>
              <option value="MT">Malta</option>
              <option value="MH">Marshall Islands</option>
              <option value="MQ">Martinique</option>
              <option value="MR">Mauritania</option>
              <option value="YT">Mayotte</option>
              <option value="FM">Micronesia</option>
              <option value="MD">Moldova</option>
              <option value="MC">Monaco</option>
              <option value="MN">Mongolia</option>
              <option value="ME">Montenegro</option>
              <option value="MS">Montserrat</option>
              <option value="MZ">Mozambique</option>
              <option value="MM">Myanmar (Burma)</option>
              <option value="NA">Namibia</option>
              <option value="NR">Nauru</option>
              <option value="NP">Nepal</option>
              <option value="AN">Netherlands Antilles</option>
              <option value="NC">New Caledonia</option>
              <option value="NI">Nicaragua</option>
              <option value="NE">Niger</option>
              <option value="NG">Nigeria</option>
              <option value="NU">Niue</option>
              <option value="NF">Norfolk Island</option>
              <option value="KP">North Korea</option>
              <option value="MP">
                Northern Mariana Islands
              </option>
              <option value="OM">Oman</option>
              <option value="PW">Palau</option>
              <option value="PS">Palestinian Territories</option>
              <option value="PA">Panama</option>
              <option value="PG">Papua New Guinea</option>
              <option value="PY">Paraguay</option>
              <option value="PE">Peru</option>
              <option value="PH">Philippines</option>
              <option value="PN">Pitcairn Islands</option>
              <option value="PL">Poland</option>
              <option value="PR">Puerto Rico</option>
              <option value="RO">Romania</option>
              <option value="RW">Rwanda</option>
              <option value="RE">Réunion</option>
              <option value="BL">Saint Barthélemy</option>
              <option value="SH">Saint Helena</option>
              <option value="KN">Saint Kitts and Nevis</option>
              <option value="LC">Saint Lucia</option>
              <option value="MF">Saint Martin</option>
              <option value="PM">
                Saint Pierre and Miquelon
              </option>
              <option value="WS">Samoa</option>
              <option value="SM">San Marino</option>
              <option value="SN">Senegal</option>
              <option value="RS">Serbia</option>
              <option value="SC">Seychelles</option>
              <option value="SL">Sierra Leone</option>
              <option value="SI">Slovenia</option>
              <option value="SB">Solomon Islands</option>
              <option value="SO">Somalia</option>
              <option value="GS">
                South Georgia &amp; South Sandwich Islands
              </option>
              <option value="KR">South Korea</option>
              <option value="VC">
                St. Vincent &amp; Grenadines
              </option>
              <option value="SD">Sudan</option>
              <option value="SR">Suriname</option>
              <option value="SJ">Svalbard and Jan Mayen</option>
              <option value="SZ">Swaziland</option>
              <option value="SY">Syria</option>
              <option value="ST">São Tomé and Príncipe</option>
              <option value="TJ">Tajikistan</option>
              <option value="TZ">Tanzania</option>
              <option value="TL">Timor-Leste</option>
              <option value="TG">Togo</option>
              <option value="TK">Tokelau</option>
              <option value="TO">Tonga</option>
              <option value="TT">Trinidad and Tobago</option>
              <option value="TN">Tunisia</option>
              <option value="TM">Turkmenistan</option>
              <option value="TC">
                Turks and Caicos Islands
              </option>
              <option value="TV">Tuvalu</option>
              <option value="UM">U.S. Outlying Islands</option>
              <option value="VI">U.S. Virgin Islands</option>
              <option value="UG">Uganda</option>
              <option value="UY">Uruguay</option>
              <option value="UZ">Uzbekistan</option>
              <option value="VU">Vanuatu</option>
              <option value="VA">Vatican City</option>
              <option value="VE">Venezuela</option>
              <option value="VN">Vietnam</option>
              <option value="WF">Wallis and Futuna</option>
              <option value="EH">Western Sahara</option>
              <option value="YE">Yemen</option>
              <option value="ZM">Zambia</option>
              <option value="ZW">Zimbabwe</option>
              <option value="AX">Åland Islands</option>
            </select>{" "}
          </div>
        </div>
        <div class="section-break">&nbsp;</div>
        <div class="row">
          <input
            type="hidden"
            name="default_billing"
            value="1"
          />
        </div>
        <div class="section-break">&nbsp;</div>
        <div class="row">
          <input
            type="hidden"
            name="default_shipping"
            value="1"
          />
        </div>
        <div class="section-break">&nbsp;</div>
        <div class="col-full">
          <span class="required font-s-small">
            * Required Fields
          </span>
        </div>
        <Button isBlue text="Save Information" />
      </form>
    </MainWrapper>
  );
};
