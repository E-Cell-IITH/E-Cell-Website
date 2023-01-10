import React from "react";
import Image from "next/image";

const First = () => {
  return (
    <div>
      <section className="flex flex-col w-full h-[100vh] py-5 px-5">
        <div className="flex justify-between">
          {/* logo */}
          <div>
            <div className=" h-[3rem] w-[6.5rem] relative">
              <Image src="/ecellLogo.png" layout="fill" objectFit="contain" />
            </div>
          </div>
          {/* menu icon */}
          <div className=""></div>
        </div>
        <div className="flex-grow flex justify-center items-center flex-col">
          <div className="text-center relative">
            <div>
              <h2 className="text-white font-bold text-[3rem] lg:text-[4.25rem] 2xl:text-[6.25rem]">
                E-SUMMIT 2023
              </h2>
            </div>
            <div>
              <h2 className="text-lightBlue font-semibold text-[1.75rem] md:font-bold  md:text-[2.75rem] lg:text-[3.75rem] 2xl:text-[5rem]">
                THE ARDUOUS CARREFOUR
              </h2>
            </div>
          </div>
          <div>
            <button className="text-white border-blue border-2 px-8 py-3 relative top-5 rounded-lg leading-5">
              REGISTER <br></br>
              NOW
            </button>
          </div>
        </div>
        {/* sm section */}
        <div className="flex flex-row justify-between">
          {/* icons */}
          <div className="flex flex-row gap-4 justify-center items-center">
            <div>
              <Image src="/instagram0icon.svg" width={31} height={31}></Image>
            </div>
            <div>
              <Image src="/linkedin-icon.svg" width={27} height={27}></Image>
            </div>
            <div>
              <Image src="/twitter-icon.svg" width={27} height={23}></Image>
            </div>
            <div>
              <Image src="/facebook-icon.svg" width={28} height={28}></Image>
            </div>
            <div>
              <Image src="/youtube-icon.svg" width={35} height={35}></Image>
            </div>
          </div>
          {/* go down button */}
          <div></div>
        </div>
      </section>
      <section className="text-white flex flex-col justify-center items-center px-[3rem] lg:px-0 lg:pb-[4rem]">
        <div className="max-w-[48.75rem] py-[7rem] lg:py-[5rem]">
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-center font-medium text-5xl text-blue">
                ABOUT US
              </h2>
            </div>
            <div>
              <p className="text-offwhite font-medium text-center text-lg lg:text-[1.25rem] leading-8">
                E-Summit is the flagship event of E-Cell IITH which aims to
                bring early entrepreneurs, students, corporates, venture
                capitalists and start-ups with burgeoning ideas from all over
                the country to one platform sharing their entrepreneur ventures
                and wisdom. <br /> <br />
                This summit provides a medium for healthy discussions and
                inculcates an entrepreneurial mindset into minds through a
                plethora of events like debates and panel discussion. We aim to
                provide a competitive environment for start-ups via events like
                Elevator Pitch, Pitch Showdown and many more events to
                commemorate the spirit of entrepreneurship.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 py-[7rem] lg:py-[10rem] lg:pb-0">
            <div>
              <h2 className="text-center font-medium text-5xl text-blue">
                THEME
              </h2>
            </div>
            <div>
              <p className="text-offwhite font-medium text-center text-lg lg:text-[1.25rem] leading-8">
                It has been over a year since the pandemic hit the world. Amidst
                countless challenges and uncertainties, many individuals and
                companies were quite phenomenal, as they succeeded in sustaining
                and reviving their businesses. India has witnessed 28 new
                unicorns just this year, making the total unicorn count go up to
                66! This marks a veritable triumph over the COVID-19 outbreak.
                <br />
                <br />
                With “Exordium of Resurgence” as the theme, our objective is to
                explore the steps and strategies that have helped businesses
                pick up prospects and opportunities for entrepreneurial roles in
                the post COVID era.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default First;
