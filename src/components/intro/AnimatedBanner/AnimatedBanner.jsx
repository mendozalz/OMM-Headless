import AnimatedSvg from "../AnimatedSvg/AnimatedSvg";
import BannerContainer from "../BannerContainer/BannerContainer";
import Parrafo from "../Parrafo/Parrafo";
import SvgContainer from "../SvgContainer/SvgContainer";
import "../../../../global.css"

const AnimatedBanner = () => {
  return (
    <BannerContainer>
      <SvgContainer>
        <AnimatedSvg />
        <Parrafo />
      </SvgContainer>
    </BannerContainer>
  );
};

export default AnimatedBanner;