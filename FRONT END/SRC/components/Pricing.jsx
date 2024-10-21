import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "! 1 MONTH PLAN",
      price: 1000,
      length: 1,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "6 MONTH PLAN",
      price: 6000,
      length: 6,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "12 MONTH PLAN",
      price: 12000,
      length: 12,
    },
  ];
  return (
    <section className="pricing">
      <h1>FITNESS CARE AND DIET PLANS</h1>
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>PACKAGE</h1>
                <h3>Rs {element.price}</h3>
                <p>For {element.length} Months</p>
              </div>
              <div className="description">
                <p>
                  <Check /> DIETICIAN CONSULT
                </p>
                <p>
                  <Check /> All Day Free Training
                </p>
                <p>
                  <Check /> Free EQUIPMENTS
                </p>
                <p>
                  <Check /> Calculated diet plan
                </p>
                <p>
                  <Check /> Workout and Fitness Suggestions
                </p>
                <Link to={"/"}>Fill The Contact</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
