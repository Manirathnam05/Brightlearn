import React from 'react';
import "./Program.css";
import program_1 from "../../Assets/program-1.png";
import program_2 from "../../Assets/program-2.png";
import program_3 from "../../Assets/program-3.png";
import program_icon_1 from "../../Assets/program-icon-1.png";
import program_icon_2 from "../../Assets/program-icon-2.png";
import program_icon_3 from "../../Assets/program-icon-3.png";

const Program = () => {
    const Programed={graduate:"Graduation Degree",master:"Masters degree",post:"Post graduation"};
  return (
    <div className='programs container'>
        <div className='program '><img src={program_1} alt="Graduation Degree" className='img1' />
        <div className='program1 '>
            <img src={program_icon_1}/>
            <p>{Programed.graduate}</p>
        </div>
        </div>
        <div className='program'><img src={program_2} alt="Masters degree" />
        <div className='program1'>
            <img src={program_icon_2} className='img2'/>
            <p>{Programed.master}</p>
        </div></div>
        <div className='program'><img src={program_3} alt="" className='img3' />
        <div className='program1'>
            <img src={program_icon_3}/>
            <p>{Programed.post}</p>
        </div></div>
   
      
    </div>
  )
}

export default Program;
