import React, { useRef } from 'react';
import "./Testimonial.css";
import next_icon from "../../Assets/next-icon.png";
import back_icon from "../../Assets/back-icon.png";
import user_1 from "../../Assets/user-1.png";
import user_2 from "../../Assets/user-2.png";
import user_3 from "../../Assets/user-3.png";
import user_4 from "../../Assets/user-4.png";

const Testimonial = () => {

    const slider = useRef();
    let tx = 0;

    const forward = () => {
        if (tx > -50) {
            tx -= 25; 
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    const backward = () => {
        if (tx < 0) {
            tx += 25; 
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    return (
        <div className='testimonial'>
            <img src={next_icon} className='nexticon' onClick={forward} />
            <img src={back_icon} className='backicon' onClick={backward} />
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_1} className='user1' />
                                <div>
                                    <h3>Emily Williams 1 </h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_2} className='user1' />
                                <div>
                                    <h3>William Jackson 2</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_3} className='user1' />
                                <div>
                                    <h3>Jasmine Mary 3</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_4} className='user1' />
                                <div>
                                    <h3>Jackson Rob 4</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonial;
