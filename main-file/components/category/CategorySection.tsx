import React from "react";
import DivAnimateY from "../utils/DivAnimateY";
type Props = {
  style?: string;
};
const CategorySection = ({ style }: Props) => {
  return (
    <section
      className={`top_cat__area section-padding ${style} overflow-hidden`}
      style={{
        backgroundImage: "url(assets/img/bg/shape-1.png)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <DivAnimateY className="container">
        <div className="section-title text-center">
          <h2>Start your journey With us</h2>
          <p>
            We offer a brand new approach to the most basic learning paradigms.
            Choose from a wide range of learning options and gain new skills!
            Our school is know.
          </p>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single_tp">
              <span className="sc_one">01</span>
              <h3>
                Expert <br />
                Teacher
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
                ut labore.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single_tp">
              <span className="sc_two">02</span>
              <h3>
                Quality <br />
                Education
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
                ut labore.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single_tp">
              <span className="sc_three">03</span>
              <h3>
                Remote <br />
                Learning
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
                ut labore.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single_tp">
              <span className="sc_four">04</span>
              <h3>
                Life Time <br />
                Support
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
                ut labore.
              </p>
            </div>
          </div>
        </div>
      </DivAnimateY>
    </section>
  );
};

export default CategorySection;
