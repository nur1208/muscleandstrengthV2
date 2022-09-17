import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useReduxActions, useUpdateSteps } from "../../hooks";
import { LOCAL_STORAGE_KEYS } from "../../redux/constants";
import { Button } from "../button/Button";

export const AddressForm = ({ isShipping }) => {
  const formType = isShipping
    ? "addressShipping"
    : "addressBilling";
  const {
    userInput: { checkout },
  } = useSelector((state) => state.user_store);

  const [updateStep] = useUpdateSteps();
  const handleNextStep = (e) => {
    e.preventDefault();
    let nextIndex;
    if (!isShipping)
      nextIndex = checkout.use_for_shipping ? 3 : 2;
    else nextIndex = 3;
    updateStep((item, index) =>
      index === nextIndex
        ? { ...item, isActive: true, isAllow: true }
        : {
            ...item,
            isActive: false,
            isAllow:
              // if nextIndex === 3 so update isAllow for index 2
              checkout.use_for_shipping && index === 2
                ? true
                : item.isAllow,
          }
    );
  };

  const { updateField } = useReduxActions();
  const handleOnChange = (e, customValue) => {
    const { name, value } = e.target;
    const updateObj = {};
    if (name === "use_for_shipping") {
      updateObj.use_for_shipping = customValue;
    } else {
      updateObj[formType] = checkout[formType];
      updateObj[formType][name] = value;
    }

    // if (!isShipping)
    //   updateObj[formType]["checkout.use_for_shipping"] =
    //     checkout.use_for_shipping;
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.CHECKOUT,
      JSON.stringify({
        ...checkout,
        ...updateObj,
        steps: undefined,
      })
    );
    // debugger;
    if (checkout.use_for_shipping)
      updateObj["addressShipping"] = !isShipping
        ? {
            ...updateObj["addressBilling"],
          }
        : { ...checkout["addressBilling"] };
    updateField({ checkout: { ...checkout, ...updateObj } });
  };

  const toggleSameAsBilling = (e) =>
    handleOnChange(e, !checkout.use_for_shipping);

  return (
    <form
      id="co-billing-form"
      action=""
      autocomplete="on"
      className="fl-form fl-style-1"
    >
      <fieldset className="group-select">
        <ul>
          <li id="billing-new-address-form">
            <fieldset>
              <legend>New Address</legend>
              <input
                type="hidden"
                name="billing[address_id]"
                value="15991839"
                id="billing:address_id"
              />
              <ul>
                <li>
                  <div className="customer-name">
                    <div className="input-box name-firstname col-left">
                      {/* fl-has-focus */}
                      <div className="fl-wrap fl-wrap-input fl-is-active  fl-is-required">
                        <label
                          for="billing:firstname"
                          className="required fl-label"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="billing:firstname"
                          name="firstName"
                          onChange={handleOnChange}
                          value={checkout[formType]["firstName"]}
                          title="First Name"
                          className="input-text required-entry fl-input validation-passed"
                          autocomplete="given-name"
                          placeholder="First Name"
                          data-placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="input-box name-lastname col-right">
                      <div className="fl-wrap fl-wrap-input fl-is-active fl-is-required">
                        <label
                          for="billing:lastname"
                          className="required fl-label"
                        >
                          Last Name
                        </label>
                        <input
                          onChange={handleOnChange}
                          type="text"
                          id="billing:lastname"
                          name="lastName"
                          value={checkout[formType]["lastName"]}
                          title="Last Name"
                          className="input-text required-entry fl-input validation-passed"
                          autocomplete="family-name"
                          placeholder="Last Name"
                          data-placeholder="Last Name"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="input-box">
                    <div className="fl-wrap fl-wrap-input fl-is-active">
                      <label
                        for="billing:company"
                        className="fl-label"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="billing:company"
                        name="company"
                        autocomplete="billing company"
                        onChange={handleOnChange}
                        value={checkout[formType]["company"]}
                        title="Company"
                        className="input-text fl-input validation-passed"
                        placeholder="Company"
                        data-placeholder="Company"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="input-box billing-country-block">
                    <div className="fl-wrap fl-wrap-select fl-is-active">
                      <label
                        for="billing:country_id"
                        className="required fl-label"
                      >
                        Country
                      </label>
                      <select
                        name="country_id"
                        onChange={handleOnChange}
                        value={checkout[formType]["country_id"]}
                        id="billing:country_id"
                        className="validate-country validate-select fl-select validation-passed"
                        title="Country"
                      >
                        <option value=""> </option>
                        <option value="US" selected="selected">
                          United States
                        </option>
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
                        <option value="AE">
                          United Arab Emirates
                        </option>
                        <option value="GB">
                          United Kingdom
                        </option>
                        <option value="disabled">
                          ──────────
                        </option>
                        <option value="AF">Afghanistan</option>
                        <option value="AL">Albania</option>
                        <option value="DZ">Algeria</option>
                        <option value="AS">
                          American Samoa
                        </option>
                        <option value="AD">Andorra</option>
                        <option value="AO">Angola</option>
                        <option value="AI">Anguilla</option>
                        <option value="AQ">Antarctica</option>
                        <option value="AG">
                          Antigua and Barbuda
                        </option>
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
                        <option value="BA">
                          Bosnia and Herzegovina
                        </option>
                        <option value="BW">Botswana</option>
                        <option value="BV">Bouvet Island</option>
                        <option value="IO">
                          British Indian Ocean Territory
                        </option>
                        <option value="VG">
                          British Virgin Islands
                        </option>
                        <option value="BN">Brunei</option>
                        <option value="BG">Bulgaria</option>
                        <option value="BF">Burkina Faso</option>
                        <option value="BI">Burundi</option>
                        <option value="KH">Cambodia</option>
                        <option value="CM">Cameroon</option>
                        <option value="CV">Cape Verde</option>
                        <option value="KY">
                          Cayman Islands
                        </option>
                        <option value="CF">
                          Central African Republic
                        </option>
                        <option value="TD">Chad</option>
                        <option value="CX">
                          Christmas Island
                        </option>
                        <option value="CC">
                          Cocos (Keeling) Islands
                        </option>
                        <option value="CO">Colombia</option>
                        <option value="KM">Comoros</option>
                        <option value="CG">
                          Congo - Brazzaville
                        </option>
                        <option value="CD">
                          Congo - Kinshasa
                        </option>
                        <option value="CK">Cook Islands</option>
                        <option value="CR">Costa Rica</option>
                        <option value="CU">Cuba</option>
                        <option value="CW">Curaçao</option>
                        <option value="CZ">
                          Czech Republic
                        </option>
                        <option value="CI">Côte d’Ivoire</option>
                        <option value="DK">Denmark</option>
                        <option value="DJ">Djibouti</option>
                        <option value="DM">Dominica</option>
                        <option value="DO">
                          Dominican Republic
                        </option>
                        <option value="EC">Ecuador</option>
                        <option value="SV">El Salvador</option>
                        <option value="GQ">
                          Equatorial Guinea
                        </option>
                        <option value="ER">Eritrea</option>
                        <option value="EE">Estonia</option>
                        <option value="ET">Ethiopia</option>
                        <option value="FK">
                          Falkland Islands
                        </option>
                        <option value="FO">Faroe Islands</option>
                        <option value="FJ">Fiji</option>
                        <option value="GF">French Guiana</option>
                        <option value="PF">
                          French Polynesia
                        </option>
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
                        <option value="HK">
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
                        <option value="MO">
                          Macau SAR China
                        </option>
                        <option value="MK">Macedonia</option>
                        <option value="MG">Madagascar</option>
                        <option value="MW">Malawi</option>
                        <option value="MV">Maldives</option>
                        <option value="ML">Mali</option>
                        <option value="MT">Malta</option>
                        <option value="MH">
                          Marshall Islands
                        </option>
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
                        <option value="MM">
                          Myanmar (Burma)
                        </option>
                        <option value="NA">Namibia</option>
                        <option value="NR">Nauru</option>
                        <option value="NP">Nepal</option>
                        <option value="AN">
                          Netherlands Antilles
                        </option>
                        <option value="NC">New Caledonia</option>
                        <option value="NI">Nicaragua</option>
                        <option value="NE">Niger</option>
                        <option value="NG">Nigeria</option>
                        <option value="NU">Niue</option>
                        <option value="NF">
                          Norfolk Island
                        </option>
                        <option value="KP">North Korea</option>
                        <option value="MP">
                          Northern Mariana Islands
                        </option>
                        <option value="OM">Oman</option>
                        <option value="PW">Palau</option>
                        <option value="PS">
                          Palestinian Territories
                        </option>
                        <option value="PA">Panama</option>
                        <option value="PG">
                          Papua New Guinea
                        </option>
                        <option value="PY">Paraguay</option>
                        <option value="PE">Peru</option>
                        <option value="PH">Philippines</option>
                        <option value="PN">
                          Pitcairn Islands
                        </option>
                        <option value="PL">Poland</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="RO">Romania</option>
                        <option value="RW">Rwanda</option>
                        <option value="RE">Réunion</option>
                        <option value="BL">
                          Saint Barthélemy
                        </option>
                        <option value="SH">Saint Helena</option>
                        <option value="KN">
                          Saint Kitts and Nevis
                        </option>
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
                        <option value="SB">
                          Solomon Islands
                        </option>
                        <option value="SO">Somalia</option>
                        <option value="GS">
                          South Georgia &amp; South Sandwich
                          Islands
                        </option>
                        <option value="KR">South Korea</option>
                        <option value="VC">
                          St. Vincent &amp; Grenadines
                        </option>
                        <option value="SD">Sudan</option>
                        <option value="SR">Suriname</option>
                        <option value="SJ">
                          Svalbard and Jan Mayen
                        </option>
                        <option value="SZ">Swaziland</option>
                        <option value="SY">Syria</option>
                        <option value="ST">
                          São Tomé and Príncipe
                        </option>
                        <option value="TJ">Tajikistan</option>
                        <option value="TZ">Tanzania</option>
                        <option value="TL">Timor-Leste</option>
                        <option value="TG">Togo</option>
                        <option value="TK">Tokelau</option>
                        <option value="TO">Tonga</option>
                        <option value="TT">
                          Trinidad and Tobago
                        </option>
                        <option value="TN">Tunisia</option>
                        <option value="TM">Turkmenistan</option>
                        <option value="TC">
                          Turks and Caicos Islands
                        </option>
                        <option value="TV">Tuvalu</option>
                        <option value="UM">
                          U.S. Outlying Islands
                        </option>
                        <option value="VI">
                          U.S. Virgin Islands
                        </option>
                        <option value="UG">Uganda</option>
                        <option value="UY">Uruguay</option>
                        <option value="UZ">Uzbekistan</option>
                        <option value="VU">Vanuatu</option>
                        <option value="VA">Vatican City</option>
                        <option value="VE">Venezuela</option>
                        <option value="VN">Vietnam</option>
                        <option value="WF">
                          Wallis and Futuna
                        </option>
                        <option value="EH">
                          Western Sahara
                        </option>
                        <option value="YE">Yemen</option>
                        <option value="ZM">Zambia</option>
                        <option value="ZW">Zimbabwe</option>
                        <option value="AX">Åland Islands</option>
                      </select>
                    </div>{" "}
                  </div>
                </li>
                <li>
                  <div className="fl-wrap fl-wrap-input fl-is-active fl-is-required">
                    <label
                      for="billing:street1"
                      className="required fl-label"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      title="Street Address"
                      name="street"
                      onChange={handleOnChange}
                      value={checkout[formType]["street"]}
                      id="billing:street1"
                      autocomplete="off"
                      className="input-text required-entry fl-input pac-target-input validation-passed"
                      aria-required="true"
                      placeholder="Address"
                      data-placeholder="Address"
                    />
                  </div>
                </li>
                <li>
                  <div className="fl-wrap fl-wrap-input fl-is-active">
                    <label
                      for="billing:street2"
                      className="required fl-label"
                    >
                      Address 2
                    </label>
                    <input
                      type="text"
                      title="Street Address 2"
                      name="street_2"
                      autocomplete="billing street-address"
                      id="billing:street2"
                      onChange={handleOnChange}
                      value={checkout[formType]["street_2"]}
                      className="input-text fl-input validation-passed"
                      placeholder="Address 2"
                      data-placeholder="Address 2"
                    />
                  </div>
                </li>
                <li>
                  <div className="input-box">
                    <div className="fl-wrap fl-wrap-input fl-is-active fl-is-required">
                      <label
                        for="billing:city"
                        className="required fl-label"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        title="City"
                        name="city"
                        onChange={handleOnChange}
                        value={checkout[formType]["city"]}
                        className="input-text required-entry fl-input validation-passed"
                        autocomplete="billing address-level2"
                        aria-required="true"
                        id="billing:city"
                        placeholder="City"
                        data-placeholder="City"
                      />
                    </div>
                  </div>
                  <div className="input-box watch-child">
                    <div className="fl-wrap fl-wrap-select fl-is-active fl-is-required">
                      <label
                        for="billing:region_id"
                        className="required fl-label"
                      >
                        State/Province
                      </label>
                      <select
                        id="billing:region_id"
                        name="region_id"
                        onChange={handleOnChange}
                        value={checkout[formType]["region_id"]}
                        title="State/Province"
                        className="validate-select region_id required-entry fl-select validation-passed"
                        autocomplete="billing address-level1"
                        aria-required="true"
                        // style=""
                      >
                        <option value="">State/Province</option>
                        <option value="1">Alabama</option>
                        <option value="2">Alaska</option>
                        <option value="3">American Samoa</option>
                        <option value="4">Arizona</option>
                        <option value="5">Arkansas</option>
                        <option value="6">
                          Armed Forces Africa
                        </option>
                        <option value="7">
                          Armed Forces Americas
                        </option>
                        <option value="8">
                          Armed Forces Canada
                        </option>
                        <option value="9">
                          Armed Forces Europe
                        </option>
                        <option value="10">
                          Armed Forces Middle East
                        </option>
                        <option value="11">
                          Armed Forces Pacific
                        </option>
                        <option value="12">California</option>
                        <option value="13">Colorado</option>
                        <option value="14">Connecticut</option>
                        <option value="15">Delaware</option>
                        <option value="16">
                          District of Columbia
                        </option>
                        <option value="17">
                          Federated States Of Micronesia
                        </option>
                        <option value="18">Florida</option>
                        <option value="19">Georgia</option>
                        <option value="20">Guam</option>
                        <option value="21">Hawaii</option>
                        <option value="22">Idaho</option>
                        <option value="23">Illinois</option>
                        <option value="24">Indiana</option>
                        <option value="25">Iowa</option>
                        <option value="26">Kansas</option>
                        <option value="27">Kentucky</option>
                        <option value="28">Louisiana</option>
                        <option value="29">Maine</option>
                        <option value="30">
                          Marshall Islands
                        </option>
                        <option value="31">Maryland</option>
                        <option value="32">Massachusetts</option>
                        <option value="33">Michigan</option>
                        <option value="34">Minnesota</option>
                        <option value="35">Mississippi</option>
                        <option value="36">Missouri</option>
                        <option value="37">Montana</option>
                        <option value="38">Nebraska</option>
                        <option value="39">Nevada</option>
                        <option value="40">New Hampshire</option>
                        <option value="41">New Jersey</option>
                        <option value="42">New Mexico</option>
                        <option value="43">New York</option>
                        <option value="44">
                          North Carolina
                        </option>
                        <option value="45">North Dakota</option>
                        <option value="46">
                          Northern Mariana Islands
                        </option>
                        <option value="47">Ohio</option>
                        <option value="48">Oklahoma</option>
                        <option value="49">Oregon</option>
                        <option value="50">Palau</option>
                        <option value="51">Pennsylvania</option>
                        <option value="52">Puerto Rico</option>
                        <option value="53">Rhode Island</option>
                        <option value="54">
                          South Carolina
                        </option>
                        <option value="55">South Dakota</option>
                        <option value="56">Tennessee</option>
                        <option value="57">Texas</option>
                        <option value="58">Utah</option>
                        <option value="59">Vermont</option>
                        <option value="60">
                          Virgin Islands
                        </option>
                        <option value="61" selected="selected">
                          Virginia
                        </option>
                        <option value="62">Washington</option>
                        <option value="63">West Virginia</option>
                        <option value="64">Wisconsin</option>
                        <option value="65">Wyoming</option>
                      </select>
                    </div>
                  </div>
                  <div className="input-box watch-child">
                    <div className="fl-wrap fl-wrap-input fl-is-required">
                      <label
                        for="billing:region"
                        className="required fl-label"
                      >
                        Province/Region
                      </label>
                      <input
                        type="text"
                        id="billing:region"
                        name="region"
                        onChange={handleOnChange}
                        value={checkout[formType]["region"]}
                        title="Province/Region"
                        autocomplete="billing address-level1"
                        className="input-text required-entry fl-input validation-passed"
                        aria-required="true"
                        placeholder="Province/Region"
                        style={{ display: "none" }}
                        data-placeholder="Province/Region"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="input-box">
                    <div className="fl-wrap fl-wrap-input fl-is-active fl-is-required">
                      <label
                        for="billing:postcode"
                        className="required fl-label"
                      >
                        Zip/Postal Code
                      </label>
                      <input
                        type="text"
                        title="Zip/Postal Code"
                        name="postcode"
                        onChange={handleOnChange}
                        value={checkout[formType]["postcode"]}
                        id="billing:postcode"
                        autocomplete="billing postal-code"
                        className="input-text validate-postcode validate-zip-international required-entry fl-input validation-passed"
                        aria-required="true"
                        placeholder="Zip/Postal Code"
                        data-placeholder="Zip/Postal Code"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="input-box">
                    <div className="fl-wrap fl-wrap-input fl-is-active">
                      <label
                        for="billing:telephone"
                        className="fl-label"
                      >
                        Telephone
                      </label>
                      <input
                        type="text"
                        name="telephone"
                        onChange={handleOnChange}
                        value={checkout[formType]["telephone"]}
                        title="Telephone"
                        className="input-text fl-input validation-passed"
                        autocomplete="billing tel"
                        id="billing:telephone"
                        placeholder="Telephone"
                        data-placeholder="Telephone"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <input
                    type="hidden"
                    name="billing[save_in_address_book]"
                    value="1"
                  />
                </li>
                {isShipping && (
                  <li>
                    <input
                      type="checkbox"
                      name="use_for_shipping"
                      id="shipping:same_as_billing"
                      // value="1"
                      onClick={toggleSameAsBilling}
                      checked={checkout.use_for_shipping}
                      onclick="shipping.setSameAsBilling(this.checked)"
                      className="checkbox"
                    />
                    <label for="shipping:same_as_billing">
                      Use Billing Address
                    </label>
                  </li>
                )}{" "}
              </ul>
            </fieldset>
          </li>
          <li>
            <p className="required-label">* Required Fields</p>
          </li>
          {!isShipping && (
            <li className="shipto-choice">
              <input
                type="radio"
                name="use_for_shipping"
                // onChange={handleOnChange}
                id="billing:use_for_shipping_yes"
                // value="1"
                onClick={(e) => {
                  // setIsSameAddressShipping(true);
                  handleOnChange(e, true);
                }}
                checked={
                  checkout.use_for_shipping
                    ? "checked"
                    : undefined
                }
                className="radio validation-passed"
              />
              <label for="billing:use_for_shipping_yes">
                Ship to this address
              </label>
              <input
                type="radio"
                name="use_for_shipping"
                id="billing:use_for_shipping_no"
                value="0"
                onClick={(e) => {
                  // setIsSameAddressShipping(false);
                  handleOnChange(e, false);
                }}
                checked={
                  checkout.use_for_shipping
                    ? undefined
                    : "checked"
                }
                className="radio validation-passed"
              />
              <label for="billing:use_for_shipping_no">
                Ship to different address
              </label>
            </li>
          )}
        </ul>
        <div
          className="buttons-set"
          id="billing-buttons-container"
        >
          <Button
            text="Next Step"
            isGreen
            onClick={handleNextStep}
          />
        </div>
        <input
          name="form_key"
          type="hidden"
          value="XFH7z8TBLHR2yYA4"
        />
      </fieldset>
    </form>
  );
};
