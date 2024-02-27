import { SelectedPage,ClassType } from "../shared/types"
import { image1 ,image2,image3,image4,image5,image6} from "../image"
import { motion } from "framer-motion";
import Htext from "../shared/Htext";
import Class from "./Class";
type Props = {
  setSelectedPage : (value:SelectedPage) => void;
}

 const Classes: Array<ClassType>=[
{
  Name:"Weight Training Classes",
  description:"Transform your strength and physique with MVOGym's Weight Training Classes. Led by experienced trainers.",
  image: image1
},
{
  Name:"yoga Classes",
  description:"Discover serenity and strength in MVOGym's Yoga Classes. Guided by experienced instructors, our classes offer a peaceful escape while enhancing flexibility and mindfulness. ",
  image: image5
},
{
  Name:"Adventure Classes",
  description:"Embark on thrilling fitness adventures with MVOGym's Adventure Classes. From challenging obstacle courses to outdoor activities, our expert instructors guide you ",
  image:image4  
},
{
  Name:"ab Core Classes",
  description:"Define your core strength with MVOGym's Ab Core Classes. Led by expert instructors, these targeted sessions focus on sculpting and strengthening your core muscles.",
  image: image3
},
{
  Name:"Fitness Classes",
  description:"Elevate your fitness journey with MVOGym's dynamic Fitness Classes. From heart-pumping cardio to strength-building workouts, our expert-led classes cater to all fitness levels",
  image:  image2
},
{
  Name:"Dance Classes",
  description:"Unleash your rhythm and elevate your fitness with MVOGym's Dance Classes. Led by passionate instructors, our classes offer a blend of fun and fitness",
  image: image6
}

 ]

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
      onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}>
        <motion.div
        className="mx-auto w-5/6"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        transition={{delay:0.5,duration:0.5}}
        variants={{
         hidden:{opacity:0,x:-100},
         visible:{opacity:1,x:0}
        }}
        >
          <div className="md:w-3/5">
            <Htext>OUR CLASSES</Htext>
            <p className="py-5">
            "Discover a dynamic fitness experience at MVOGym with our diverse classes, from energizing cardio to strength-building and relaxing yoga. Our expert instructors ensure a personalized and enjoyable fitness journey for all levels Elevate your wellness routine with MVOGym's holistic approach to fitness."</p>
          </div>

        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
           <ul className="w-[2800px] whitespace-nowrap">
             {Classes.map((item,index,)=>(
              <Class
              key={`${item.Name}-${index}`}
              Name={item.Name}
              description={item.description}
              image = {item.image}
              />
             ))}


           </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default OurClasses