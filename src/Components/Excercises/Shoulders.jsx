import React from "react";
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
const Shoulders = () => {
  return (
    <div>
      {" "}
      <div className="p-10">
        <p className=" text-center m-6 text-2xl font-bold tracking-tight text-red-400 dark:text-white">
          Shoulder Excercises
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {shoulders?.map((exercise) => (
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

export default Shoulders;
