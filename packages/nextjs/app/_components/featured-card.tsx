import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import CalImg from "../assets/cal.svg";

interface FeaturedCardProps {
  image: StaticImageData;
  name: string;
  tags: string[];
  rates: string;
  link: string;
}

const FeaturedCard = ({ image, name, tags, rates, link }: FeaturedCardProps) => {
  return (
    <div className="bg-[#161831] rounded-[16px] p-4 text-white">
      <div className="flex space-x-4 items-center pb-4">
        <Image src={image} alt="image" />
        <h4 className="text-white text-[18px] font-semibold">{name}</h4>
      </div>
      <div className="grid grid-cols-2 gap-x-2 gap-y-3">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="bg-[#D7D9E4] text-[#0A0F29] text-[12px] font-normal py-[8px] px-[10px] rounded-[8px]"
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="flex space-x-8">
        <p>
          Rates: <span className="text-[12px]">{rates}</span>
        </p>
        <div className="flex space-x-2 justify-center items-center">
          <Image src={CalImg} alt="cal" />
          <p className="text-[12px]">Available</p>
        </div>
      </div>
      <Link href={link}>
        <div className="w-full h-[43px] lg:h-[48px] px-6 py-3 gap-2 rounded-tl-[4px] rounded-tr-none rounded-br-none rounded-bl-none bg-[#2F66F6] font-montserrat font-medium text-[14px] lg:text-[16px] leading-6 text-nowrap text-[#ffffff] text-center">
          View Profile
        </div>
      </Link>
    </div>
  );
};

export default FeaturedCard;
