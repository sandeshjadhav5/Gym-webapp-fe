import React from "react";
import Navbar from "../Components/Navbar";

const chest = [
  {
    id: 1,
    exercise: "Barbell Bench Press",
    imgUrl: "https://s3assets.skimble.com/assets/2289486/image_iphone.jpg",
    description:
      "The barbell bench press is a classic compound exercise that targets the chest, shoulders, and triceps. It's performed by lying flat on a bench, lowering a weighted barbell to the chest, and then pressing it back up.",
  },
  {
    id: 2,
    exercise: "Dumbbell Flyes",
    imgUrl:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/1*TphKGBzt13KtJ0YqBUCf3g.png",
    description:
      "Dumbbell flyes primarily target the chest muscles and are performed by lying on a bench with dumbbells in hand, lowering the arms to the sides, and then raising them back up.",
  },
  {
    id: 3,
    exercise: "Incline Barbell Bench Press",
    imgUrl:
      "https://image.myupchar.com/9694/webp/incline-bench-press-benefits-types-technique.webp",
    description:
      "Similar to the barbell bench press, but performed on an inclined bench. This variation targets the upper chest muscles.",
  },
  {
    id: 4,
    exercise: "Decline Bench Press",
    imgUrl:
      "https://static.strengthlevel.com/images/illustrations/decline-bench-press-1000x1000.jpg",
    description:
      "Performed on a decline bench, this exercise targets the lower portion of the chest muscles.",
  },
  {
    id: 5,
    exercise: "Chest Dips",
    imgUrl:
      "https://fitnessvolt.com/wp-content/uploads/2015/08/dips-workout.png",
    description:
      "Chest dips are an advanced bodyweight exercise that primarily targets the chest muscles. They are performed by lowering and raising the body using parallel bars.",
  },
  {
    id: 6,
    exercise: "Cable Crossover",
    imgUrl:
      "https://sporium.net/wp-content/uploads/2020/11/Cable-Crossover-nereyi-calistirir.jpg",
    description:
      "The cable crossover is a chest isolation exercise performed with a cable machine. It involves crossing the hands over the body while keeping the arms slightly bent.",
  },
];

const shoulders = [
  {
    id: 1,
    exercise: "Seated Dumbbell Press",
    imgUrl: "https://www.example.com/seated_dumbbell_press.jpg",
    description:
      "Seated dumbbell press targets the shoulders and triceps. It's performed by sitting on a bench and pressing dumbbells overhead.",
  },
  {
    id: 2,
    exercise: "Arnold Press",
    imgUrl: "https://www.example.com/arnold_press.jpg",
    description:
      "The Arnold press is a shoulder exercise named after Arnold Schwarzenegger. It's performed by pressing dumbbells overhead while rotating the palms during the movement.",
  },
  {
    id: 3,
    exercise: "Lateral Raises",
    imgUrl: "https://www.example.com/lateral_raises.jpg",
    description:
      "Lateral raises target the lateral deltoids and are performed by raising the arms laterally against resistance.",
  },
  {
    id: 4,
    exercise: "Front Dumbbell Raises",
    imgUrl: "https://www.example.com/front_dumbbell_raises.jpg",
    description:
      "Front dumbbell raises primarily target the front deltoids. They are performed by raising dumbbells in front of the body.",
  },
  {
    id: 5,
    exercise: "Barbell Shrugs",
    imgUrl: "https://www.example.com/barbell_shrugs.jpg",
    description:
      "Barbell shrugs target the trapezius muscles and are performed by lifting the shoulders as high as possible while holding a barbell.",
  },
  {
    id: 6,
    exercise: "Face Pulls",
    imgUrl: "https://www.example.com/face_pulls.jpg",
    description:
      "Face pulls are a shoulder exercise that also targets the rear deltoids and upper back. They are performed by pulling a rope attachment towards the face at eye level.",
  },
];

const arms = [
  {
    id: 1,
    exercise: "Barbell Bicep Curl",
    imgUrl: "https://www.example.com/barbell_bicep_curl.jpg",
    description:
      "Barbell bicep curls target the biceps brachii and are performed by curling a barbell towards the shoulders.",
  },
  {
    id: 2,
    exercise: "Dumbbell Hammer Curl",
    imgUrl: "https://www.example.com/dumbbell_hammer_curl.jpg",
    description:
      "Dumbbell hammer curls target the biceps and forearms. They are performed by curling dumbbells with a neutral grip.",
  },
  {
    id: 3,
    exercise: "Tricep Pushdown",
    imgUrl: "https://www.example.com/tricep_pushdown.jpg",
    description:
      "Tricep pushdowns target the triceps and are performed using a cable machine with a straight or angled bar attachment.",
  },
  {
    id: 4,
    exercise: "Skull Crushers",
    imgUrl: "https://www.example.com/skull_crushers.jpg",
    description:
      "Skull crushers, also known as lying tricep extensions, target the triceps. They are performed by lowering a barbell or dumbbells towards the forehead.",
  },
  {
    id: 5,
    exercise: "Preacher Curls",
    imgUrl: "https://www.example.com/preacher_curls.jpg",
    description:
      "Preacher curls target the biceps and are performed using a preacher bench with an EZ bar or dumbbells.",
  },
  {
    id: 6,
    exercise: "Tricep Dumbbell Kickbacks",
    imgUrl: "https://www.example.com/tricep_dumbbell_kickbacks.jpg",
    description:
      "Tricep dumbbell kickbacks target the triceps and are performed by extending the arm back while holding a dumbbell.",
  },
];

