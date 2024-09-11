import Image from "next/image";
import Link from "next/link";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import Image4 from "../assets/image4.png";
import Stars from "../assets/stars.png";

const Hero = () => {
  return (
    <section className="w-full h-[600px] bg-gradient-to-b from-[#ECF3FF] to-[#FFFFFF] flex flex-col md:flex-row md:justify-between items-center">
      {/*Left div*/}
      <div className="hidden md:flex flex-col items-center ml-0 lg:ml-[11rem] gap-1 lg:gap-8">
        <div className=" mt-[5rem] lg:mt-[-5rem]">
          <Image className="w-[50px] h-[50px] lg:w-[73px] lg:h-[73px]" src={Image1} alt="image" />
        </div>

        <div className="flex items-center justify-center ml-[-12rem] lg:ml-[-14rem] mt-[2rem]">
          <span className="block w-[11.69px] h-[11.69px] bg-[#f17105] rounded-lg"></span>
        </div>

        <div className="flex items-center justify-center mr-[-9rem] mt-[4rem] lg:mt-[3rem]">
          <span className="block w-[11.69px] h-[11.69px] bg-[#f17105] rounded-lg"></span>
        </div>

        <div className="mt-[-2.5rem]">
          <Image className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]" src={Image2} alt="img" />
        </div>
      </div>

      {/*Middle div*/}
      <div className="md:w-[544px] h-[304px] gap-6 flex flex-col items-center mt-[5rem] lg:mt-[-9rem]">
        <div className="md:w-[447px] h-[24px] gap-0 lg:gap-3 flex flex-col md:flex-row justify-between items-center">
          <Image className="md:w-[100px] h-[16px] lg:w-[116px] lg:h-[20px]" src={Stars} alt="stars rating" />
          <p className="font-montserrat text-[#000000] font-medium text-[15px] lg:text-base leading-6 text-center text-nowrap">
            Used by 1,000 + tech talents and clients
          </p>
        </div>

        <div>
          <h1 className="font-montserrat text-[#000000] font-bold text-[40px] lg:text-[54px] leading-[64px] text-center">
            Bringing{" "}
            <span className="font-montserrat text-[#2f66f6] font-bold text-[40px] lg:text-[54px] leading-[64px] text-center">
              Great <br /> Work{" "}
            </span>
            to You
          </h1>

          <p className="font-montserrat font-normal text-[14px] lg:text-[18px] text-center text-[#0a0f29]">
            Find top African tech talents, hire anonymously, and pay <br className="hidden md:inline-block" /> securely
            in crypto.
          </p>
        </div>

        <div className="w-[368px] h-[48px] gap-6 flex justify-between items-center">
          <Link
            className="w-[180px]  lg:w-[193px] lg:h-[48px] px-6 py-3 gap-2 rounded-tl-[4px] rounded-tr-none rounded-br-none rounded-bl-none bg-[#2F66F6] font-montserrat font-medium text-[14px] lg:text-[16px] leading-6 text-nowrap text-[#ffffff] text-center"
            href="/talent/profile-setup"
          >
            Sign Up as Talent
          </Link>
          <a
            className="w-[160px] lg:w-[151px] lg:h-[48px] px-6 py-3 gap-2 rounded-tl-[4px] rounded-tr-none rounded-br-none rounded-bl-none bg-[#696F8C] border border-solid border-[#D7D9E4] font-montserrat text-[14px] lg:text-base font-medium text-center leading-6 text-nowrap text-[#ffffff]"
            href="/client/profile-setup"
          >
            Hire a Talent
          </a>
        </div>
      </div>

      {/*Right div*/}
      <div className="hidden md:flex flex-col items-center mr-0 lg:mr-[11rem] gap-1 lg:gap-8 mt-[4rem] lg:mt-0">
        <div className="mt-[2rem] lg:mt-[-2rem] mr-0 lg:mr-[5rem]">
          <Image className="w-[50px] h-[50px] lg:w-[59px] lg:h-[59px]" src={Image3} alt="image" />
        </div>

        <div className="flex items-center justify-center mr-[-12rem] lg:mr-[-14rem] mt-[2rem]">
          <span className="block w-[11.69px] h-[11.69px] bg-[#f17105] rounded-lg"></span>
        </div>

        <div className="flex items-center justify-center ml-[-9rem] mt-[4rem] lg:mt-[3rem]">
          <span className="block w-[11.69px] h-[11.69px] bg-[#f17105] rounded-lg"></span>
        </div>

        <div className="mt-[-2.5rem]">
          <Image className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]" src={Image4} alt="image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
