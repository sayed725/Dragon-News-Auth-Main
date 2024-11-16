import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {



    // const [news, setNews] = useState([]);
    // useEffect(() => {
    //   fetch("https://openapi.programming-hero.com/api/news/categories")
    //     .then((res) => res.json())
    //     .then((data) => setCategories(data.data.news_category));
    // }, []);





    return (
        <div className="flex gap-2 items-center bg-base-200 p-3">
            <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>
            <Marquee pauseOnHover={true} speed={50} className="space-x-10">
                <Link>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, laboriosam?
                </Link>
                <Link>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, laboriosam?
                </Link>
                <Link>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, laboriosam?
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;