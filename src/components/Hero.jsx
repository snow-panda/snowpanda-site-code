import heroBg from "/images/hero-bg.png";
import heroImage from "/images/heroImage.png";
import Typed from 'react-typed'

function Hero() {
  return (
    <>
      <div
        className="pt-13 pb-24 px-4 sm:px-8 md:px-20 lg:px-24 flex flex-col lg:flex-row gap-50 md:gap-100 justify-center items-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-[531px]">
            <p className="text-[44px] leading-normal text-[#673AB7]">
              <span className="font-[350] heroMulti">Our Recruiters are Expert</span> {" "} <br/>
              <span className="font-[680] heroSecond"> 

              <Typed
                  strings={[
                    "Software Engineers",
                    "Product Managers",
                    "Electrical Engineers",
                    "Account Managers",
                    "Project Managers"
                  ]}
                  typeSpeed={50}
                  backSpeed={80}
                  loop
                />

              
              </span>
            </p>
            <p className="text-[#4A5568] text-lg leading-normal">
              Our team of world-class technical recruiters and innovative hiring
              strategies have a track record of building great teams
            </p>
            <p>
            <span className="text-[18px] font-bold text-[#673AB7] leading-normal">
              Why Choose Us<span className="text-black"> </span>
            </span>
            <span className="text-[#4A5568] text-[15px] leading-normal">
            <p>Technical experts who understand your job requirements thoroughly</p>
            <p>Faster time to hire</p>
            <p>Lower hiring costs</p>
            </span>
          </p>
          </div>
          <a href="#about"><button className="w-fit text-sm leading-normal text-white py-4 px-6 rounded-lg bg-[#FA5E5E]">
            Let’s Get Started!
          </button></a>
        </div>
        <div>
          <img src={heroImage} alt="_hero" />
        </div>
      </div>
    </>
  );
}

export default Hero;
