
import Navbar from "@/components/navbar/Navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/components/shared/types";



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
   </div>
  )
}

export default App