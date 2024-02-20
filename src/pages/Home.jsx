import React, {useState, useEffect} from "react";
import Helmet from "../components/Helmet/Helmet.jsx";
import { Container , Row ,Col ,ListGroup ,ListGroupItem } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";
import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category.jsx";
import "../styles/home.css";
import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";
import products from "../assets/fake-data/products.js";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from "../components/UI/product.card/ProductCard.jsx";
import whyImg from "../assets/images/location.png"

import networkImg from "../assets/images/network.png"
import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";


const featureData= [
    {
        title:'Quick Delivery',
        imgUrl: featureImg01,
        desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, excepturi?"
    },
    {
        title:'Super Dine In',
        imgUrl: featureImg02,
        desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, excepturi?"
    },
    {
        title:'Easy Pick Up',
        imgUrl: featureImg03,
        desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, excepturi?"
    },
]

const Home= ()=>{
    const [category,setcategory] =useState('ALL')
    const[allproducts ,setallproducts] = useState(products)
    const[hotPizza , setHotPizza] = useState([])

    useEffect(()=> {
        const filteredPizza = products.filter(item => item.category === 'Pizza')
        const slicePizza =filteredPizza.slice(0,4)
        setHotPizza(slicePizza)
    },[])

    useEffect(()=>{
        if(category === 'ALL'){
            setallproducts(products)
        }
        if(category === 'BURGER'){
        const filteredProducts = products.filter(item=>item.category === 'Burger')
            setallproducts(filteredProducts)
        }
        if(category === 'PIZZA'){
            const filteredProducts = products.filter(item=>item.category === 'Pizza')
                setallproducts(filteredProducts)
        }
        if(category === 'BREAD'){
            const filteredProducts = products.filter(item=>item.category === 'Bread')
                setallproducts(filteredProducts)
        }
    })
    return <Helmet title="Home">
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero__content">
                        <h5 className="mb-3">Easy way to make an order</h5>
                        <h1 className="mb-4 hero__title"><span>HUNGRY?</span>just wait food at <span> your door</span></h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam 
                            recusandae incidunt deserunt. Molestiae !</p>
                        <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                            <button className="order__btn d-flex align-items-center justify-content-between">Order Now
                            <i class="ri-arrow-right-s-line"></i></button>
                            <button className="all_foods-btn"><Link to="/foods">See all Foods</Link></button>
                        </div>
                        <div className="hero__service d-flex align-items-center gap-5 mt-5">
                            <p className="d-flex align-items-center gap-2"><span className="shipping__icon"><i class="ri-car-line"></i>Free Delivery</span></p>
                            <p className="d-flex align-items-center gap-2"><span className="shipping__icon"><i class="ri-shield-check-line"></i>100% Secure Checkout</span></p>
                        </div>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="hero__img">
                            <img src={heroImg} alt="hero-img"className="w-100"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="pt-0">
            <Category />
        </section>
        <section>
            <Container>
                <Row>
                    <Col lg="12" className="text-center" >
                        <h5 className="feature__subtitle mb-4 ">What we serve </h5>
                        <h2 className="feature__title">Just sit back at home </h2>
                        <h2 className="feature__title">
                            We will <span>take care</span>
                        </h2>
                        <p className="mb-1 mt-4 feature__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, eos!</p>
                        <p className="feature__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eaque.{" "}</p>
                    </Col>
                    {
                        featureData.map((item,index) =>(
                            <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                        <div className="feature__item text-center px-5 py-3">
                            <img src ={item.imgUrl} alt="feature-img" className="w-25 mb-3"/>
                            <h5 className=" fw-bold mb-3">{item.title}</h5>
                            <p>{item.desc}</p>
                        </div>
                    </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg="12" className="text-center">
                        <h2>Popular Foods</h2>
                    </Col>
                    <Col lg="12">
                        <div className="food__category d-flex align-items-center justify-content-center gap-4">
                            <button className={`all_btn ${category==='ALL' ? 'foodBtnActive': '' }`} onClick={()=> setcategory('ALL')}>All</button>
                            <button className={`d-flex align-items-center gap-2 ${category==='BURGER' ? 'foodBtnActive': '' }`} onClick={()=> setcategory('BURGER')} ><img src= {foodCategoryImg01} alt=""/>Burger</button>
                            <button className={`d-flex align-items-center gap-2 ${category==='PIZZA' ? 'foodBtnActive': '' }`} onClick={()=> setcategory('PIZZA')}><img src= {foodCategoryImg02} alt=""/>Pizza</button>
                            <button className={`d-flex align-items-center gap-2 ${category==='BREAD' ? 'foodBtnActive': '' }`} onClick={()=> setcategory('BREAD')}><img src= {foodCategoryImg03} alt=""/>Bread</button>
                        </div>

                    </Col>

                    {
                        allproducts.map((item)=>(
                            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                            <ProductCard item={item}/>
                             </Col>
                        ))
                    }

                    
                </Row>
            </Container>
        </section>
        <section className="why__choose-us">
            <Container>
                <Row>
                    <Col lg="6" md="6">
                    <img src ={whyImg} alt="why-tasty-treat" className="w-100"/>
                    </Col>
                    <Col lg="6" md="6">
                        <div className="why__tasty-treat">
                            <h2 className="tasty__treat-title mb-4">Why <span>Tasty Treat ?</span></h2>
                            <p className="tasty__treat-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit amet fugiat earum assumenda distinctio laboriosam ea animi iure. Facilis deserunt, quasi laborum recusandae eaque provident qui eos nostrum quam suscipit?</p>
                            <ListGroup className="mt-4">
                                <ListGroupItem className="border-0 ps-0">
                                    <p className="choose__us-title d-flex align-items-center gap-2"><i class="ri-checkbox-circle-line"></i>Fresh and 
                                    tasty
                                    Foods </p>
                                    <p className="choose__us-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, deserunt?</p>
                                </ListGroupItem>

                                <ListGroupItem className="border-0 ps-0">
                                    <p className="choose__us-title d-flex align-items-center gap-2"><i class="ri-checkbox-circle-line"></i>Quality Support </p>
                                    <p className="choose__us-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, deserunt?</p>
                                </ListGroupItem>
                                <ListGroupItem className="border-0 ps-0">
                                    <p className="choose__us-title  d-flex align-items-center gap-2"><i class="ri-checkbox-circle-line"></i>Order From any Location </p>
                                    <p className="choose__us-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, deserunt?</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="pt-0">
         <Container>
            <Row>
                <Col lg="12" className="text-center mb-5 ">
                    <h2>Hot Pizza</h2>
                </Col>
                {
                    hotPizza.map(item =>(
                        <Col lg="3" md="4"key={item.id} >
                            <ProductCard item ={item}/>
                        </Col>
                    ))
                }
            </Row>
         </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="testimonial ">
                        <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                        <h2 className="testimonial__title mb-4">What Our <span>customers</span> are saying</h2>
                        <p className="testimonial__desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, recusandae voluptatibus! Rem magni eius quae sed quibusdam repellendus dolores nemo. Neque ab at atque commodi blanditiis nesciunt, quaerat doloribus cum.
                        </p>
                        <TestimonialSlider/>
                        </div>
                    </Col>
                    <Col lg="6" md="6">
                        <img src={networkImg} alt="testimonial-img" className="w-100"></img>
                    </Col>
                    
                </Row>
            </Container>
        </section>

    </Helmet>;
};
export default Home;