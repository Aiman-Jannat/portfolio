import ProgressBar from 'react-animated-progress-bar';
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";



const Skill = () => {
    
    return (
        <div className='w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-4 lg:w-9/11 mx-auto  lg:px-36'>
           <div className='flex justify-center lg:justify-start items-center'>
           <img className='w-14 h-14' src="https://cdn-icons-png.flaticon.com/128/5968/5968267.png" alt="" />
           <ProgressBar   width="230" trackWidth="13" percentage="80" />
            
           </div>
           <div className='justify-center lg:justify-start flex items-center'>
           <img className='w-14 h-14' src="https://cdn-icons-png.flaticon.com/128/5968/5968242.png" alt="" />
           <ProgressBar  width="230" trackWidth="13" percentage="90" />
            
           
           </div>
           <div className='justify-center lg:justify-start flex  items-center'>
          <img className='w-14 h-14' src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="" />
           <ProgressBar width="230" trackWidth="13" percentage="70" />
           
           </div>
           <div className='justify-center lg:justify-start flex  items-center'>
            <img className="w-14 h-14" src="https://cdn-icons-png.flaticon.com/128/3334/3334886.png" alt="" />
           <ProgressBar width="230" trackWidth="13" percentage="70" />
           
           </div>
           <div className='justify-center lg:justify-start flex  items-center'>
            <img className="w-14 h-14" src="https://t3.ftcdn.net/jpg/05/83/61/64/240_F_583616420_cyNZmksm5h2x5vgcKGmRjnivfmrgnSTb.jpg" alt="" />
           <ProgressBar width="230" trackWidth="13" percentage="40" />
           
           </div>
           <div className='justify-center lg:justify-start flex  items-center'>
            <img className="w-14 h-14" src="https://img.icons8.com/?size=80&id=tBBf3P8HL0vR&format=png" alt="" />
           <ProgressBar width="230" trackWidth="13" percentage="50" />
           
           </div>
           <div className='justify-center lg:justify-start flex  items-center'>
            <TbBrandNextjs className='h-14 w-14'></TbBrandNextjs>
           <ProgressBar width="230" trackWidth="13" percentage="30" />
           
           </div>
           <div className='flex justify-center lg:justify-start   items-center'>
            <img className='h-14 w-14' src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png" alt="" />
           <ProgressBar width="230" trackWidth="13" percentage="20" />
           
           </div>
           
           
        </div>
        </div>
    );
};

export default Skill;