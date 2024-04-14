import React from "react";
const legs = [
  {
    id: 1,
    exercise: "Squats",
    imgUrl: "https://weighttraining.guide/wp-content/uploads/2018/07/Bodyweight-squat-resized.png",
    description:
      "Squats are a compound exercise targeting the quadriceps, hamstrings, glutes, and lower back. They involve bending the knees and hips to lower the body towards the ground.",
  },
  {
    id: 2,
    exercise: "Deadlifts",
    imgUrl: "data:image/jpeg;base64,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",
    description:
      "Deadlifts are a compound exercise targeting the lower back, glutes, hamstrings, and other muscles. They involve lifting a weight from the ground to a standing position.",
  },
  {
    id: 3,
    exercise: "Lunges",
    imgUrl: "https://images.healthshots.com/healthshots/en/uploads/2023/06/02135723/lunges-vs-squats-1600x900.jpg",
    description:
      "Lunges target the quadriceps, hamstrings, and glutes. They are performed by stepping forward or backward and bending the knees to lower the body.",
  },
  {
    id: 4,
    exercise: "Leg Press",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGfWlv8sE6i4pswR10KdEu3g0dPTW3RXwRyrjEnJ1W4A&s",
    description:
      "Leg press is a machine-based exercise that primarily targets the quadriceps, hamstrings, and glutes. It involves pushing a weighted platform away from the body using the legs.",
  },
  {
    id: 5,
    exercise: "Calf Raises",
    imgUrl: "https://pump-app.s3.eu-west-2.amazonaws.com/exercise-assets/13731101-Bodyweight-Standing-Calf-Raise_Calves_small.jpg",
    description:
      "Calf raises target the calf muscles and are performed by raising the heels while standing on a step or platform.",
  },
  {
    id: 6,
    exercise: "Leg Extensions",
    imgUrl: "https://weighttraining.guide/wp-content/uploads/2016/05/lever-leg-extension-resized.png",
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
