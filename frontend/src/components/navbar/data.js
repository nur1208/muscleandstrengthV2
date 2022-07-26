export const navbarData = [
  {
    navbarItemTitle: "Store",
    navbarItemHref: "/store",
    navbarItemIconId: "icon-nav-store-white",
    hasSubmenu: true,
    groups: [
      {
        groupHasSubSubmenu: true,
        groupTitle: "Find Products",
        itemsOfSubItem: [
          {
            hasSubSubmenu: true,
            subItemTitle: "Shop by Category",
            subItemHref: "/store/category",
            subSubMainTitle: "Categories",
            subSubMainHref: "/store/category",
            subSubGroupTitle: "Top Categories",
            itemsOfSubSubItem: [
              {
                suSubItemTitle: "Protein",
                subSubItemHref: "/store/category/protein",
              },
              {
                suSubItemTitle: "Pre-Workout",
                subSubItemHref: "/store/category/pre-workout",
              },
              {
                suSubItemTitle: "Health & Wellness",
                subSubItemHref: "/store/category/general-health",
              },
              {
                suSubItemTitle: "Clothing",
                subSubItemHref: "/store/category/clothing",
              },
              {
                suSubItemTitle: "Functional Foods",
                subSubItemHref:
                  "/store/category/functional-foods",
              },
              {
                suSubItemTitle: "Fat Loss",
                subSubItemHref: "/store/category/fat-loss",
              },
              {
                suSubItemTitle: "Workout Accessories",
                subSubItemHref: "/store/category/accessories",
              },
              {
                suSubItemTitle: "BCAAs & EAAs",
                subSubItemHref: "/store/category/bcaas",
              },
              {
                suSubItemTitle: "Vitamins & Minerals",
                subSubItemHref:
                  "/store/category/vitamins-minerals",
              },
              {
                suSubItemTitle: "Creatine",
                subSubItemHref: "/store/category/creatine",
              },
              {
                suSubItemTitle: "Mass Gainers",
                subSubItemHref: "/store/category/weight-gainers",
              },
              {
                suSubItemTitle: "Test Boosters",
                subSubItemHref: "/store/category/testosterone",
              },
            ],
          },
          {
            hasSubSubmenu: true,
            subItemTitle: "Shop by Brand",
            subItemHref: "/store/brands",
            subSubMainTitle: "Brands",
            subSubMainHref: "/store/brands",
            subSubGroupTitle: "Top Brands",
            itemsOfSubSubItem: [
              {
                suSubItemImageUrl:
                  "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/navigation/brands/brand_muscletech.jpg",
                subSubItemHref: "/store/brands/muscletech",
              },
              {
                suSubItemImageUrl:
                  "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/navigation/brands/brand_primeval-labs.jpg",
                subSubItemHref: "/store/brands/primeval-labs",
              },
              {
                suSubItemImageUrl:
                  "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/navigation/brands/brand_musclepharm.jpg",
                subSubItemHref: "/store/brands/musclepharm",
              },
              {
                suSubItemImageUrl:
                  "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/navigation/brands/brand_now.jpg",
                subSubItemHref: "/store/brands/now",
              },
              {
                suSubItemImageUrl:
                  "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/navigation/brands/brand_force-factor.jpg",
                subSubItemHref: "/store/brands/force-factor",
              },
              {
                suSubItemImageUrl:
                  "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/navigation/brands/brand_allmax.jpg",
                subSubItemHref: "/store/brands/allmax",
              },
              {
                suSubItemImageUrl:
                  "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/navigation/brands/brand_rule-1.jpg",
                subSubItemHref: "/store/brands/rule-1",
              },
              {
                suSubItemImageUrl:
                  "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/navigation/brands/brand_cellucor.jpg",
                subSubItemHref: "/store/brands/cellucor",
              },
              {
                suSubItemImageUrl:
                  "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/navigation/brands/brand_jnx-sports.jpg",
                subSubItemHref: "/store/brands/jnx-sports",
              },
              {
                suSubItemImageUrl:
                  "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/navigation/brands/brand_dymatize.jpg",
                subSubItemHref: "/store/brands/dymatize",
              },
              {
                suSubItemImageUrl:
                  "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/navigation/brands/brand_perfect-sports.jpg",
                subSubItemHref: "/store/brands/perfect-sports",
              },
              {
                suSubItemImageUrl:
                  "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/navigation/brands/brand_bpi-sports.jpg",
                subSubItemHref: "/store/brands/bpi-sports",
              },
            ],
          },
          {
            hasSubSubmenu: true,
            subItemTitle: "Shop by Goal",
            subItemHref: "/store/goals",
            subSubMainTitle: "Goals",
            subSubMainHref: "/store/goals",
            subSubGroupTitle: "Shop by Goal",
            itemsOfSubSubItem: [
              {
                suSubItemTitle: "Build Muscle",
                subSubItemHref: "/store/goals/build-muscle",
              },
              {
                suSubItemTitle: "Lose Fat",
                subSubItemHref: "/store/goals/lose-fat",
              },
              {
                suSubItemTitle: "Improve Workout",
                subSubItemHref: "/store/goals/improve-workout",
              },
              {
                suSubItemTitle: "Health & Wellness",
                subSubItemHref: "/store/goals/health-wellness",
              },
              {
                suSubItemTitle: "Improve Sport",
                subSubItemHref: "/store/goals/improve-sports",
              },
              {
                suSubItemTitle: "Increase Energy",
                subSubItemHref: "/store/goals/increase-energy",
              },
            ],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Stacks & Bundles",
            subItemHref: "/store/category/stacks.html",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Clearance & Overstock",
            subItemHref: "/store/category/clearance.html",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "New Products",
            subItemHref: "/store/new.html",
            itemsOfSubSubItem: [],
          },
        ],
      },
      {
        groupHasSubSubmenu: false,
        groupTitle: "Deals & Rewards",
        itemsOfSubItem: [
          {
            hasSubSubmenu: false,
            subItemTitle: "Deals & Coupons",
            subItemHref: "/store/promos.html",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Muscle & Strength Rewards",
            subItemHref: "/store/rewards",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Rewards Catalog",
            subItemHref: "/store/rewards/catalog",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Bulk Buy Coupons",
            subItemHref: "/store/bulk-buy-coupons",
            itemsOfSubSubItem: [],
          },
        ],
      },
      {
        groupHasSubSubmenu: false,
        groupTitle: "Top Lists",
        itemsOfSubItem: [
          {
            hasSubSubmenu: false,
            subItemTitle: "Top 50 Products",
            subItemHref: "/store/top-sellers",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Top 20 Brands",
            subItemHref: "/store/top-brands",
            itemsOfSubSubItem: [],
          },
        ],
      },
    ],
  },
  {
    navbarItemTitle: "Workouts",
    navbarItemHref: "/workouts",
    navbarItemIconId: "icon-nav-workouts-white",
    hasSubmenu: true,
    groups: [
      {
        groupHasSubSubmenu: false,
        groupTitle: "Popular Workout Categories",
        itemsOfSubItem: [
          {
            hasSubSubmenu: false,
            subItemTitle: "Muscle Building Workouts",
            subItemHref: "/workouts/muscle-building",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Fat Loss Workouts",
            subItemHref: "/workouts/fat-loss",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "At Home Workouts",
            subItemHref: "/workouts/home",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Workouts For Women",
            subItemHref: "/workouts/women",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Workouts For Men",
            subItemHref: "/workouts/men",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "View All",
            subItemHref: "/workouts",
            itemsOfSubSubItem: [],
          },
        ],
      },
      {
        groupHasSubSubmenu: false,
        groupTitle: "Top Workouts",
        itemsOfSubItem: [
          {
            hasSubSubmenu: false,
            subItemTitle: "M&S Full Body Workout",
            subItemHref:
              "/workouts/muscle-strength-full-body-workout-routine",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "12 Week Women's Workout Plan",
            subItemHref:
              "/workouts/muscle-and-strength-womens-workout",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "5 Day Dumbbell Workout",
            subItemHref:
              "/workouts/5-day-dumbbell-only-workout-split",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Push Pull Legs (PPL) Workout",
            subItemHref:
              "/workouts/6-day-powerbuilding-split-meal-plan",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "3 Day Workout Split",
            subItemHref:
              "/workouts/bulldozer-training-3-day-workout-split",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "3 Day Full Body Workout",
            subItemHref: "/workouts/total-package-workout",
            itemsOfSubSubItem: [],
          },
        ],
      },
    ],
  },
  {
    navbarItemTitle: "Articles",
    navbarItemHref: "/articles",
    navbarItemIconId: "icon-nav-expert-guides-white",
    hasSubmenu: true,
    groups: [
      {
        groupHasSubSubmenu: false,
        groupTitle: "Popular Article Categories",
        itemsOfSubItem: [
          {
            hasSubSubmenu: false,
            subItemTitle: "Muscle Building",
            subItemHref: "/articles/muscle-building",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Fat Loss",
            subItemHref: "/articles/fat-loss",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "For Women",
            subItemHref: "/articles/women",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Training",
            subItemHref: "/articles/training",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Nutrition",
            subItemHref: "/articles/nutrition",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Supplements",
            subItemHref: "/articles/supplements",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Motivation",
            subItemHref: "/articles/motivation",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "View All",
            subItemHref: "/articles",
            itemsOfSubSubItem: [],
          },
        ],
      },
    ],
  },
  {
    navbarItemTitle: "Diet Plans",
    navbarItemHref: "/diet-plans",
    navbarItemIconId: "icon-nav-diet-plans-white",
    hasSubmenu: true,
    groups: [
      {
        groupHasSubSubmenu: false,
        groupTitle: "Popular Diet Plans",
        itemsOfSubItem: [
          {
            hasSubSubmenu: false,
            subItemTitle: "Clean Eating",
            subItemHref: "/diet-plans/clean-eating-diet",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "IIFYM & Flexible Dieting",
            subItemHref:
              "/diet-plans/iifym-flexible-dieting-diet",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Keto & Low Carb",
            subItemHref: "/diet-plans/ketogenic-low-carb-diets",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Carb Cycling",
            subItemHref: "/diet-plans/carb-cycling-diet",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Intermittent Fasting",
            subItemHref: "/diet-plans/intermittent-fasting-diet",
            itemsOfSubSubItem: [],
          },
        ],
      },
    ],
  },
  {
    navbarItemTitle: "Exercises Library",
    navbarItemHref: "/exercises",
    navbarItemIconId: "icon-content-transformation-white",
    hasSubmenu: true,
    groups: [
      {
        groupHasSubSubmenu: false,
        groupTitle: "Exercises by Muscle Group",
        itemsOfSubItem: [
          {
            hasSubSubmenu: false,
            subItemTitle: "Chest Exercises",
            subItemHref: "/exercises/chest",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Abs Exercises",
            subItemHref: "/exercises/abs",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Shoulder Exercises",
            subItemHref: "/exercises/shoulders",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Biceps Exercises",
            subItemHref: "/exercises/biceps",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "View All",
            subItemHref: "/exercises",
            itemsOfSubSubItem: [],
          },
        ],
      },
      {
        groupHasSubSubmenu: false,
        groupTitle: "Most Popular Exercises",
        itemsOfSubItem: [
          {
            hasSubSubmenu: false,
            subItemTitle: "Military Press (AKA Overhead Press)",
            subItemHref: "/exercises/military-press.html",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Dumbbell Deadlift",
            subItemHref: "/exercises/dumbbell-deadlift.html",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Arnold Press",
            subItemHref: "/exercises/seated-arnold-press.html",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Dumbbell Laterial Raises",
            subItemHref:
              "/exercises/dumbbell-lateral-raise.html",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Bent Over Rows",
            subItemHref: "/exercises/bent-over-barbell-row.html",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Dumbbell Pullover",
            subItemHref: "/exercises/dumbbell-pullover.html",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle:
              "Stiff Leg Deadlift (AKA Romanian Deadlift)",
            subItemHref:
              "/exercises/stiff-leg-deadlift-aka-romanian-deadlift.html",
            itemsOfSubSubItem: [],
          },
        ],
      },
    ],
  },
  {
    navbarItemTitle: "Recipes",
    navbarItemHref: "/recipes",
    navbarItemIconId: "icon-content-recipe",
    hasSubmenu: true,
    groups: [
      {
        groupHasSubSubmenu: false,
        groupTitle: "Popular Recipe Categories",
        itemsOfSubItem: [
          {
            hasSubSubmenu: false,
            subItemTitle: "Protein Shake Recipes",
            subItemHref: "/recipes/protein-shakes",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Protein Bar Recipes",
            subItemHref: "/recipes/protein-bars",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "High Protein Recipes",
            subItemHref: "/recipes/high-protein",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Low Carb Recipes",
            subItemHref: "/recipes/low-carb",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Vegetarian Recipes",
            subItemHref: "/recipes/vegetarian",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "View All",
            subItemHref: "/recipes",
            itemsOfSubSubItem: [],
          },
        ],
      },
    ],
  },
  {
    navbarItemTitle: "Tools",
    navbarItemHref: "/tools",
    navbarItemIconId: "icon-nav-tools-white",
    hasSubmenu: true,
    groups: [
      {
        groupHasSubSubmenu: false,
        groupTitle: "Popular Tools",
        itemsOfSubItem: [
          {
            hasSubSubmenu: false,
            subItemTitle: "Bench Press Calculator",
            subItemHref: "/tools/bench-press-calculator",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "BMR + Daily Calorie Calculator",
            subItemHref: "/tools/bmr-calculator",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Bodyfat % Calculator",
            subItemHref: "/tools/measure-bodyfat",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Body Measurements Calculator",
            subItemHref: "/tools/ideal-measurements",
            itemsOfSubSubItem: [],
          },
          {
            hasSubSubmenu: false,
            subItemTitle: "Bench Press Max Chart",
            subItemHref: "/tools/bench-press-max-chart",
            itemsOfSubSubItem: [],
          },
        ],
      },
    ],
  },
];
