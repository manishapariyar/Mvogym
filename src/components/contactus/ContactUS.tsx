import { motion } from "framer-motion";
import { SelectedPage } from "../shared/types"
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import Htext from "../shared/Htext";
type Props = {
  setSelectedPage:(value:SelectedPage)=> void;
}

function ContactUS({ setSelectedPage }: Props) {
  const inputStyles = `border-2 hover:border-yellow-500 mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`
  const  {
    register,
    trigger,
    formState:{ errors}

  } = useForm();


  const onSubmit = async (e:any) => {
    const inValid = await trigger()
    if(inValid){
      e.preventDefault();
    }
  }

  return (
    <section id="Contact" className="mx-auto w-5/6 pt-24 pb-32 ">
      <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}>
       <motion.div className="md:w3/5" 
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        transition={{delay:0.5,duration:0.5}}
        variants={{
         hidden:{opacity:0,x:-100},
         visible:{opacity:1,x:0}
        }}>
        <Htext>
          <span className="text-primary-500">JOIN NOW</span> 
         {" "} TO GET IN SHAPE
        </Htext>
        <p className="my-5">
        "Join now to sculpt your body and get in shape with MVOGym! Our expert trainers and diverse classes are tailored to help you achieve your fitness goals. Start your wellness journey today!"
        </p>
       </motion.div>

        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div className="mt-10 basis-3/5 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{delay:0.5,duration:0.5}}
          variants={{
           hidden:{opacity:0,y:100},
           visible:{opacity:1,y:0}
          }}>
         <form action="https://formsubmit.co/manishapariyar196@gmail.com"
          target="_blank"
          onSubmit={onSubmit}
          method="POST">
           <input type="text" 
           className={inputStyles}
            placeholder="NAME" {...register("name",{
              required:true,
              maxLength:100,
            })}/>
            {errors.name &&(
              <p className="mt-1 text-primary-500">
                {errors.name.type=== "required" && "This Field is required."}
                {errors.name.type=== "maxlength" && "Max length is 100 character."}
              </p>
            )}
           <input type="email" 
           className={inputStyles}
            placeholder="EMAIL" 
            {...register("email",{
              required:true,
             pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}/>
            {errors.email &&(
              <p className="mt-1 text-primary-500">
                {errors.email.type=== "required" && "This Field is required."}
                {errors.email.type=== "pattern" && "invaild email."}
              </p>
            )}

            <textarea  
           className={inputStyles}
           rows={4}
           cols={50}
            placeholder="MESSAGE" 
            {...register("message",{
              required:true,
              maxLength:2000,
            })}/>
            {errors.message &&(
              <p className="mt-1 text-primary-500">
                {errors.message.type=== "required" && "This Field is required."}
                {errors.message.type=== "maxlength" && "Max length is 2000 character."}
              </p>
            )}
             <button type="submit" 
              className="mb-5 rounded-lg bg-secondary-500
               px-20 py-3 transition duration-500 border-2 hover:border-yellow-500
                hover:bg-primary-500 hover:text-white text-l"
              >SUBMIT</button>
          </form>
             
          </motion.div>
          <motion.div className="mt-14 basis-2/5 md:mt-0"
           initial="hidden"
           whileInView="visible"
           viewport={{once:true, amount:0.5}}
           transition={{delay:0.5,duration:0.5}}
           variants={{
            hidden:{opacity:0,y:-50},
            visible:{opacity:1,y:0}
           }}>
            <div>
              <img src={ContactUsPageGraphic}
               className="w-full"
              alt="" />
            </div>
            
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUS