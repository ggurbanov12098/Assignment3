import './Home.css';
import React from "react";

export default function Home(){
    return(
    <>
    <div className='gen-container'>
    <h1 className='gen-info'>The Internet Movie Database (IMDb) is an online database containing information and statistics about movies, TV shows as well as actors, directors and other film industry professionals.</h1>
    </div>
    <div className='projects-container'>
        <h2 className='project-title'> Projects done so far: </h2>
    </div>
    <div className='project-list'>
        <ul className='ul'>
            <li className='li'>
                Digital Card (<a className='aslan' target="_blank" rel='noreferrer' href='https://aslanibadullayevdev.github.io/digitalbusinesscard'>Aslan</a> / <a className='gabil' target="_blank" rel='noreferrer' href='https://ggurbanov12098.github.io/Digital_Card/'>Gabil</a> / <a className='leyla' target="_blank" rel='noreferrer' href='https://leylanovruzz.github.io/'>Leyla</a>)</li>
            <li className='li'>Weather App (<a className='aslan' target="_blank" rel='noreferrer' href='https://aslanibadullayevdev.github.io/weathertellerapphomepage'>Aslan</a> / <a className='gabil' target="_blank" rel='noreferrer' href='https://ggurbanov12098.github.io/Weather-Teller/'>Gabil</a> / <a className='leyla' target="_blank" rel='noreferrer' href='https://leylanovruzz.github.io/'>Leyla</a>)</li>
            {/* <li><a>IMDB Movie App</a></li> */}
        </ul>
    </div>


        <div className="container">
            <div className="AslanCard">
                <div className="header">
                    <div className="imageAslan"></div>
                </div>
                <div className="main-content">
                    <h1>Aslan Ibadullayev</h1>
                    <p className="status">CS Student</p>
                    <p className="email">aibadullayev14284@ada.edu.az</p>

                    <div className="messenger-buttons">
                        <a href='mailto:aibadullayev14284@ada.edu.az' className='email'>
                        <button className="messenger-email-button">
                        <span className="fa fa-envelope"></span>
                        <span>Email</span>
                        </button>
                        </a>
                        <a href='https://www.linkedin.com/in/aslan-ibadullayev-1633461a7/'>
                        <button className="messenger-linkedin-button">
                        <span><i className="fa fa-linkedin-square"></i></span>
                        <span>Linkedin</span> 
                        </button>
                        </a>
                    </div>

                    <div className="bio">
                        <h3>About</h3>
                        <p>I'm 3rd year student at ADA University. I'm fully focused on my goals.
                            God willingly, despite all hardships I face throughout my learning, my efforts will 
                            pay off at last.
                        <h3>Interests</h3>
                        <p>Reading books how to establish successful relations. Walking in evenings. Listening to music to
                            get relaxed. Watching movies and so on...
                        </p>
                        </p>
                    </div>
                </div>
                <footer>
                    <div className="soc-network-links">
                        <a href="https://t.me/oniichan_456" target="_blank" rel="noreferrer"><span className="fa fa-brands fa-telegram"></span></a>
                        <a href="https://www.facebook.com/aslan.ibadullayev.1/" target="_blank" rel="noreferrer"><span className="fa fa-brands fa-facebook"></span></a>
                        <a href="https://www.instagram.com/leonn___456/" target="_blank" rel="noreferrer"><span className="fa fa-brands fa-instagram"></span></a>
                        <a href="https://github.com/AslanIbadullayevDev" target="_blank" rel="noreferrer"><span className="fa fa-brands fa-github"></span></a>
                    </div>
                </footer>
            </div>

            <div className="GabilCard">
                <div className="header">
                    <div className="imageGabil"></div>
                </div>
                <div className="main-content">
                    <h1>Gabil Gurbanov</h1>
                    <p className="status">CS Student</p>
                    <p className="email">ggurbanov12098@ada.edu.az</p>
                    <div className="messenger-buttons">
                        <a href='mailto:ggurbanov12098@ada.edu.az' className='email'>
                        <button className="messenger-email-button">
                        <span className="fa fa-envelope"></span>
                        <span>Email</span>
                        </button>
                        </a>
                        <a href='https://www.linkedin.com/in/gabil-gurbanov-b183321a3/'>
                        <button className="messenger-linkedin-button">
                        <span><i className="fa fa-linkedin-square"></i></span>
                        <span>Linkedin</span> 
                        </button>
                        </a>
                    </div>
                    <div className="bio">
                        <h3>About</h3>
                        <p>I'm 3rd year student at ADA University. I'm fully focused on my goals.
                            God willingly, despite all hardships I face throughout my learning, my efforts will 
                            pay off at last.
                        <h3>Interests</h3>
                        <p>Reading books how to establish successful relations. Walking in evenings. Listening to music to
                            get relaxed. Watching movies and so on...
                        </p>
                        </p>
                    </div>
                </div>
                <footer>
                    <div className="soc-network-links">
                        <a href="https://t.me/ggurbanov" target="_blank" rel="noreferrer"><span className="fa fa-brands fa-telegram"></span></a>
                        <a href="https://www.facebook.com/qabil.qurbanov/" target="_blank" rel="noreferrer"><span className="fa fa-brands fa-facebook"></span></a>
                        <a href="https://www.instagram.com/_ggurbanov_/" target="_blank" rel="noreferrer"><span className="fa fa-brands fa-instagram"></span></a>
                        <a href="https://github.com/ggurbanov12098" target="_blank" rel="noreferrer"><span className="fa fa-brands fa-github"></span></a>
                    </div>
                </footer>
            </div>

            <div className="LeylaCard">
                <div className="header">
                    <div className="imageLeyla"></div>
                </div>
                <div className="main-content">
                    <h1>Leyla Novruzova</h1>
                    <p className="status">CS Student</p>
                    <p className="email">lnovruzova11983@ada.edu.az</p>
                    <div className="messenger-buttons">
                        <a href='mailto:lnovruzova11983@ada.edu.az' className='email'>
                        <button className="messenger-email-button">
                        <span className="fa fa-envelope"></span>
                        <span>Email</span>
                        </button>
                        </a>
                        <a href='https://www.linkedin.com/in/leylanovruz/?originalSubdomain=az'>
                        <button className="messenger-linkedin-button">
                        <span><i className="fa fa-linkedin-square"></i></span>
                        <span>Linkedin</span> 
                        </button>
                        </a>
                    </div>
                    <div className="bio">
                        <h3>About</h3>
                        <p>I'm 3rd year student at ADA University. I'm fully focused on my goals.
                            God willingly, despite all hardships I face throughout my learning, my efforts will 
                            pay off at last.
                        <h3>Interests</h3>
                        <p>Reading books how to establish successful relations. Walking in evenings. Listening to music to
                            get relaxed. Watching movies and so on...
                        </p>
                        </p>
                    </div>
                </div>
                <footer>
                    <div className="soc-network-links">
                        <a href="https://t.me/dojoflix" target="_blank" rel="noreferrer"><span className="fa fa-brands fa-telegram"></span></a>
                        <a href="https://www.facebook.com/profile.php?id=100077252775693" target="_blank" rel="noreferrer"><span className="fa fa-brands fa-facebook"></span></a>
                        {/* <a href="" target="_blank" rel="noreferrer"><span className="fa fa-brands fa-instagram"></span></a> */}
                        <a href="https://github.com/leylanovruzz" target="_blank" rel="noreferrer"><span className="fa fa-brands fa-github"></span></a>
                    </div>
                </footer>
            </div>
        </div>
    </>
    );
}