import Avatar1 from "../assets/Avartar1.png";
import Avatar2 from "../assets/Avartar2.png";
import Avatar3 from "../assets/Avartar3.png";
import FeaturedCard from "./featured-card";

const Featured = () => {
  const featured = [
    {
      image: Avatar1,
      name: "Kovács Lajos",
      tags: ["Web3 development", "Smart Contract", "Project Manager"],
      rates: "0.5ETH",
      link: "/",
    },
    {
      image: Avatar2,
      name: "Charolette Hanlin",
      tags: ["Front-end development", "Designer", "Blockchain developer"],
      rates: "0.5ETH",
      link: "/",
    },
    {
      image: Avatar3,
      name: "Szilágyi Erik",
      tags: ["Front-end development", "Designer", "Project manager"],
      rates: "0.5ETH",
      link: "/",
    },
  ];
  return (
    <div className="mt-[100px] md:px-16 lg:px-24 w-full">
      <div className="flex flex-col justify-center items-center ">
        <div className="text-center max-w-[448px]">
          <h2 className="text-[36px] font-[600] text-[#0A0F29]">Featured Tech Talents</h2>
          <p className="text-[18px] font-normal">Browse through series of tech talents here on AdwumaPa</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 mt-16">
        {featured.map(item => (
          <FeaturedCard
            key={item.name}
            image={item.image}
            link={item.link}
            name={item.name}
            rates={item.rates}
            tags={item.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;
