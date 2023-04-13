import React from "react";
import MainLayout from "../layouts/MainLayout";
import { StaticImage } from "gatsby-plugin-image";

const Features = () => {
  return (
    <MainLayout>
      <section className="relative py-32 bg-white overflow-hidden">
        <img
          className="absolute left-0 top-0"
          src="flaro-assets/images/features/elipse.svg"
          alt=""
        />
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center -m-8">
            <div className="w-full md:w-1/2 p-8">
              <h2 className="mb-6 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight">
                Build better customer experiences with Flaro
              </h2>
              <p className="font-sans text-lg text-gray-900 leading-relaxed md:max-w-lg">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.
              </p>
            </div>
            <div className="w-full md:w-1/2 p-8">
              <StaticImage src="../images/feature.png" alt="Feature Image" />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Features;
