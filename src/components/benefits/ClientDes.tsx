import { motion } from "framer-motion"
import ActionButton from "../shared/ActionButton"
import Htext from "../shared/Htext"
import { SelectedPage } from "../shared/types"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

type Props = {
  setSelectedPage:(value:SelectedPage)=>void;
}

const ClientDes = ({setSelectedPage}: Props) => {
  return (
    <div className="md:flex mt-16 items-center justify-between gap-20 md:mt-28">
      <img src={BenefitsPageGraphic} alt="" className="mx-auto" />
      <div>
        <motion.div className="relative"
         initial="hidden"
         whileInView="visible"
         viewport={{once:true, amount:0.5}}
         transition={{duration:0.5}}
         variants={{
          hidden:{opacity:0,x:50},
          visible:{opacity:1,x:0}
         }}
        >
          <div className="before:absolute before:-top-20 before:-left-20
           before:content-abstractwaves before:z-[1]">
            <div>
              <Htext>
                MILLONS OF HAPPY MEMBERS GETTING{" "}
                <span className="text-primary-500">FIT</span>
              </Htext>
            </div>
           </div>
        </motion.div>
        <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{once:true, amount:0.5}}
         transition={{delay:0.2,duration:0.7}}
         variants={{
          hidden:{opacity:0,x:100},
          visible:{opacity:1,x:0}
         }}>
          <p className="my-5">
            "Exceptional experience at MVOGym! The state-of-the-art facilities, personalized training, and supportive community make it a top-notch fitness destination. Achieving my fitness goals has never been more enjoyable – highly recommend MVOGym for anyone seeking a holistic and empowering workout experience!"</p>
          <p className="mb-5">
         "Choosing MVOGym has been a game-changer for my fitness journey. The expert trainers provide personalized guidance, the diverse range of classes keeps things exciting, and the welcoming community creates a positive atmosphere. MVOGym goes beyond a gym; it's a lifestyle upgrade that I'm grateful to be a part of!"</p>
        </motion.div>
        <div className="relative mt-16">
         <motion.div className="before:absolute before:-bottom-5 before:right-5 before:z-[-1]
         before:content-sparkles"
         >
           <ActionButton setSelectedPage={setSelectedPage}>l
           Join Now
           </ActionButton>
           </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ClientDes