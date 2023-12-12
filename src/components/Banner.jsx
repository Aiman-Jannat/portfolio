import { IoMdDownload } from "react-icons/io";
import { saveAs } from 'file-saver';
import myPdf from './../../public/assignment.pdf';
const Banner = () => {

    const handlePdf = () =>{
        saveAs(myPdf, 'downloaded-file.pdf');
    }
    return (
        <div>
            <div className=" bg-sky-50  ">
  <div className=" px-5 lg:px-20  flex justify-between items-center flex-col lg:flex-row-reverse ">
    <div className=" w-full lg:w-1/2  h-full ">
    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR06VHxiLZTWcbAyKzOItZif0fYLDDLJKRG7Q&usqp=CAU" className=" w-full h-full   rounded-lg " />
    </div>
    <div className="py-10">
      <h1 className="text-3xl lg:text-7xl font-bold">I am <span className="text-orange-600">Aiman!</span></h1>
      <p className="py-3">I am a front end based MERN stack developer. <br />I love to Code. And also i like to explore new technologies. <br />I can cop up with new technologies in a short time.</p>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
<button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span className="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Front-end developer
</span>
</button>
<button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
<span className="relative px-8 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
MERN stack developer
</span>
</button>
<button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
<span className="relative px-16 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Programmer
</span>
</button>


      </div>
      <button onClick={handlePdf}  type="button" className="p-3 mt-6 px-7 text-white bg-gradient-to-r from-blue-500 via-orange-600 to-orange-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm  py-2.5 text-center me-2 mb-2 ">Download Resume <IoMdDownload className="inline"></IoMdDownload></button>
      
    </div>
    
  </div>
</div>
        </div>
    );
};

export default Banner;