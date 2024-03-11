import React from "react";
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
const Arms = () => {
  return (
    <div>
      {" "}
      <div className="p-10">
        <p className=" text-center m-6 text-2xl font-bold tracking-tight text-red-400 dark:text-white">
          Arms Excercises
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {arms?.map((exercise) => (
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

export default Arms;
