import React from "react";
import MainLayout from "../layouts/MainLayout";

const about = () => {
  return (
    <MainLayout>
      <section class="px-4 py-24 mx-auto max-w-7xl">
        <div class="w-full mx-auto text-left md:w-3/5 lg:w-2/5 md:text-center">
           
          <h1 class="mb-6 text-xl font-bold text-gray-900 md:leading-tight md:text-3xl">
            This website is created using GatsbyJS framework.
          </h1>
          <p class="mb-6 text-xs font-bold tracking-widest text-orange-900 uppercase">
            Itsmepiyush.dev
          </p>
          
        </div>
      </section>
    </MainLayout>
  );
};

export default about;
