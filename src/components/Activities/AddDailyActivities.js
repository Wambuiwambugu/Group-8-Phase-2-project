import React from "react";

// import dietGIF from "../../assets/Diet.gif";
import dietGIF from "../../assets/Diet-lady-green.gif";


function AddDailyActivity({ changeHandler, submitHandler, formData }) {
  const { date, walking, workout, waterintake, sleep } = formData;
  return (
    <div className="rounded-lg ">
      <div className="flex flex-col justify-center max-w-7xl m-auto bg-gray-700 ">
        <div className="text-center pt-6 pb-10 bg-gray-800 text-white ">
          <h1 className="text-2xl font-bold mb-2">Add Your Daily Activity</h1>
          <p className="text-lg">
            Please fill out the form below to record your daily activity:
          </p>
        </div>
      </div>
      <div className="flex justify-center p-10  max-w-7xl m-auto gap-10 md:flex--reverse bg-white ">
        <div>
          <form className="space-y-4" onSubmit={submitHandler}>
            <div>
              <label htmlFor="date" className="font-bold">
                Date:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="border border-gray-300 px-3 py-2 w-full rounded"
                onChange={changeHandler}
                value={date}
                required
              />
            </div>
            <div>
              <label htmlFor="walking" className="font-bold">
                Walking:
              </label>
              <input
                type="number"
                id="walking"
                name="walking"
                placeholder="How many steps did you walk today?"
                className="border border-gray-300 px-3 py-2 w-full rounded"
                onChange={changeHandler}
                value={walking}
              />
            </div>
            <div>
              <label htmlFor="workout" className="font-bold">
                Workout:
              </label>
              <input
                type="number"
                id="workout"
                name="workout"
                placeholder="How many workouts did you do today?"
                className="border border-gray-300 px-3 py-2 w-full rounded"
                onChange={changeHandler}
                value={workout}
              />
            </div>
            <div>
              <label htmlFor="waterIntake" className="font-bold">
                Water Intake:
              </label>
              <input
                type="number"
                id="waterintake"
                name="waterintake"
                placeholder="How much water did you drink today?"
                className="border border-gray-300 px-3 py-2 w-full rounded"
                onChange={changeHandler}
                value={waterintake}
              />
            </div>
            {/* <div>
              <label htmlFor="caloriesConsumed" className="font-bold">
                Calories Consumed:
              </label>
              <input
                type="number"
                id="caloriesConsumed"
                name="caloriesConsumed"
                placeholder="How many calories did you consume today?"
                className="border border-gray-300 px-3 py-2 w-full rounded"
              />
            </div> */}
            <div>
              <label htmlFor="sleepDuration" className="font-bold">
                Sleep Duration:
              </label>
              <input
                type="number"
                id="sleep"
                name="sleep"
                placeholder="How many hours did you sleep last night?"
                className="border border-gray-300 px-3 py-2 w-full rounded text-sm"
                onChange={changeHandler}
                value={sleep}
              />
            </div>
            <button
              type="submit"
              // className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
              // className="bg-green-600 text-white px-4 py-2 mt-4 rounded hover:bg-green-400"
              disabled={
                date === "" ||
                walking === "" ||
                workout === "" ||
                waterintake === "" ||
                sleep === ""
              }
            >
              Save Your Activity
            </button>
          </form>
        </div>
        <div>
          <img src={dietGIF} alt="fitness" />
        </div>
      </div>
    </div>
  );
}

export default AddDailyActivity;
