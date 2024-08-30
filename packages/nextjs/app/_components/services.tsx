import Image from "next/image";
import CodeIcon from "../assets/code.svg";
import SafeIcon from "../assets/safe.svg";
import WalletIcon from "../assets/wallet.svg";

const Services = () => {
  const services = [
    {
      icon: SafeIcon,
      title: "Anonymity Guaranteed",
      desc: "Your identity is safe. Hire and get hired based solely on merit",
    },
    {
      icon: WalletIcon,
      title: "Milestone-Based Payments",
      desc: "Get paid in crypto for each milestone you complete",
    },
    {
      icon: CodeIcon,
      title: "Secure Smart Contracts",
      desc: "Smart contracts ensure transparency and trust in every transaction",
    },
  ];
  return (
    <div className="mt-[50px] md:px-16 lg:px-24">
      <div className="text-center">
        <h2 className="text-[36px] font-[600] text-[#0A0F29]">Why Choose AdwumPa?</h2>
        <p className="text-[18px] font-normal">
          Find top African tech talents, hire anonymously,
          <br /> and pay securely in crypto.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5 mt-16">
        {services.map(service => (
          <div key={service.icon} className="flex flex-col justify-center items-center text-center py-4 px-2">
            <div className="bg-[#2F66F6] rounded-full mb-5 p-3">
              <Image src={service.icon} alt="icon" />
            </div>

            <div>
              <h4 className="text-[18px] font-semibold text-[#0A0F29]">{service.title}</h4>
              <p className="text-[18px] font-normal text-[#0A0F29]">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
