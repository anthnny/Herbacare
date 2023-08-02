import Footer from "components/navigation/Footer"
import NavBar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { Helmet } from 'react-helmet-async'
import { useEffect } from "react"
import { get_categories } from "redux/actions/categories/categories";
import { connect } from "react-redux";
import { get_blog_list , get_blog_list_page } from "redux/actions/remedies/remedies"
import CategoriesHeader from "components/blog/CategoriesHeader"
import BlogList from "components/blog/BlogList";


function Remedie({
    get_categories,
    categories,
    get_blog_list,
    get_blog_list_page,
    posts,
    count,
    next,
    previous,
}){

    useEffect(()=>{
        window.scrollTo(0,0)
        get_categories()
        get_blog_list()
    },[])


    return(
        <Layout>
            <Helmet>
                <title>HerbaCare | Remedios</title>
                <meta name="description" content="Plantas Medicinales, Recetas Medicinales todo aqui en nuestra pagina HerbaCare"/>
                <meta name="keywords" content="plantas medicinales, hierbas medicinales, remedios caseros" />
                <meta name="author" content="HerbaCare" />
            </Helmet>
            <NavBar/>
            <div className="pt-24">
                <CategoriesHeader categories={categories&&categories}/>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl my-10">
                    <BlogList posts={posts&&posts} get_blog_list_page={get_blog_list_page} count={count&&count}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </Layout>
    )
}
const mapStateToProps=state=>({
    categories: state.categories.categories,
    posts: state.remedies.blog_list,
    count: state.remedies.count,
    next: state.remedies.next,
    previous: state.remedies.previous,
})


export default connect(mapStateToProps,{
    get_categories,
    get_blog_list,
    get_blog_list_page
}) (Remedie)