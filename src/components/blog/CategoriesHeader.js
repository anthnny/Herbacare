import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { Link, useLocation, useNavigate } from "react-router-dom"
import {useState}from 'react'

function CategoriesHeader({categories}){

    const location = useLocation()
    const navigate = useNavigate()

    // SEARCH
    const [term, setTerm] = useState("");
    const handleChange = (e) => {
        setTerm(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?s=${term}`);
        setTerm("");
    };

    
    return(
        <div className="w-full bg-gray-100 py-5">
            <div className="grid grid-cols-12">
                <div className="col-span-9">

                    <div className="space-x-8 px-6">
                    <div className="relative">
                            <div className="relative -mb-6 w-full overflow-x-auto pb-6">
                                <ul
                                    role="list"
                                
                                    className="mx-4 inline-flex space-x-6 sm:mx-6 "
                                >
                                    <Link to='/remedios'
                                    className={`${location.pathname === '/remedios' ? "text-orange-500 bg-white":"text-gray-900 hover:text-orange-500 border border-gray-100 hover:border-gray-200"} py-2 px-6   rounded-md text-lg font-regular`}>
                                        All
                                    </Link>
                                    {
                                        categories&&categories.map((category,index)=>(
                                            <Link key={index} to={`/category/${category.slug}`}
                                            className={`${location.pathname === `/category/${category.slug}` ? "text-orange-500 bg-white":"text-gray-900 border border-gray-100 hover:border-gray-200"} py-2 px-6 rounded-md text-lg font-regular`}>
                                                {category.name}
                                            </Link>
                                        ))
                                    }
                                </ul>
                        </div>
                    </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CategoriesHeader