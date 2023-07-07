import { useState } from "react";
import l2e from "../images/l2e.svg";
import security from "../images/security.svg";
import nft from "../images/nft.svg";
import r2e from "../images/r2e.svg";
import lc from "../images/lowcost.svg";
import charity from "../images/charity.svg";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import dropDown from "../images/dropDown.svg";
import dropUp from "../images/dropUp.svg";

const commonStyles =
  "bg-gray-300 bg-opacity-10 backdrop-filter backdrop-blur-lg backdrop-saturate-150 pl-[25px] pr-[18px]  rounded-lg";

const FeatureItem = ({ icon, title, content }) => (
  <div className={commonStyles}>
    <div className="flex items-center">
      {icon}
      <div className="">
        <p className="font-semibold text-[18px] text-gray-300 ml-[-8px]">
          {title}
        </p>
      </div>
    </div>
    <div className="text-start items-center">
      <p className="text-sm text-gray-400 mb-6">{content}</p>
    </div>
  </div>
);

const FeatureItemMobile = ({ icon, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-gray-300 md:hidden my-[7px] bg-opacity-10 backdrop-filter backdrop-blur-lg backdrop-saturate-150 pl-[25px] pr-[18px]  rounded-lg">
      <div className="flex relative justify-between">
        <div className="">{icon}</div>
        <div className="w-full pt-5">
          <p className="font-semibold text-left  text-[20px] text-gray-300 ml-[-8px]">
            {title}
          </p>
        </div>
        <img
          src={dropDown}
          onClick={toggleDropdown} 
          alt=""
          className={
            isOpen ? "text-[#43df9b] w-[17px] h-[80px] font-bold  " : "hidden"
          }
        />
        <img
          src={dropUp}
          onClick={toggleDropdown} 
          alt=""
          className={
            isOpen ? "hidden" : "text-[#43df9b] w-[17px] h-[80px] font-bold  "
          }
        />
      </div>
      {isOpen && (
        <div className="text-start items-center pb-[30px]">
          <p className="text-sm text-[#cccccc] ">{content}</p>
        </div>
      )}
    </div>
  );
};

const Features = () => {
  return (
    <div className="w-full mt-[70px] md:px-[64px] text-center items-center justify-between">
      <p className=" text-[28px] font-semibold text-gray-200">
        Jobdeal Key Features
      </p>

      <div className=" hidden md:grid md:grid-cols-3 gap-3 gird-cols-3 w-full mt-10">
        <FeatureItem
          icon={
            <img
              src={security}
              className="ml-[-20px]"
              height={100}
              width={100}
              alt=""
            />
          }
          title="Security"
          content="We ensure a fair and secure environment through encrypted
          technologies, blockchain for secure transactions, escrow services,
          and dispute resolution, while filtering out inappropriate ads."
        />
        <FeatureItem
          icon={
            <img
              src={nft}
              className="ml-[-20px]"
              height={100}
              width={100}
              alt=""
            />
          }
          title="NFT based User System"
          content="Our NFT system enables users to authenticate, own, monetize, personalize, and interoperate digital assets effectively."
        />
        <FeatureItem
          icon={
            <img
              src={l2e}
              className="ml-[-20px]"
              // height={100}
              width={100}
              alt=""
            />
          }
          title="Learn to Earn"
          content="With our microlearning content, you can learn at your own pace. You can also earn and get recognized for completing tasks and skills, and spreading knowledge of Web 3 technologies and our functionality."
        />
        <FeatureItem
          icon={
            <img
              src={r2e}
              className="ml-[-20px]"
              height={100}
              width={100}
              alt=""
            />
          }
          title="Recruit To Earn"
          content="Earn rewards by inviting friends to join JobDeal and receive a 10% commission on their generated profits, thanking you for contributing to our community."
        />
        <FeatureItem
          icon={
            <img
              src={lc}
              className="ml-[-20px]"
              height={100}
              width={100}
              alt=""
            />
          }
          title="Low Costs"
          content="We offers various services with costs ranging from 2.5% to 20% depending on the type of service and payment method, including ad fees, bargains, urgent jobs, enhanced ads, escrow/dispute, and premium membership."
        />
        <FeatureItem
          icon={
            <img
              src={charity}
              className="ml-[-20px]"
              height={100}
              width={100}
              alt=""
            />
          }
          title="Charity"
          content="We donate 0.1% of every transaction to a community-chosen charity every 6 months, emphasizing the importance of helping the less fortunate."
        />
      </div>

      {/* Mobile view */}
      <div className="px-[20px] pt-[15px]">
        <FeatureItemMobile
          icon={
            <img
              src={security}
              className="ml-[-20px]"
              height={140}
              width={124}
              alt=""
            />
          }
          title="Security"
          content="We ensure a fair and secure environment through encrypted
          technologies, blockchain for secure transactions, escrow services,
          and dispute resolution, while filtering out inappropriate ads."
        />
        <FeatureItemMobile
          icon={
            <img
              src={nft}
              className="ml-[-20px]"
              height={147}
              width={129}
              alt=""
            />
          }
          title="NFT based User System"
          content="Our NFT system enables users to authenticate, own, monetize, personalize, and interoperate digital assets effectively."
        />
        <FeatureItemMobile
          icon={
            <img
              src={l2e}
              className="ml-[-20px]"
              // height={100}
              width={130}
              alt=""
            />
          }
          title="Learn to Earn"
          content="With our microlearning content, you can learn at your own pace. You can also earn and get recognized for completing tasks and skills, and spreading knowledge of Web 3 technologies and our functionality."
        />
        <FeatureItemMobile
          icon={
            <img
              src={r2e}
              className="ml-[-20px]"
              height={130}
              width={130}
              alt=""
            />
          }
          title="Recruit To Earn"
          content="Earn rewards by inviting friends to join JobDeal and receive a 10% commission on their generated profits, thanking you for contributing to our community."
        />
        <FeatureItemMobile
          icon={
            <img
              src={lc}
              className="ml-[-20px]"
              height={130}
              width={130}
              alt=""
            />
          }
          title="Low Costs"
          content="We offers various services with costs ranging from 2.5% to 20% depending on the type of service and payment method, including ad fees, bargains, urgent jobs, enhanced ads, escrow/dispute, and premium membership."
        />
        <FeatureItemMobile
          icon={
            <img
              src={charity}
              className="ml-[-20px]"
              height={130}
              width={130}
              alt=""
            />
          }
          title="Charity"
          content="We donate 0.1% of every transaction to a community-chosen charity every 6 months, emphasizing the importance of helping the less fortunate."
        />
      </div>
    </div>
  );
};

export default Features;




