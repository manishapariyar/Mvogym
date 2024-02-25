import { SelectedPage } from "../shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "../shared/ActionButton";
import HomePageText from "@/assets/HomepageText.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const MainSection = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery ("(min-width:1020px)")
  return <>
  <section id="home" className="gap-16 bg-gray-20 md:h-full py-10 md:pb-0">
   {/*image and main header*/}
   <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6 ">
    {/*main header*/}
    <div className="z-10 mt-32 md:basis-3/5">
      {/*heading*/}
     <div className="md:-mt-20">
      <div className="relative">
        <div  className="before:absolute before:top-10 before:-left-5 before:z-[-1] md:before:content-evolvetext">
          <div className="flex flex-col mt-4">
         <h1 className="text-darkred-500 font-bold text-6xl md:text-wrap">MvoGyms</h1>
          <p className="text-primary-500 uppercase mt-2 font-bold " style={{ letterSpacing: '0.8em' }}>Evolutionary Fitness</p>
          </div>
        </div>
      </div>
      <p className="mt-3 text-sm">
      Mvogym: Elevate your fitness journey with our cutting-edge equipment, expert trainers, and a welcoming community.</p>
     </div>
      <div className="mt-9 flex items-center gap-8">
        <ActionButton setSelectedPage={setSelectedPage}>
          Join Now</ActionButton>
        <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
        >
          <p>Learn more</p>
        </AnchorLink>
      </div>
    </div>
    {/*Image */}
    <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-30 md:justify-end">
      <img src={HomePageGraphic} alt="HomePageGraphic" className="w-[400px]" />
    </div>
   </div>
   {/* sponsors */}
  { isAboveMediumScreens &&(
    <div className="h-[120px] w-full bg-primary-100 py-10 ">
      <div className="flex justify-center  items-center flex-row w-5/6 ml-60">
        <div className="flex w-3/5 jusitfy-between items-center gap-16 ml-10" >
          <img src={SponsorRedBull} alt="SponsorRedBull" />
          <img src={SponsorFortune} alt="SponsorFortune" />
          <img src={SponsorForbes} alt="SponsorForbes" />
        </div>
      </div>
    </div>
  )}
  </section>
  </>
}

export default MainSection