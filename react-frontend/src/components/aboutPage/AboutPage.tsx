import Marquee from "react-fast-marquee";
import IMGS from "../../constants/images";

interface AboutPageProps {
    direction: boolean
    delay: number
}

function AboutPage(aboutPageProps: AboutPageProps) {
    const { direction } = aboutPageProps;
    const marqueeDirection = direction ? "left" : "right";
  return (
    <>
    <div className="w-full flex flex-col items-center justify-center">
      <Marquee className="blur-xs" speed={30} pauseOnHover={true} direction={`${marqueeDirection}`} style={{ width: "100%" }} autoFill={true} gradient={true} gradientWidth={100} gradientColor="var(--color-creamy)" delay={aboutPageProps.delay}>
            <div>
                <img src={IMGS.logo} alt="logo" className="w-[30%]" />
            </div>
      </Marquee>
    </div>
    </>
  );
}
export default AboutPage;