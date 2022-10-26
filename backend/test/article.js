import axios from "axios";

const baseUrl = "http://127.0.0.1:4050";

const mainRoute = "api/v1/articles";

const testGetArticle = async () => {
  const { data } = await axios.get(`${baseUrl}/${mainRoute}`);
  console.log(data);
};

const testGetArticleById = async () => {
  const { data } = await axios.get(
    `${baseUrl}/${mainRoute}/633ef7d802bc5ff7758ad77c`
  );
  console.log(data);
};

const testUpdateArticleById = async () => {
  const body = {
    imgUrl: [
      "https://i.ytimg.com/vi_webp/dGqI0Z5ul4k/maxresdefault.webp",
    ],
  };
  const { data } = await axios.put(
    `${baseUrl}/${mainRoute}/634fad3106bc6e2332aae17b`,
    body
  );
  console.log(data);
};

const testCreateArticle = async () => {
  const articles = [
    {
      href: "https://www.muscleandstrength.com/workouts/10-week-mass-building-program.html",
      imgUrl:
        "https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/10_week_mass_building_program_-_1200x630.jpg?itok=l2JIA-mt",
      imgAlt: "10 Week Mass Building Program For Hardgainers",
      title: "10 Week Mass Building Program",
      shortSummary:
        "This workout is designed to increase your\n                        muscle mass as much as possible in 10\n                        weeks. Works each muscle group hard once\n                        per week using mostly heavy compound\n                        exercises.",
      reads: null,
      comments: null,
      type: "",
      isWorkout: true,
      level: "Advanced",
      forGender: "Male",
      time: "4 Days/Week",
    },
    {
      href: "https://www.muscleandstrength.com/workouts/muscle-and-strength-womens-workout",
      imgUrl:
        "https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/womens_12_week_workout_-_1200x630.jpg?itok=h85OGviC",
      imgAlt:
        "Muscle & Strength’s 12 Week Women’s Workout Program",
      title:
        "Muscle & Strength’s 12 Week\n                          Women’s Workout Program",
      shortSummary:
        "This 12 week women's specific training\n                        program is perfect for any healthy woman\n                        who is looking to transform her body\n                        through a good weight lifting program.",
      reads: null,
      comments: null,
      type: "",
      isWorkout: true,
      level: "Beginner",
      forGender: "Female",
      time: "5 Days/Week",
    },
    {
      href: "https://www.muscleandstrength.com/workouts/12-week-fat-destroyer",
      imgUrl:
        "https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/12_week_fat_destroyer_-_1200x630.jpg?itok=ki1i9dcq",
      imgAlt:
        "12 Week Fat Destroyer: Complete Fat Loss Workout & Diet Program",
      title:
        "12 Week Fat Destroyer: Complete Fat\n                          Loss Workout & Diet Program",
      shortSummary:
        "This is a complete 12 week program to\n                        help you get ripped. Feature includes\n                        detailed diet plan and cardio schedule,\n                        along with a 4 day upper/lower muscle\n                        building split.",
      reads: null,
      comments: null,
      type: "",
      isWorkout: true,
      level: "Beginner",
      forGender: "Male & Female",
      time: "4 Days/Week",
    },
    {
      href: "https://www.muscleandstrength.com/workouts/phul-workout",
      imgUrl:
        "https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/phul_-_1200x630.jpg?itok=LRC9qayO",
      imgAlt: "Power Hypertrophy Upper Lower (P.H.U.L.) Workout",
      title:
        "Power Hypertrophy Upper Lower\n                          (P.H.U.L.) Workout",
      shortSummary:
        "Build both size and strength in this 4\n                        day split based around basic compound\n                        movements. Get the best of both worlds\n                        with bodybuilding and powerlifting.",
      reads: null,
      comments: null,
      type: "",
      isWorkout: true,
      level: "Intermediate",
      forGender: "Male & Female",
      time: "4 Days/Week",
    },
    {
      href: "https://www.muscleandstrength.com/workouts/muscle-and-strength-30-day-womens-workout",
      imgUrl:
        "https://cdn.muscleandstrength.com/sites/default/files/styles/large/public/field/feature-image/workout/30-day-womens-workout-thumb.jpg?itok=ncfTjTXl",
      imgAlt:
        "Muscle & Strength's 30 Day Workout Plan For Women",
      title:
        "Muscle & Strength's 30 Day Workout\n                          Plan For Women",
      shortSummary:
        "Looking for the best place to start\n                        working towards a leaner, solid, and\n                        stronger body? This thorough workout\n                        routine is specifically designed to get\n                        you there!",
      reads: null,
      comments: null,
      type: "",
      isWorkout: true,
      level: "Beginner",
      forGender: "Female",
      time: "6 Days/Week",
    },
    {
      href: "https://www.muscleandstrength.com/workouts/dumbbell-only-home-or-gym-fullbody-workout.html",
      imgUrl:
        "https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/dumbbell_only_full_body_-_1200x630.jpg?itok=7xYFFO9g",
      imgAlt: "Dumbbell Only Home Or Gym Full Body Workout",
      title:
        "Dumbbell Only Home Or Gym Full Body\n                          Workout",
      shortSummary:
        "Short on equipment? No worries! This\n                        dumbbell only workout can be used at home\n                        or in the gym for building muscle mass.\n                        You can also use this as a muscle shock\n                        workout to mix things up.",
      reads: null,
      comments: null,
      type: "",
      isWorkout: true,
      level: "Beginner",
      forGender: "Male",
      time: "3 Days/Week",
    },
  ];

  const { data } = await axios.post(
    `${baseUrl}/${mainRoute}/many`,
    articles
  );
  console.log(data);
};

const main = async () => {
  try {
    await testUpdateArticleById();
  } catch (error) {
    console.log(error);
  }
};

main();
