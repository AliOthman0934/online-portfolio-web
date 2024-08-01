import React, {useEffect, useRef} from 'react'
import Header from '../Header/Header'
import './Projects.css'
import arrow from '../../Assets/arrow.svg'
import GetInTouch from '../GetInTouch/GetInTouch'
import Footer from '../Footer/Footer'
import gsap from 'gsap'
import img1 from "../../Assets/pro1.png"
import img2 from "../../Assets/ScreenShot_23_06_2024_17_01_56.png"
import img3 from "../../Assets/Gif_13_07_2024_20_27_02.gif"
import img4 from "../../Assets/ScreenShot_23_06_2024_17_07_37.jpg"
import img5 from "../../Assets/img ge.jpg"
import img6 from "../../Assets/shoes page.png"
import img7 from "../../Assets/ScreenShot_23_06_2024_16_40_03.png"

function Projects() {
    const timeline_project = gsap.timeline();
    let text1 = useRef(null)
    let itemsProject = useRef(null)
    useEffect(() => {
        timeline_project.from(text1, {
            duration: 1,
            skewY: 10,
            y: 500,
            delay: 2,
            stagger: {
                amount: .4
            },
            opacity: 0
        }, "-=1.5");
        timeline_project.from(itemsProject, {
        duration: .5,
        opacity: 0,
        y: 100
    })
    })
    
    return (
        <div>
            <Header timeline={timeline_project}/>
            <div className="project-page">
                <div className="my-projects">
                    <h1 ref={ el => text1 = el }>
                        projects
                    </h1>
                </div>
                <div className="project-page-container">
                    <div className="project-page-items" ref={el => itemsProject = el}>
                        <div className="project-page-item">
                            {/* <div className="project-page-item-number">
                                <p>2024</p>
                            </div> */}
                            <a href="/" target='blank'>
                                <div className="project-page-item-header">
                                    {/* <h1>Personal portfolio</h1> */}
                                    <span >Personal portfolio</span>
                                    <span >2024</span>
                                </div>
                                <div className="project-page-item-image project-page-item-image1">
                                    <img src={img1} alt='nmj' className='project-img'></img>
                                </div>
                                <div className="project-page-item-footer">
                                    <a href='https://github.com/AliOthman0934/Portfolio'target='blank'>Checkout the code on GitHub</a>
                                    <img src={arrow} alt="" />
                                </div>
                            </a>
                        </div>
                        <div className="project-page-item">
                            {/* <div className="project-page-item-number">
                                <p>2024</p>
                            </div> */}
                            <a href="https://c46-group-b-4e426f6bf421.herokuapp.com/" target='blank'>
                                <div className="project-page-item-header">
                                    {/* <h1>HomeSwap</h1> */}
                                    <span >HomeSwap</span>
                                    <span >2024</span>
                                </div>
                                <div className="project-page-item-image project-page-item-image2">
                                    <img src={img2} alt='' className='project-img'></img>
                                </div>
                                <div className="project-page-item-footer">
                                    <a href='/'target='blank'>Checkout the code on GitHub</a>
                                    <img src={arrow} alt="" />
                                </div>
                            </a>
                        </div>
                        <div className="project-page-item">
                            {/* <div className="project-page-item-number">
                                <p>2024</p>
                            </div> */}
                            <a href="https://bookhub-alpha.vercel.app/book" target='blank'>
                                <div className="project-page-item-header">
                                    {/* <h1>BookHub</h1> */}
                                    <span >BookHub</span>
                                    <span >2024</span>
                                </div>
                                <div className="project-page-item-image project-page-item-image3">
                                    <img src={img3} alt='' className='project-img'></img>
                                </div>
                                <div className="project-page-item-footer">
                                    <a href='https://github.com/AliOthman0934/Library-Search-API'target='blank'>Checkout the code on GitHub</a>
                                    <img src={arrow} alt="" />
                                </div>
                            </a>
                        </div>
                        <div className="project-page-item">
                            {/* <div className="project-page-item-number">
                                <p>2023</p>
                            </div> */}
                            <a href="https://green-club-topaz.vercel.app/" target='blank'>
                                <div className="project-page-item-header">
                                    {/* <h1>Green Social Clup</h1> */}
                                    <span >Green Social Club</span>
                                    <span >2023</span>
                                </div>
                                <div className="project-page-item-image project-page-item-image4">
                                    <img src={img4} alt=''className='project-img'></img>
                                </div>
                                <div className="project-page-item-footer">
                                    <a href='https://github.com/AliOthman0934/My-green-social-club'target='blank'>Checkout the code on GitHub</a>
                                    <img src={arrow} alt="" />
                                </div>
                            </a>
                        </div>
                        <div className="project-page-item">
                            {/* <div className="project-page-item-number">
                                <p>2023</p>
                            </div> */}
                            <a href="https://tiny-swan-81124f.netlify.app/" target='blank'>
                                <div className="project-page-item-header">
                                    {/* <h1>Image Generator</h1> */}
                                    <span >Image Generator</span>
                                    <span >2023</span>
                                
                                </div>
                                <div className="project-page-item-image project-page-item-image5">
                                    <img src={img5} alt='' className='project-img'></img>
                                </div>
                                <div className="project-page-item-footer">
                                    <a href='https://github.com/AliOthman0934/APIs-Project'target='blank'>Checkout the code on GitHub</a>
                                    <img src={arrow} alt="" />
                                </div>
                            </a>
                        </div>

                        <div className="project-page-item">
                            {/* <div className="project-page-item-number">
                                <p>2023</p>
                            </div> */}
                            <a href="https://curious-blancmange-710ac0.netlify.app/" target='blank'>
                                <div className="project-page-item-header">
                                    {/* <h1>HYF Quiz</h1> */}
                                    <span >HYF Quiz</span>
                                    <span >2023</span>
                                </div>
                                <div className="project-page-item-image project-page-item-image7">
                                    <img src={img7} className='project-img' alt='' ></img>
                                </div>
                                <div className="project-page-item-footer">
                                    <a href='https://github.com/AliOthman0934/Quiz-Application' target='blank'>Checkout the code on GitHub</a>
                                    <img src={arrow} alt="" />
                                </div>
                            </a>
                        </div>

                        <div className="project-page-item">
                            {/* <div className="project-page-item-number">
                                <p>2023</p>
                            </div> */}
                            <a href="/">
                                <div className="project-page-item-header">
                                    {/* <h1>Shoes Website</h1> */}
                                    <span >Shoes Website</span>
                                    <span >2023</span>
                                </div>
                                <div className="project-page-item-image project-page-item-image6">
                                    <img src={img6} alt='' className='project-img'></img>
                                </div>
                                <div className="project-page-item-footer">
                                    <a href='https://github.com/AliOthman0934/Shoes-website'target='blank'>Checkout the code on GitHub</a>
                                    <img src={arrow} alt="" />
                                </div>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <GetInTouch />
            <Footer />
        </div>
    )
}

export default Projects
