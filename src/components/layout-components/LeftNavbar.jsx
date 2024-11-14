import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import png1 from '../../assets/1.png'
import png2 from '../../assets/2.png'
import png3 from '../../assets/3.png'
import { MdOutlineDateRange } from "react-icons/md";

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
      fetch("https://openapi.programming-hero.com/api/news/categories")
        .then((res) => res.json())
        .then((data) => setCategories(data.data.news_category));
    }, []);
  
    //   {
    //     "category_id": "01",
    //     "category_name": "Breaking News"
    //   }
  
    return (
      <div>
       <div>
       <h2 className="font-semibold mb-3">All Category ({categories.length})</h2>
        <div className="flex flex-col gap-2 ">
          {categories.map((category) => (
            <NavLink
              to={`/category/${category.category_id}`}
              className="btn bg-base-100 border-none"
              key={category.category_id}
            >
              {category.category_name}
            </NavLink>
          ))}
        </div>
       </div>
       <div className='p-4 space-y-3 mb-6 bg-base-200 flex flex-col justify-center gap-6 mt-10'>
                <h2 className="text-3xl">Q Zone</h2>
               <div className="flex flex-col gap-8">
               <img src={png1} alt="" />
               <div className="flex gap-5 items-center justify-between">
                <p>Sports</p>
                <p className="flex gap-4 items-center"><MdOutlineDateRange /> Jan 4, 2022</p>   
               </div>
               </div>
               <div className="flex flex-col gap-8">
               <img src={png2} alt="" />
               <div className="flex gap-5 items-center justify-between">
                <p>Sports</p>
                <p className="flex gap-4 items-center"><MdOutlineDateRange /> Jan 4, 2022</p>   
               </div>
               </div>
               <div className="flex flex-col gap-8">
               <img src={png3} alt="" />
               <div className="flex gap-5 items-center justify-between">
                <p>Sports</p>
                <p className="flex gap-4 items-center"><MdOutlineDateRange /> Jan 4, 2022</p>   
               </div>
               </div>
            </div>
           
      </div>
    );
};

export default LeftNavbar;