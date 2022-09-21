import React from "react";
import { MainWrapper } from "./productFinderAside.styles";

export const ProductFinderAside = () => {
  return (
    <MainWrapper>
      <div class="section-title">Product Finder</div>
      <div class="section-inner-wrap">
        <form
          class="prodFinderForm"
          name="jump_box"
          action="/storejump.php"
          method="post"
        >
          <ul>
            <li>
              <select
                onchange="location.href=this.options[selectedIndex].value.replace('http:', document.location.protocol)"
                name="jump_category"
              >
                <option value="">By Category »</option>
                <option
                  data-custom-class="coupon-select"
                  value="/store/promos.html"
                >
                  ** COUPONS &amp; DEALS **
                </option>
                <option value="/store/category/amino-acids.html">
                  Amino Acids
                </option>
                <option value="/store/category/antioxidants.html">
                  Antioxidants
                </option>
                <option value="/store/category/bcaas.html">
                  BCAAs
                </option>
                <option value="/store/category/bodybuilding-supplies.html">
                  Bodybuilding Supplies
                </option>
                <option value="/store/category/books-and-dvds.html">
                  Books &amp; DVDs
                </option>
                <option value="/store/category/brain-enhancers.html">
                  Brain Enhancers
                </option>
                <option value="/store/category/carbohydrates.html">
                  Carbohydrates
                </option>
                <option value="/store/category/clearance.html">
                  Clearance
                </option>
                <option value="/store/category/clothing.html">
                  Clothing
                </option>
                <option value="/store/category/creatine.html">
                  Creatine
                </option>
                <option value="/store/category/ebooks.html">
                  eBooks
                </option>
                <option value="/store/category/endurance.html">
                  Endurance
                </option>
                <option value="/store/category/energy-boosters.html">
                  Energy Boosters
                </option>
                <option value="/store/category/equipment.html">
                  Equipment
                </option>
                <option value="/store/category/oils-efas.html">
                  Essential Fatty Acids (EFAs)
                </option>
                <option value="/store/category/fat-loss.html">
                  Fat Loss
                </option>
                <option value="/store/category/fish-oil.html">
                  Fish Oil
                </option>
                <option value="/store/category/flax-seed-oil.html">
                  Flax Seed Oil
                </option>
                <option value="/store/category/free-samples.html">
                  Free Samples
                </option>
                <option value="/store/category/glutamine.html">
                  Glutamine
                </option>
                <option value="/store/category/general-health.html">
                  Health &amp; Wellness
                </option>
                <option value="/store/category/intra-workout.html">
                  Intra-Workout
                </option>
                <option value="/store/category/joint-health.html">
                  Joint Health
                </option>
                <option value="/store/category/liver-health.html">
                  Liver Health
                </option>
                <option value="/store/category/meal-replacements.html">
                  Meal Replacements
                </option>
                <option value="/store/category/mood.html">
                  Mood Enhancers
                </option>
                <option value="/store/category/growth-hormone.html">
                  Natural GH Boosters
                </option>
                <option value="/store/category/nitric-oxide.html">
                  Nitric Oxide
                </option>
                <option value="/store/category/other-muscle-builders.html">
                  Other Muscle Builders
                </option>
                <option value="/store/category/other.html">
                  Other Products
                </option>
                <option value="/store/category/post-workout.html">
                  Post-Workout
                </option>
                <option value="/store/category/pre-workout.html">
                  Pre-Workout
                </option>
                <option value="/store/category/protein.html">
                  Protein
                </option>
                <option value="/store/category/ready-to-drink.html">
                  Ready to Drink
                </option>
                <option value="/store/category/recovery.html">
                  Recovery
                </option>
                <option value="/store/category/exclusive-rewards-products.html">
                  Rewards Catalog
                </option>
                <option value="/store/category/sexual-health.html">
                  Sexual Health
                </option>
                <option value="/store/category/sleep.html">
                  Sleep Enhancers
                </option>
                <option value="/store/category/snack-foods.html">
                  Snack Foods
                </option>
                <option value="/store/category/stacks.html">
                  Stacks
                </option>
                <option value="/store/category/stress-reduction.html">
                  Stress Reduction
                </option>
                <option value="/store/category/testosterone.html">
                  Test Boosters
                </option>
                <option value="/store/category/trial-size.html">
                  Trial Size
                </option>
                <option value="/store/category/under-5-dollars.html">
                  Under $5
                </option>
                <option value="/store/category/vitamins-minerals.html">
                  Vitamins &amp; Minerals
                </option>
                <option value="/store/category/weight-gainers.html">
                  Weight Gainers
                </option>
                <option value="/store/category/women.html">
                  Women's Products
                </option>
                <option value="/store/category/accessories.html">
                  Workout Accessories
                </option>
              </select>
            </li>
            <li>
              <select
                onchange="location.href=this.options[selectedIndex].value.replace('http:', document.location.protocol)"
                name="jump_brand"
              >
                <option value="">By Brand »</option>
                <option
                  data-custom-class="select-label"
                  disabled="disabled"
                >
                  Top Brands
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/allmax">
                  AllMax Nutrition
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/bpi-sports">
                  BPI Sports
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/cellucor">
                  Cellucor
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/dymatize">
                  Dymatize
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/force-factor">
                  Force Factor
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/jnx-sports">
                  JNX Sports
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/man">
                  MAN Sports
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/musclepharm">
                  MusclePharm
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/muscletech">
                  MuscleTech
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/now">
                  NOW Foods
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/nutrex">
                  Nutrex
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/perfect-sports">
                  Perfect Sports
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/primeval-labs">
                  Primeval Labs
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/ronnie-coleman-signature-series">
                  Ronnie Coleman Signature Series
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/rule-1">
                  Rule 1
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/usn">
                  USN
                </option>
                <option
                  data-custom-class="select-label"
                  disabled="disabled"
                >
                  All Brands
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/321-glo">
                  321 Glo
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/360-athletics">
                  360 Athletics
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/5-nutrition">
                  5% Nutrition
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/advanced-molecular-labs">
                  Advanced Molecular Labs
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/alani-nu">
                  Alani Nu
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/allmax">
                  AllMax Nutrition
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/american-metabolix">
                  American Metabolix
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/animal">
                  Animal
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/ap-regimen">
                  AP Regimen
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/bada-bean-bada-boom">
                  Bada Bean Bada Boom
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/bang">
                  Bang
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/barebells">
                  Barebells
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/beast">
                  Beast Sports Nutrition
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/better-bodies">
                  Better Bodies
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/better-than-good-foods">
                  Better Than Good Foods
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/sundesa">
                  BlenderBottle
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/bodylogix">
                  Bodylogix
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/bpi-sports">
                  BPI Sports
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/bsn">
                  BSN
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/bucked-up">
                  Bucked Up
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/cellucor">
                  Cellucor
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/ronnie-coleman-athletics">
                  Coleman Athletics
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/concorde">
                  Concorde
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/controlled-labs">
                  Controlled Labs
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/core-nutritionals">
                  Core Nutritionals
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/corefx">
                  COREFX
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/dream-tan">
                  Dream Tan
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/dymatize">
                  Dymatize
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/eat-me-guilt-free">
                  Eat Me Guilt Free
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/eflow-nutrition">
                  eFlow Nutrition
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/redefine-nutrition">
                  Finaflex
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/fitmiss">
                  FitMiss
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/fizzique">
                  Fizzique
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/fnx-sport">
                  FNX Sport
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/force-factor">
                  Force Factor
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/gasp">
                  GASP
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/gaspari-ageless">
                  Gaspari Ageless
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/gaspari-nutrition">
                  Gaspari Nutrition
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/gat">
                  GAT Sport
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/glaxon">
                  Glaxon
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/goli">
                  Goli
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/grenade">
                  Grenade
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/hydracup">
                  Hydracup
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/hydroxycut-supplements">
                  Hydroxycut
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/irwin-naturals">
                  Irwin Naturals
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/isopure">
                  Isopure
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/jacked-factory">
                  Jacked Factory
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/jnx-sports">
                  JNX Sports
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/kaged-muscle">
                  Kaged Muscle
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/legendary-foods">
                  Legendary Foods
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/lenny-and-larrys">
                  Lenny &amp; Larry's
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/magnum-nutraceuticals">
                  Magnum Nutraceuticals
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/man">
                  MAN Sports
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/max-effort-muscle">
                  Max Effort Muscle
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/met-rx">
                  MET-RX
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/mhp">
                  MHP
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/motiv8">
                  Motiv8
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/mpb-snacks">
                  MPB Snacks
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/muscle-strength">
                  Muscle &amp; Strength
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/muscle-beach-nutrition">
                  Muscle Beach Nutrition
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/muscle-gauge-nutrition">
                  Muscle Gauge Nutrition
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/musclemeds">
                  MuscleMeds
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/musclepharm">
                  MusclePharm
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/muscletech">
                  MuscleTech
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/myprotein">
                  Myprotein
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/nla-for-her">
                  NLA For Her
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/nocco">
                  NOCCO
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/now">
                  NOW Foods
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/nutrakey">
                  NutraKey
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/nutrex">
                  Nutrex
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/nutritox">
                  Nutritox
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/nuts-for-protein">
                  Nuts for Protein
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/obvi">
                  Obvi
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/optimum-nutrition">
                  Optimum Nutrition
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/orgain">
                  Orgain
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/perfect-shaker">
                  Perfect Shaker
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/perfect-sports">
                  Perfect Sports
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/bnrg">
                  Power Crunch
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/powerful-nutrition">
                  Powerful Nutrition
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/premier-protein">
                  Premier Protein
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/primeval-labs">
                  Primeval Labs
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/prosupps">
                  ProSupps
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/prosupps-fitness-gear">
                  ProSupps Fitness Gear
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/purely-inspired">
                  Purely Inspired
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/quest-nutrition">
                  Quest Nutrition
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/repp-sports">
                  Repp Sports
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/revolution-nutrition">
                  Revolution Nutrition
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/rivalus">
                  Rival Nutrition
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/ronnie-coleman-signature-series">
                  Ronnie Coleman Signature Series
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/rule-1">
                  Rule 1
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/san">
                  SAN
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/schiek-sports">
                  Schiek Sports
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/scivation">
                  Scivation
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/sender">
                  Sender
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/sinfit">
                  SinFit
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/six-star">
                  Six Star Muscle
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/smartshake">
                  SmartShake
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/spud-inc">
                  Spud Inc.
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/storm">
                  Storm
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/stryve">
                  Stryve
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/stryve-nutrition">
                  Stryve Nutrition
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/swolverine">
                  Swolverine
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/universal-nutrition">
                  Universal Nutrition
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/usn">
                  USN
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/vacadillos">
                  Vacadillos
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/vandella">
                  Vandella Costumes
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/vega">
                  Vega
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/versa-gripps">
                  Versa Gripps
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/xenadrine">
                  Xenadrine
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/xp-sports">
                  XP Sports
                </option>
                <option value="https://www.muscleandstrength.com/store/brands/yourganics-nutrition">
                  Yourganics Nutrition
                </option>
              </select>
            </li>
            <li class="last">
              <select
                onchange="location.href=this.options[selectedIndex].value"
                name="jump_goal"
              >
                <option value="">Choose a Goal »</option>
                <option value="/store/goals/build-muscle">
                  Build Muscle
                </option>
                <option value="/store/goals/lose-fat">
                  Lose Fat
                </option>
                <option value="/store/goals/improve-workout">
                  Improve Workout
                </option>
                <option value="/store/goals/health-wellness">
                  Health &amp; Wellness
                </option>
                <option value="/store/goals/improve-sports">
                  Improve Sports
                </option>
                <option value="/store/goals/increase-energy">
                  Increase Energy
                </option>
              </select>
            </li>
          </ul>
        </form>{" "}
        <div class="quickLinks">
          <a href="/store/promos.html">Deals &amp; Coupons</a> |{" "}
          <a href="/store/samples">Free Samples</a> |{" "}
          <a href="/store/category/stacks.html">
            Supplement Stacks
          </a>
        </div>
      </div>
    </MainWrapper>
  );
};