const back = [
  {
    id: 1,
    exercise: "Deadlifts",
    imgUrl: "https://www.example.com/deadlifts.jpg",
    description:
      "Deadlifts are a compound exercise targeting the lower back, glutes, hamstrings, and other muscles. They involve lifting a weight from the ground to a standing position.",
  },
  {
    id: 2,
    exercise: "Pull-ups",
    imgUrl: "https://www.example.com/pull_ups.jpg",
    description:
      "Pull-ups target the latissimus dorsi and other muscles of the back. They are performed by pulling the body up towards a bar from a hanging position.",
  },
  {
    id: 3,
    exercise: "Bent Over Barbell Rows",
    imgUrl: "https://www.example.com/bent_over_barbell_rows.jpg",
    description:
      "Bent over barbell rows target the upper and middle back muscles. They are performed by bending at the waist and pulling a barbell towards the lower chest.",
  },
  {
    id: 4,
    exercise: "Lat Pulldowns",
    imgUrl: "https://www.example.com/lat_pulldowns.jpg",
    description:
      "Lat pulldowns target the latissimus dorsi and are performed using a cable machine with a wide-grip bar attachment.",
  },
  {
    id: 5,
    exercise: "T-Bar Rows",
    imgUrl: "https://www.example.com/t_bar_rows.jpg",
    description:
      "T-bar rows target the middle and upper back muscles. They are performed by rowing a weighted bar attached to a pivot while bent over.",
  },
  {
    id: 6,
    exercise: "Single-Arm Dumbbell Rows",
    imgUrl: "https://www.example.com/single_arm_dumbbell_rows.jpg",
    description:
      "Single-arm dumbbell rows target the latissimus dorsi and are performed by rowing a dumbbell towards the hip while supporting the body with the opposite arm and leg on a bench.",
  },
];

const legs = [
  {
    id: 1,
    exercise: "Squats",
    imgUrl: "https://www.example.com/squats.jpg",
    description:
      "Squats are a compound exercise targeting the quadriceps, hamstrings, glutes, and lower back. They involve bending the knees and hips to lower the body towards the ground.",
  },
  {
    id: 2,
    exercise: "Deadlifts",
    imgUrl: "https://www.example.com/deadlifts.jpg",
    description:
      "Deadlifts are a compound exercise targeting the lower back, glutes, hamstrings, and other muscles. They involve lifting a weight from the ground to a standing position.",
  },
  {
    id: 3,
    exercise: "Lunges",
    imgUrl: "https://www.example.com/lunges.jpg",
    description:
      "Lunges target the quadriceps, hamstrings, and glutes. They are performed by stepping forward or backward and bending the knees to lower the body.",
  },
  {
    id: 4,
    exercise: "Leg Press",
    imgUrl: "https://www.example.com/leg_press.jpg",
    description:
      "Leg press is a machine-based exercise that primarily targets the quadriceps, hamstrings, and glutes. It involves pushing a weighted platform away from the body using the legs.",
  },
  {
    id: 5,
    exercise: "Calf Raises",
    imgUrl: "https://www.example.com/calf_raises.jpg",
    description:
      "Calf raises target the calf muscles and are performed by raising the heels while standing on a step or platform.",
  },
  {
    id: 6,
    exercise: "Leg Extensions",
    imgUrl: "https://www.example.com/leg_extensions.jpg",
    description:
      "Leg extensions primarily target the quadriceps and are performed using a machine with a padded lever.",
  },
];
const Excercises = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="p-10">
        <p className=" text-center m-6 text-2xl font-bold tracking-tight text-red-400 dark:text-white">
          Chest Excercises
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {chest.map((exercise) => (
            <div
              key={exercise.id}
              className="max-w-sm bg-red-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                className="rounded-t-lg w-full h-64 object-cover"
                src={exercise.imgUrl}
                alt={exercise.exercise}
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {exercise.exercise}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {exercise.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Excercises;
