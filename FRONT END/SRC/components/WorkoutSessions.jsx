
import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Explore tailored workout sessions for all fitness levels based on your BMI. Get fit and feel great with quick, effective routines that work with your lifestyle.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>

      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Dive into specific workout bootcamps designed to suit your BMI and health goals. These bootcamps help you strengthen, tone, and burn fat, whether you’re just starting out or a seasoned athlete.
        </p>

        <div className="bootcamps">
          {/* Underweight */}
          <div>
            <h4>Underweight (BMI &lt; 18.5): Gain Strength</h4>
            <p>
              A high-calorie diet rich in proteins and healthy fats combined with strength-focused exercises is key. Start with bodyweight squats, push-ups, dumbbell rows, and planks to build muscle mass.
            </p>
          </div>

          {/* Normal Weight */}
          <div>
            <h4>Normal Weight (BMI 18.5 - 24.9): Maintain Fitness</h4>
            <p>
              Maintain your healthy weight with a balanced diet and consistent workouts. Try combining squat-to-press, lunges, and mountain climbers for a 15-minute workout to keep your body in top shape.
            </p>
          </div>

          {/* Overweight */}
          <div>
            <h4>Overweight (BMI 25 - 29.9): Focus on Fat Loss</h4>
            <p>
              Focus on a high-fiber diet and a calorie deficit. Combine bodyweight exercises such as squats, modified push-ups, and cardio movements like jumping jacks to accelerate fat loss while building strength.
            </p>
          </div>

          {/* Obese */}
          <div>
            <h4>Obese (BMI 30 and above): Start with Low Impact</h4>
            <p>
              Follow a portion-controlled, nutrient-dense diet while incorporating low-impact exercises like step-ups, wall push-ups, and seated knee lifts to gradually improve mobility and promote weight loss.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;

