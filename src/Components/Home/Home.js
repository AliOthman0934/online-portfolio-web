import React, { useEffect, useRef } from 'react'
import './Home.css'
import Header from '../Header/Header';
// import SAM from "../Assets/svgviewer-output.svg"
// import another from '../Assets/another.svg'
import arrow from '../../Assets/arrow.svg'
import { Link } from 'react-router-dom';
import GetInTouch from '../GetInTouch/GetInTouch';
import Footer from '../Footer/Footer';
import gsap from 'gsap';
function Home() {
    let text1 = useRef(null)
    let text2 = useRef(null)
    let text3 = useRef(null)
    let text4 = useRef(null)
    let p1 = useRef(null)

    const timeline_home = gsap.timeline();
    useEffect(() => {
        timeline_home.from([text1, text2, text3, text4], {
            duration: 1,
            skewY: 15,
            y: 400,
            stagger: {
                amount: .2
            }
        }, "-=1.2")
        timeline_home.from(p1, {
            duration: .6,
            x: -100,
            delay: .2,
            opacity: 0
        })
    }, [timeline_home])
    return (
        <div className='home'>
            <Header timeline={timeline_home} />
            <div className='main-container'>
                <div className="container">
                    <div className="container1">
                        <div className="txt-line" id='taimoor'>
                            <p ref={el => text1 = el}>Ali</p>
                        </div>
                        <div className="txt-line line-bottom" id="shahzada">
                            <p ref={el => text2 = el}>Othman</p>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className="left-side-quote">
                    <p ref={el => p1 = el}> I am a full-stack web developer <br /> who creates dynamic digital experiences, <br />employing my architectural background.</p>
                </div>
                <div className="container">
                    <div></div>
                    <div className="container1">
                        <div className="txt-line" id="digital">
                            <p ref={el => text3 = el}>Web</p>
                        </div>
                        <div className="txt-line line-bottom" id="designer">
                            <p ref={el => text4 = el}>Developer</p>
                        </div>
                    </div>
                </div>
                {/* <div className="flower-svg">
                    <img src={SAM} alt="" />
                </div> */}
            </div>
            
            <div className="my-skills-main-reel">
                <div className="my-skills-reel" id="skill-reel">
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                </div>
                <div className="skill-set-boxes">
                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1">HTML5</h1>
                        <p className="skill-set-box-p">HTML5 is a markup language used for structuring and presenting hypertext documents on the World Wide Web</p>
                    </div>
                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1">CSS</h1>
                        <p className="skill-set-box-p">A style sheet language used for specifying the presentation and styling of a document written in a markup language </p>
                    </div>
                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1"> CLI</h1>
                        <p className="skill-set-box-p">A command-line interface is a means of interacting with a computer program by inputting lines of text called command-lines</p>
                    </div>

                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1">GitHub</h1>
                        <p className="skill-set-box-p">GitHub is a developer platform that allows developers to create, store, manage and share their code</p>
                    </div>

                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1">javascript</h1>
                        <p className="skill-set-box-p"> A programming language and core technology of the Web</p>
                    </div>

                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1">React.js</h1>
                        <p className="skill-set-box-p">A free and open-source front-end JavaScript library for building user interfaces</p>
                    </div>

                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1">Greensock - GSAP</h1>
                        <p className="skill-set-box-p">A framework-agnostic JavaScript animation library that turns developers into animation superheroes</p>
                    </div>

                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1">Node.js</h1>
                        <p className="skill-set-box-p">A cross-platform, open-source JavaScript runtime environment </p>
                    </div>

                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1">MySQL</h1>
                        <p className="skill-set-box-p">An open-source relational database management system</p>
                    </div>

                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1">MongoDB</h1>
                        <p className="skill-set-box-p"> A source-available, crossplatform, documentoriented database program</p>
                    </div>

                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1">Sass</h1>
                        <p className="skill-set-box-p">Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheet</p>
                    </div>

                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1">Figma</h1>
                        <p className="skill-set-box-p">Figma is a collaborative web application for interface design</p>
                    </div>
                </div>
                
                <div className="project-and-work">
                    <h1>
                        <Link className="h1-project" to="/projects">
                            Check Out My Projects <img src={arrow} alt="" />
                        </Link>
                    </h1>
                    <hr className='line' />
                    <br />

                </div>
                <GetInTouch />
                <Footer />
            </div>
        </div>
    )
}

export default Home
