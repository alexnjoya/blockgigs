import Image from "next/image";
import Howimage1 from "../assets/howimage1.png";
import Howimage2 from "../assets/howimage2.png";

const HowItWorks = () => {
  return (
    <div className="mt-[100px] md:px-16 lg:px-24 w-full mb-[50px]">
      <div className="flex flex-col justify-center items-center ">
        <div className="text-center max-w-[448px]">
          <h2 className="text-[36px] font-[600] text-[#0A0F29]">How AdwumaPa works</h2>
          <p className="text-[18px] font-normal">
            Adwuma offers a use-frendly interface. Very simple and easy to navigate
          </p>
        </div>
      </div>

      <div className="mt-16">
        <div className="flex items-center justify-around space-x-16">
          <div>
            <Image src={Howimage1} alt="img" />
          </div>
          <div className="max-w-[572px]">
            <h3 className="text-[24px] font-semibold text-[#0A0F29]">Create Your Profile, work and get paid</h3>
            <p className="text-[18px] font-normal text-[#0A0F29]">
              Set up a pseudonymous profile, showcase your skills, and unlock global opportunities—get hired and paid
              securely in crypto
            </p>
          </div>
        </div>

        <div className="flex items-center justify-around space-x-16 mt-32">
          <div className="max-w-[572px]">
            <h3 className="text-[24px] font-semibold text-[#0A0F29]">Find or Post Projects</h3>
            <p className="text-[18px] font-normal text-[#0A0F29]">
              Browse projects or hire top talent with ease—experience seamless transactions and milestone-based
              payments, all powered by secure smart contracts.
            </p>
          </div>
          <div>
            <Image src={Howimage2} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
