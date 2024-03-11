import React from "react";
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
const Chest = () => {
  return (
    <div>
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

export default Chest;
