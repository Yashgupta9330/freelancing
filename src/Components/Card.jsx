import React, { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import Group8301 from "../assets/Group8301.png";
import Group8303 from "../assets/Group8303.png";
import Group8302 from "../assets/Group8302.png";
import Group8304 from "../assets/Group8304.png";
import Iphones from "../assets/Iphones.png";
import iPhone from "../assets/iPhone.png";

export default function Card() {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();

  const [viewed1, setViewed1] = useState(false);
  const [viewed2, setViewed2] = useState(false);
  const [viewed3, setViewed3] = useState(false);
  const [viewed4, setViewed4] = useState(false);

  useEffect(() => {
    if (inView1 && !viewed1) {
      setViewed1(true);
    }
    if (inView2 && !viewed2) {
      setViewed2(true);
    }
    if (inView3 && !viewed3) {
      setViewed3(true);
    }
    if (inView4 && !viewed4) {
      setViewed4(true);
    }
  }, [inView1, inView2, inView3, inView4, viewed1, viewed2, viewed3, viewed4]);

  return (
    <div className="md:max-w-[1104px] w-[95%] flex flex-col items-center justify-center gap-32 md:gap-16 lg:gap-32">
  {/* First Card */}
  <div className="md:w-full w-[95%] flex flex-col md:flex-row md:items-center justify-start items-start md:justify-between gap-12 mt-12">
    <div ref={ref1} className="flex-grow md:w-1/2 pl-4 md:px-0 text-[#20294C]">
      {viewed1 && (
        <div>
          <TypeAnimation
            sequence={["AI-Powered Knowledge Retrieval", 1000]}
            cursor={true}
            className="font-semibold text-4xl lg:text-6xl py-2 lg:py-5 leading-30 lg:leading-60 tracking-[-1.92px]"
            style={{
              whiteSpace: "pre-line",
              display: "block",
              fontFamily: "Source Code Pro, monospace",
            }}
            omitDeletionAnimation={true}
          />
          <p
            data-aos="fade-up"
            data-aos-delay={viewed1 ? 1000 : 0}
            data-aos-once="true"
            className="py-2 px-2 lg:py-5 font-regular text-xl lg:text-2xl leading-9 md:text-left font-inter"
          >
            Nikaru harnesses the power of AI to decode handwritten notes,
            decipher complex passages, and provide instant answers.
          </p>
        </div>
      )}
    </div>
    {viewed1 && (
      <div className="w-full sm:w-[80%] md:w-[50%] min-h-[250px] sm:min-h-[400px] lg:min-h-[370px] relative px-2 py-2">
        <div className="absolute left-0 top-[10%] md:top-0 lg:top-[30%] xl:top-[20%] translate-y-1/2" data-aos="fade-left" data-aos-duration="1000">
          <img src={Group8301} alt="Group" className="w-full"  data-aos-once="true" />
        </div>
        <div className="absolute left-1/2 top-[-10%] md:top-[20%] lg:top-[10%] xl:top-[-10%]" data-aos="fade-up" data-aos-duration="1000">
          <img src={Iphones} alt="iPhones" className="w-[250px] z-[100]"  data-aos-once="true" />
        </div>
      </div>
    )}
  </div>

  {/* Second Card */}
  <div className="flex flex-col md:flex-row-reverse items-center justify-center md:justify-between w-[95%] gap-12">
    <div ref={ref2} className="flex-grow md:w-1/2 pl-4 md:px-0 text-[#20294C]">
      {viewed2 && (
        <div>
          <TypeAnimation
            sequence={["Global Reach,Local Understanding", 1000]}
            cursor={true}
            className="font-semibold text-4xl lg:text-6xl py-2 lg:py-5 leading-30 lg:leading-60 tracking-[-1.92px]"
            style={{
              whiteSpace: "pre-line",
              display: "block",
              fontFamily: "Source Code Pro, monospace",
            }}
            omitDeletionAnimation={true}
          />
          <p
            data-aos="fade-up"
            data-aos-delay={viewed2 ? 1000 : 0}
            data-aos-once="true"
            className="py-2 lg:py-5 font-regular text-xl lg:text-2xl leading-9 text-left font-inter"
          >
            Nikaru breaks language barriers with its multilingual support,
            ensuring that users can access answers and insights in their
            preferred language, regardless of location or linguistic
            background.
          </p>
        </div>
      )}
    </div>
    {viewed2 && (
      <div className="w-full sm:w-[80%] md:w-[50%] min-h-[250px] sm:min-h-[400px] lg:min-h-[370px] relative px-2 py-2">
        <div className="absolute left-0 top-[10%] md:top-[40%] lg:top-[30%] xl:top-[20%] translate-y-1/2" data-aos="fade-right" data-aos-duration="1000">
          <img src={Group8304} alt="Group" className="w-full" data-aos-once="true" />
        </div>
        <div className="absolute left-1/2 top-[-10%] md:top-[20%] lg:top-[10%] xl:top-[-10%]" data-aos="fade-up" data-aos-duration="1000">
          <img src={Iphones} alt="iPhones" className="w-[250px] z-[100]" data-aos-once="true" />
        </div>
      </div>
    )}
  </div>

  {/* Third Card */}
  <div className="flex flex-col md:flex-row sm:items-center justify-center md:justify-between w-[95%] gap-16">
    <div ref={ref3}>
      {viewed3 && (
        <div className="pl-4 md:px-0 flex flex-col md:w-[544px] text-[#20294C]">
          <TypeAnimation
            sequence={["Real-Time Insights", 1000]}
            cursor={true}
            className="font-semibold text-4xl lg:text-6xl py-2 lg:py-5 leading-30 lg:leading-60 tracking-[-1.92px]"
            style={{
              whiteSpace: "pre-line",
              display: "block",
              fontFamily: "Source Code Pro, monospace",
            }}
            omitDeletionAnimation={true}
          />
          <p
            data-aos="fade-up"
            data-aos-delay={viewed3 ? 1000 : 0}
            data-aos-once="true"
            className="py-2 md:py-5 font-regular text-xl lg:text-2xl leading-9 text-left font-inter"
          >
            Stay current with Nikaru, offering instant access to the latest
            knowledge from across the web, ensuring you're always
            up-to-date.
            {/* <span className='text-xs'> friend you never had.</span> */}
          </p>
        </div>
      )}
    </div>
   {viewed3 && <div
      data-aos="fade-left"
      data-aos-duration="1000"
      className="px-4"
    >
      <img src={Group8303} alt="image-3" className="w-[557px]" data-aos-once="true" />
    </div> }
  </div>

  {/* Fourth Card */}
  <div className="flex flex-col md:flex-row-reverse items-center justify-center md:justify-between w-[95%] gap-12 md:mb-16">
    <div ref={ref4} className="flex-grow md:w-1/2 pl-4 md:px-0 text-[#20294C]">
      {viewed4 && (
        <div>
          <TypeAnimation
            sequence={["Engage and Explore", 1000]}
            cursor={true}
            className="font-semibold text-4xl lg:text-6xl py-2 lg:py-5 leading-30 lg:leading-60 tracking-[-1.92px]"
            style={{
              whiteSpace: "pre-line",
              display: "block",
              fontFamily: "Source Code Pro, monospace",
            }}
            omitDeletionAnimation={true}
          />
          <p
            data-aos="fade-up"
            data-aos-delay={viewed4 ? 1000 : 0}
            data-aos-once="true"
            className="font-inter py-2 lg:py-5 font-regular text-xl lg:text-2xl leading-9 text-left"
          >
            Dive deeper into topics with Nikaru's discussion feature,
            allowing users to interact and explore generated responses
            further, fostering collaboration and deeper understanding.
          </p>
        </div>
      )}
    </div>
    {viewed4 && (
      <div className="w-full sm:w-[80%] md:w-[50%] min-h-[300px] sm:min-h-[400px] lg:min-h-[370px] relative px-2 py-2 mb-24">
        <div className="absolute left-0 top-[10%] md:top-[40%] lg:top-[30%]  xl:top-[20%] translate-y-1/2" data-aos="fade-right" data-aos-duration="1000">
          <img src={Group8302} alt="Group" className="w-full" data-aos-once="true" />
        </div>
        <div className="absolute left-1/2 top-[-10%] md:top-[20%] lg:top-[10%] xl:top-[-10%]" data-aos="fade-up" data-aos-duration="1000">
          <img src={iPhone} alt="iPhones" className="w-[400px] sm:w-[250px] z-[100]" data-aos-once="true" />
        </div>
      </div>
    )}
  </div>
</div>
  );
}