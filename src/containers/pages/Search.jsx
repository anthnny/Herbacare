import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async';
import { get_categories } from "redux/actions/categories/categories";
import { connect } from "react-redux";
import { get_blog_list, get_blog_list_page, search_blog, search_blog_page } from "redux/actions/blog/blog";
import CategoriesHeader from "components/blog/CategoriesHeader";
import { useParams } from "react-router-dom";
import BlogList from "components/blog/search/BlogList";

function Search({
    posts,
    count,
    next,
    previous,
    search_blog,
    search_blog_page
}){

    const params = useParams()
    const term = params.term

    useEffect(()=>{
        window.scrollTo(0,0)
        search_blog(term)
    },[term, search_blog])


    return (
        <Layout>
            <Helmet>
                <title>HerbaCare | Remedios</title>
                {/* ... Other meta tags ... */}
            </Helmet>
            <Navbar />
            <div className="pt-24">
                <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-full my-10">
                        <BlogList posts={posts} get_blog_list_page={search_blog_page} term={term} count={count} />
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
}
const mapStateToProps=state=>({
    posts: state.remedies.filtered_posts,
    count: state.remedies.count,
    next: state.remedies.next,
    previous: state.remedies.previous,

})

export default connect(mapStateToProps,{
    search_blog,
    search_blog_page
}) (Search)