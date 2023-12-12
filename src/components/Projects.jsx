import { FaGithub } from "react-icons/fa";

const Projects = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 w-5/6 mx-auto">
            

<div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg w-full h-64" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0c1kyzwghu05uLJYqOgMVWTTmqVDERBWq5zI9I0_25OJ4qyMHfwAH2OHPPyYFCEKPHkE&usqp=CAU" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Inventory Management System</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This project will mainly benefited to the shop managers who manage his shops. All these information will handled by Admin. Shop holders can manage all products</p>
        <div className="flex gap-4 ">
        <a href=" https://lighthearted-horse-7f01ad.netlify.app/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Live Demo
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        <a href="https://github.com/Aiman-Jannat/inventory-client-side">
        <button className="rounded-md flex items-center gap-2 px-5 py-2 bg-orange-600 text-white"><FaGithub className="inline"></FaGithub>Code</button>
        </a>
        </div>
    </div>
</div>

{/* card 2 */}
<div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg w-full h-64" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0c1kyzwghu05uLJYqOgMVWTTmqVDERBWq5zI9I0_25OJ4qyMHfwAH2OHPPyYFCEKPHkE&usqp=CAU" alt="" />
    </a>
<div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Library Management System</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Building a library management system involves creating a web application to manage and organize library resources, such as books, members, and transactions.</p>
        <div className="flex gap-4 ">
        <a href=" https://assignment-eleven-client-ed14d.web.app/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Live Demo
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        <a href="https://github.com/Aiman-Jannat/library-management-client-side">
        <button className="rounded-md flex items-center gap-2 px-5 py-2 bg-orange-600 text-white"><FaGithub className="inline"></FaGithub>Code</button>
        </a>
        </div>
    </div>
</div>


{/* card 3 */}

<div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg w-full h-64" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0c1kyzwghu05uLJYqOgMVWTTmqVDERBWq5zI9I0_25OJ4qyMHfwAH2OHPPyYFCEKPHkE&usqp=CAU" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Hungry Food & beverage</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This project will mainly selling food items and beverage. Anyone can buy foods by his own interest. Many types foods are available in this project.</p>
        <div className="flex gap-4 ">
        <a href="https://client-server-auth-361d9.web.app/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Live Demo
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        <a href="https://github.com/Aiman-Jannat/brand-shop-client-side">
        <button className="rounded-md flex items-center gap-2 px-5 py-2 bg-orange-600 text-white"><FaGithub className="inline"></FaGithub>Code</button>
        </a>
        </div>
    </div>
</div>
        
        
        
        
        </div>
    );
};

export default Projects;