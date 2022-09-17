import React from "react";
import { useSelector } from "react-redux";
import { useReduxActions, useUpdateSteps } from "../../hooks";
import { Button } from "../button/Button";
import { Paypal } from "./checkoutSteps.style";

export const CheckoutMethod = () => {
  const { updateField } = useReduxActions();
  const {
    userInput: { checkout },
  } = useSelector((state) => state.user_store);

  const [updateSteps] = useUpdateSteps();
  const handleContinue = () => {
    updateSteps((item, index) =>
      index === 1
        ? { ...item, isActive: true, isAllow: true }
        : { ...item, isActive: false }
    );
  };
  return (
    <div class="customerLogin">
      <div class="loggedInCustomer">
        <div class="text-center">
          <Button
            text="Continue With M&amp;S Checkout"
            isGreen
            onClick={handleContinue}
          />
        </div>
      </div>
      <div class="express-checkout-options">
        <h4 class="acenter">Or Use an Express Checkout</h4>
        <div class="available-checkouts">
          <Paypal>
            <div class="checkout-button braintree-paypal-express-container">
              <div
                data-paypalexpress="true"
                data-style-layout="vertical"
                data-style-size="responsive"
                data-style-shape="rect"
                data-style-color="gold"
                class="paypal-express-btn checkout paypalbtn-rendered"
                id="paypal_button_627891"
              >
                <div
                  id="zoid-paypal-button-5b531ca0bd"
                  class="paypal-button paypal-button-context-iframe paypal-button-label-paypal paypal-button-size-responsive paypal-button-layout-vertical"
                  data-paypal-smart-button-version="4.0.336"
                  style={{ height: "46px" }}
                >
                  <style></style>
                  <div
                    class="zoid-outlet"
                    style={{
                      height: "46px",
                      transition: "all 0.5s ease-in-out 0.3s",
                    }}
                  >
                    <iframe
                      class="zoid-component-frame zoid-visible"
                      frameborder="0"
                      allowtransparency="true"
                      name="xcomponent__ppbutton__4__pmrhk2leei5cemtcmuytcmzqgy3dqirmej2gczzchirhaylzobqwyllcov2hi33oeiwcey3pnvyg63tfnz2faylsmvxhiir2pmrhezlgei5ce5dpoarh2lbcojsw4zdfojigc4tfnz2ceot3ejzgkzrchirhi33qej6syitqojxxa4zchj5se5dzobsseorcojqxoirmej3gc3dvmurdu6zcmvxhmir2ejyhe33eovrxi2lpnyrcyitdn5ww22luei5gmylmonssyittor4wyzjchj5se3dbpfxxk5bchirhmzlsoruwgylmeiwce43jpjsseorcojsxg4dpnzzws5tfeiwce43imfygkir2ejzgky3ueiwcey3pnrxxeir2ejtw63deeiwce5dbm5wgs3tfei5ceirmejwgcytfnqrduitqmf4xaylmej6syitgovxgi2lom4rdu6zcmfwgy33xmvsceos3luwcezdjonqwy3dpo5swiir2lmrgg4tfmruxiirmejrwc4teeiwcezlmoyrcyitwmvxg23zcluwce4tfnvsw2ytfojswiir2lmrhaylzobqwyis5fqrhezlnmvwwezlsei5hwis7l52hs4dfl5pseorcl5pwm5lomn2gs33ol5pse7l5fqrhaylznvsw45bchj5sex27or4xazk7l4rduis7l5thk3tdoruw63s7l4rh2lbcn5xec5lunbxxe2l2murdu6zcl5pxi6lqmvpv6ir2ejpv6ztvnzrxi2lpnzpv6it5fqrg63sdmfxggzlmei5hwis7l52hs4dfl5pseorcl5pwm5lomn2gs33ol5pse7jmejxw4rlsojxxeir2pmrf6x3upfygkx27ei5cex27mz2w4y3unfxw4x27ej6syiten5wwc2loei5ce53xo4xg25ltmnwgkylomrzxi4tfnztxi2bomnxw2irmejzwk43tnfxw4skeei5ce5ljmrptgmbwgi2tiojtgeyf63lepe3g45dzgzwwu3jcfqrge5luorxw4u3fonzws33ojfcceorcovuwix3gmvswinjugqydims7nvshsntoor4tm3teoercyitsmvxgizlsmvsee5luorxw44zchirhaylzobqwyirmejzxi33smftwkskeei5ce5ljmrpwcnzqgfsdaobugvrf63leoe3g22tzgzxgizjcfqrg2zlumerdu635fqrgk3tbmjwgkttboruxmzkdnbswg23pov2ceotgmfwhgzjmejrwy2lfnz2ceot3puwce43povzggzjchirg2yloovqwyirmejyhezlgmv2gg2cmn5tws3rchjtgc3dtmuwce5lqmrqxizkdnruwk3tuinxw4ztjm52xeylunfxw4ir2orzhkzjmejqxk5diinxwizjchircelbcn5xfezlomrsxeir2pmrf6x3upfygkx27ei5cex27mz2w4y3unfxw4x27ej6syitpnzbwy2ldnmrdu6zcl5pxi6lqmvpv6ir2ejpv6ztvnzrxi2lpnzpv6it5fqrg63ssmvzws6tfei5hwis7l52hs4dfl5pseorcl5pwm5lomn2gs33ol5pse7jmejwg6y3bnrsseorcmvxf6vkteiwce3dpm5ggk5tfnqrduitxmfzg4irmejqxoyljorig64dvobbhe2lem5sseot3ejpv65dzobsv6xzchirf6x3govxgg5djn5xf6xzcpuwcez3forigcz3fkvzgyir2pmrf6x3upfygkx27ei5cex27mz2w4y3unfxw4x27ej6syitumvzxiir2pmrgcy3unfxw4ir2ejrwqzldnnxxk5bcpuwce5ljmqrduirvmi2tgmldmeygezbcfqrhmzlsonuw63rchirdiit5puwcey3infwgirdpnvqws3rchirgq5duobztulzpo53xoltqmf4xaylmfzrw63jcfqrgszbchirdentemvswgzrvmu4selbcmrxw2yljnyrduitior2ha4z2f4xxo53xfzwxk43dnrswc3teon2hezlom52gqltdn5wse7i__"
                      title="PayPal"
                      scrolling="no"
                      allowpaymentrequest="allowpaymentrequest"
                      src="https://www.paypal.com/smart/button?env=production&amp;style.layout=vertical&amp;style.size=responsive&amp;style.shape=rect&amp;style.color=gold&amp;style.tagline=&amp;style.label=paypal&amp;funding.disallowed=credit%2Ccard%2Celv%2Cvenmo&amp;funding.remembered=paypal&amp;domain=www.muscleandstrength.com&amp;sessionID=uid_3062549310_mdy6nty6mjm&amp;buttonSessionID=uid_feed544042_mdy6nty6ndq&amp;renderedButtons=paypal&amp;storageID=uid_a701d0845b_mdq6mjy6nde&amp;locale.x=en_US&amp;logLevel=warn&amp;sdkMeta=eyJ1cmwiOiJodHRwczovL3d3dy5wYXlwYWxvYmplY3RzLmNvbS9hcGkvY2hlY2tvdXQuanM/My43My4xIn0&amp;uid=5b531ca0bd&amp;version=4&amp;xcomponent=1"
                      style={{ backgroundColor: "transparent" }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </Paypal>
          <div>
            <button
              class="checkout-button apple-pay-button-with-text apple-pay-button-black-with-text"
              data-applepay="true"
              style={{ display: "none" }}
            >
              <span class="text">Pay with</span>
              <span class="ap-logo"></span>
            </button>
          </div>
          <div class="braintree-googlepay-express-container">
            <div
              class="checkout-button googlepay-button"
              data-googlepay="true"
            >
              <span class="googlepay-logo"></span>
              <div class="gpay-button-fill">
                <button
                  type="button"
                  aria-label="Google Pay"
                  class="gpay-button black plain short en"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
