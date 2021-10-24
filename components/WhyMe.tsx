import React from "react";
import WhyMeList from "./WhyMeList";

const WhyMe = () => {
  return (
    <section>
      <div className="bg-black text-white text-center h-2/3 py-16">
        <h2 className="uppercase py-16">Why Me?</h2>
        <WhyMeList />
        <div>
          <h3>The Tech I work with</h3>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
