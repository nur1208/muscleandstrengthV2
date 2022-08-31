import React, { useState } from "react";

export const Item = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <dl id="category-list-id" class="narrow-by-list">
      <dt
        class={isOpen ? "filter-item--active" : ""}
        onClick={() => setIsOpen(!isOpen)}
      >
        Category <span class="caret-down"></span>
      </dt>
      <dd style={{ display: !isOpen ? "none" : "block" }}>
        <ul class="short-list-on show-five-mobile">
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=9&amp;q=Perfect+Sports+">
              <label for="solr_cat_9" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_9"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              Protein (12)
            </a>
          </li>
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=225&amp;q=Perfect+Sports+">
              <label for="solr_cat_225" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_225"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              Stacks &amp; Bundles (9)
            </a>
          </li>
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=262&amp;q=Perfect+Sports+">
              <label for="solr_cat_262" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_262"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              Clearance &amp; Overstock (8)
            </a>
          </li>
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=55&amp;q=Perfect+Sports+">
              <label for="solr_cat_55" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_55"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              Whey Protein Isolate (7)
            </a>
          </li>
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=269&amp;q=Perfect+Sports+">
              <label for="solr_cat_269" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_269"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              Workout Stacks (7)
            </a>
          </li>
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=749&amp;q=Perfect+Sports+">
              <label for="solr_cat_749" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_749"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              Protein Clearance (7)
            </a>
          </li>
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=21&amp;q=Perfect+Sports+">
              <label for="solr_cat_21" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_21"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              Fat Loss (4)
            </a>
          </li>
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=26&amp;q=Perfect+Sports+">
              <label for="solr_cat_26" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_26"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              Pre-Workout (4)
            </a>
          </li>
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=130&amp;q=Perfect+Sports+">
              <label for="solr_cat_130" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_130"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              Thermogenic Fat Burners (3)
            </a>
          </li>
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=22&amp;q=Perfect+Sports+">
              <label for="solr_cat_22" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_22"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              Glutamine (2)
            </a>
          </li>
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=28&amp;q=Perfect+Sports+">
              <label for="solr_cat_28" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_28"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              Mass Gainers (2)
            </a>
          </li>
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=29&amp;q=Perfect+Sports+">
              <label for="solr_cat_29" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_29"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              BCAAs &amp; EAAs (2)
            </a>
          </li>
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=177&amp;q=Perfect+Sports+">
              <label for="solr_cat_177" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_177"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              Health &amp; Wellness (2)
            </a>
          </li>
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=257&amp;q=Perfect+Sports+">
              <label for="solr_cat_257" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_257"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              Muscle Building Stacks (2)
            </a>
          </li>
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=303&amp;q=Perfect+Sports+">
              <label for="solr_cat_303" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_303"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              Immune Support (2)
            </a>
          </li>
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=409&amp;q=Perfect+Sports+">
              <label for="solr_cat_409" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_409"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              Vegan Protein (2)
            </a>
          </li>
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=431&amp;q=Perfect+Sports+">
              <label for="solr_cat_431" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_431"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              Keto (2)
            </a>
          </li>
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=733&amp;q=Perfect+Sports+">
              <label for="solr_cat_733" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_733"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              High Stimulant (2)
            </a>
          </li>
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=734&amp;q=Perfect+Sports+">
              <label for="solr_cat_734" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_734"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              Fat Loss Pre-Workouts (2)
            </a>
          </li>
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=740&amp;q=Perfect+Sports+">
              <label for="solr_cat_740" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_740"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              1000+ Calorie Gainers (2)
            </a>
          </li>
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=57&amp;q=Perfect+Sports+">
              <label for="solr_cat_57" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_57"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              Whey Protein (1)
            </a>
          </li>
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=87&amp;q=Perfect+Sports+">
              <label for="solr_cat_87" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_87"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              Workout Accessories (1)
            </a>
          </li>
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=88&amp;q=Perfect+Sports+">
              <label for="solr_cat_88" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_88"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              Shaker Bottles (1)
            </a>
          </li>
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=89&amp;q=Perfect+Sports+">
              <label for="solr_cat_89" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_89"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              Other Products (1)
            </a>
          </li>
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=167&amp;q=Perfect+Sports+">
              <label for="solr_cat_167" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_167"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              Sexual Health (1)
            </a>
          </li>
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=259&amp;q=Perfect+Sports+">
              <label for="solr_cat_259" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_259"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              Fat Loss Stacks (1)
            </a>
          </li>
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=261&amp;q=Perfect+Sports+">
              <label for="solr_cat_261" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_261"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              Women's Stacks (1)
            </a>
          </li>
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=304&amp;q=Perfect+Sports+">
              <label for="solr_cat_304" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_304"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              Nootropics (1)
            </a>
          </li>
          <li>
            <a href="https://www.muscleandstrength.com/store/search?___store=us&amp;cat=753&amp;q=Perfect+Sports+">
              <label for="solr_cat_753" class="is-hidden">
                Checkbox for option{" "}
              </label>
              <input
                id="solr_cat_753"
                type="checkbox"
                name=""
                value=""
                onchange=""
              />
              Health &amp; Wellness Clearance (1)
            </a>
          </li>
          <button class="show-more cta">Show More +</button>
          <button class="show-less cta">Show Less -</button>
        </ul>
      </dd>
    </dl>
  );
};
