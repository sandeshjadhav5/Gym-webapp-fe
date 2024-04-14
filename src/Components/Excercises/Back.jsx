import React from "react";
const back = [
  {
    id: 1,
    exercise: "Deadlifts",
    imgUrl: "data:image/jpeg;base64,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",
    description:
      "Deadlifts are a compound exercise targeting the lower back, glutes, hamstrings, and other muscles. They involve lifting a weight from the ground to a standing position.",
  },
  {
    id: 2,
    exercise: "Pull-ups",
    imgUrl: "https://anabolicaliens.com/cdn/shop/articles/199990.png?v=1645089103",
    description:
      "Pull-ups target the latissimus dorsi and other muscles of the back. They are performed by pulling the body up towards a bar from a hanging position.",
  },
  {
    id: 3,
    exercise: "Bent Over Barbell Rows",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4aks77KN4TEp_Dcb0EeQxlK6Z5iiTwCjlAV_ADscjrw&s",
    description:
      "Bent over barbell rows target the upper and middle back muscles. They are performed by bending at the waist and pulling a barbell towards the lower chest.",
  },
  {
    id: 4,
    exercise: "Lat Pulldowns",
    imgUrl: "https://www.inspireusafoundation.org/wp-content/uploads/2022/08/lat-pulldown-machine-exercises.jpg",
    description:
      "Lat pulldowns target the latissimus dorsi and are performed using a cable machine with a wide-grip bar attachment.",
  },
  {
    id: 5,
    exercise: "T-Bar Rows",
    imgUrl: "https://weighttraining.guide/wp-content/uploads/2016/10/lever-t-bar-row-plate-loaded-resized.png",
    description:
      "T-bar rows target the middle and upper back muscles. They are performed by rowing a weighted bar attached to a pivot while bent over.",
  },
  {
    id: 6,
    exercise: "Single-Arm Dumbbell Rows",
    imgUrl: "https://weighttraining.guide/wp-content/uploads/2016/10/bent-over-one-arm-dumbbell-row-resized.png",
    description:
      "Single-arm dumbbell rows target the latissimus dorsi and are performed by rowing a dumbbell towards the hip while supporting the body with the opposite arm and leg on a bench.",
  },
];
const Back = () => {
  return (
    <div>
      {" "}
      <div className="p-10">
        <p className=" text-center m-6 text-2xl font-bold tracking-tight text-red-400 dark:text-white">
          Back Excercises
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {back?.map((exercise) => (
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

export default Back;
