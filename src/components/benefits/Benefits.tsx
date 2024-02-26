import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from "@heroicons/react/24/solid";
import { SelectedPage ,BenefitsType } from "../shared/types";
import { motion } from "framer-motion";
import Htext from "../shared/Htext";
import BenefitCard from "./BenefitCard";
import ClientDes from "./ClientDes";

const benefits:Array<BenefitsType> =[
  {
    icon:<HomeModernIcon className="h-6 w-6"/>,
    title:"State of the Art Facilities",
    description:"The gym offers a diverse set of workout options, including cardio, strength training, group fitness classes, and specialized programs"
  },
  {
    icon:<UserGroupIcon className="h-6 w-6"/>,
    title:"100's of Diverse Classes",
    description:"The gym also fosters a sense of community, organizing events, challenges, and social activities to encourage interaction among members."
  },
  {
    icon:<AcademicCapIcon className="h-6 w-6"/>,
    title:"Export and Pro Trainers",
    description:"The experienced and certified trainers at MVOGym are committed to guiding members through personalized workout routines, "
  },
];
const container ={
  hidden:{},
  visible:{
    transition:{staggerChildren:0.2}
  }
}
type Props = {
  setSelectedPage:(value:SelectedPage)=> void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return <>
  <section id="benefits"
  className="mx-auto min-h-full w-5/6 py-20">
  <motion.div className="div"
  onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}
  >
    {/*Header */}
  <motion.div className="md:my-5 md:w-3/5"
    initial="hidden"
    whileInView="visible"
    viewport={{once:true, amount:0.5}}
    transition={{duration:0.5}}
    variants={{
     hidden:{opacity:0,x:-100},
     visible:{opacity:1,x:0}
    }}
   >
    <Htext>MORE THAN JUST A GYM</Htext>
    <p className="my-5 text-sm">
    MVOGym, your fitness destination,From state-of-the-art equipment to personalized training, MVOGym is committed to empowering members on their journey to a healthier lifestyle.
    </p>
  </motion.div>
      {/*Benefits*/}
      <motion.div className="md:flex items-center justify-between gap-8 mt-5"
      initial="hidden"
      whileInView={"visible"}
      viewport={{once:true,amount:0.5}}
      variants={container}
      >
        {benefits.map((benefit:BenefitsType)=>(
          <BenefitCard
          key ={benefit.title}
          icon={benefit.icon}
          title={benefit.title}
          description={benefit.description}
          setSelectedPage ={setSelectedPage}
          />

        ))}
      </motion.div>
      

      <div>
        <ClientDes setSelectedPage={setSelectedPage}/>
      </div>
  </motion.div>

  </section>
  </>
}

export default Benefits