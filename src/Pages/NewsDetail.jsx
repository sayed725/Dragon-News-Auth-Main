import React from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import Header from '../components/Header';
import RightNavbar from '../components/layout-components/RightNavbar';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetail = () => {

    const data = useLoaderData()
    const news = data.data[0]
   



    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <Header></Header>
            </header>
            <main className='grid grid-cols-12 gap-5 mt-5'>
                <section className='col-span-9'>
                <h2 className="font-semibold mb-5 text-xl">Dragon News</h2>
          <div className="card bg-base-100 gap-5 border">
            <figure className="px-10 pt-10">
              <img src={news?.image_url} alt="Shoes" className="rounded-xl w-full object-cover" />
            </figure>
            <div className="card-body gap-10">
              <h2 className="card-title">{news?.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions">
                <Link
                  to={`/category/${news?.category_id}`}
                  className="btn bg-[#D72050] text-white hover:bg-[#D72050]"
                >
                    <FaArrowLeft></FaArrowLeft>
                 All news in this category
                </Link>
              </div>
            </div>
          </div>
                </section>
                <aside className='col-span-3'>
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetail;