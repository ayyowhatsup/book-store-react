import { Await, Link, Outlet, useLoaderData } from "react-router-dom";
import Minus from './Minus'
import Plus from './Plus'
import { Suspense, useState } from "react";
import classNames from "classnames";
export default function CategoryLayout() {
    const {categories, authors} = useLoaderData()
    const [collapseState, setCollapseState] = useState({category: false, author: false})
  return (
    <div className="left-sidebar">
      <div className="page-header border-bottom mb-8">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center py-4">
            <h1 className="page-title font-size-3 font-weight-medium m-0 text-lh-lg">
              Thể loại
            </h1>
            <nav className="woocommerce-breadcrumb font-size-2">
              <a href="../home/index.html" className="h-primary">
                Trang chủ
              </a>
              <span className="breadcrumb-separator mx-1">
                <i className="fas fa-angle-right"></i>
              </span>
              Thể loại
            </nav>
          </div>
        </div>
      </div>
      <div className="site-content space-bottom-3" id="content">
        <div className="container">
            <div className="row">
                <Outlet/>
                <div id="secondary" className="sidebar widget-area order-1" role="complementary">
                    <div id="widgetAccordion">
                        <div id="woocommerce_product_categories-2"
                            className="widget p-4d875 border woocommerce widget_product_categories">
                            <div id="widgetHeadingOne" className="widget-head">
                                <div className={classNames("d-flex align-items-center justify-content-between text-dark")}>
                                    <h3 className="widget-title mb-0 font-weight-medium font-size-3">Thể loại</h3>
                                    {collapseState.category == false && <span onClick={() => setCollapseState(prev => ({...prev, category: true}))}>
                                        <Minus/>
                                    </span>}
                                    {collapseState.category && <span onClick={() => setCollapseState(prev => ({...prev, category: false}))}>
                                        <Plus/>
                                    </span>}      
                                </div>
                            </div>
                            <div id="widgetCollapseOne" className={classNames("mt-3 widget-content collapse", {"show": collapseState.category == false})}>
                                <Suspense>
                                    <Await resolve={categories} children={(categories) => (
                                        <ul className="product-categories">
                                            {categories.map(category => (
                                                <li className="cat-item cat-item-9 cat-parent">
                                                    <Link to={`/category/${category.slug}`}>{category.name}</Link>
                                                </li>
                                            ))}
                                    </ul>
                                    )}/> 
                                </Suspense>
                            </div>
                        </div>
                        <div id="Authors" className="widget widget_search widget_author p-4d875 border">
                            <div id="widgetHeading21" className="widget-head">
                                <div className="d-flex align-items-center justify-content-between text-dark">
                                    <h3 className="widget-title mb-0 font-weight-medium font-size-3">Tác giả</h3>
                                    {collapseState.author == false && <span onClick={() => setCollapseState(prev => ({...prev, author: true}))}>
                                        <Minus/>
                                    </span>}
                                    {collapseState.author && <span onClick={() => setCollapseState(prev => ({...prev, author: false}))}>
                                        <Plus/>
                                    </span>}
                                </div>
                            </div>
                            <div id="widgetCollapse21" className={classNames("mt-4 widget-content collapse", {"show": collapseState.author == false})}>
                                <Suspense>
                                    <Await resolve={authors} children={(authors) => (
                                        <ul className="product-categories">
                                            {authors.map(author => (
                                                <li className="cat-item cat-item-9 cat-parent">
                                                    <Link to={`/author/${author.slug}`}>{author.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}/>
                                </Suspense>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}
