import React from "react";
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
const Legs = () => {
  return (
    <div>
      {" "}
      <div className="p-10">
        <p className=" text-center m-6 text-2xl font-bold tracking-tight text-red-400 dark:text-white">
          Chest Excercises
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {legs?.map((exercise) => (
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

export default Legs;
