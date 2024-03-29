import MainSection from "@/components/home/MainSection"
import Navbar from "@/components/navbar/Navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/components/shared/types";
import Benefits from "@/components/benefits/Benefits"
import OurClasses from "./components/ourClasses/OurClasses";
import ContactUS from "./components/contactus/ContactUS";
import Footer from "./components/footer/Footer";

const App = () => {

  const [selectedPage,setSelectedPage] = useState<
  SelectedPage>(SelectedPage.Home);
  const [isTopOfpage,setIsTopOfpage] = useState<boolean>(true);

   useEffect(()=>{
    const handleScroll =() =>{
      if(window.scrollY === 0){
        setIsTopOfpage(true);
        setSelectedPage(SelectedPage.Home);
      }
      // if(window.scrollY !== 0)
      else
      {
        setIsTopOfpage(false);
      }
    }
    window.addEventListener("scroll",handleScroll);
    return ()=> window.removeEventListener("scroll", handleScroll)
   },[]);
  return (
   <div className="app bg-gray-20">
    <Navbar 
   isTopOfpage ={isTopOfpage}
    selectedPage={selectedPage}  setSelectedPage={setSelectedPage}/>
    < MainSection setSelectedPage={setSelectedPage} />
    < Benefits setSelectedPage={setSelectedPage} />
    < OurClasses setSelectedPage={setSelectedPage} />
    < ContactUS setSelectedPage={setSelectedPage} />
    <Footer/>
   </div>
  )
}

export default App