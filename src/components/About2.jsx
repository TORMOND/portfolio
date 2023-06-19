import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { Resume } from "../assets";


const About2 = () => {
    return ( 
        <div className="flex gap-5 flex-col lg:flex-row" >
            <div>
            <h3 className={styles.sectionHeadText}>About</h3>
              <div>
                <p  className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
                I'm a skilled software developer with experience in 
        JavaScript, and expertise in frameworks like React, Node.js, Vue.js and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
                </p>
                <div className="mt-4">            
                <a href={Resume} className="mt-4 text-secondary outline outline-offset-2 rounded-lg  outline-2 py-2 px-4 hover:text-[#fff]" download>Download CV</a>
            </div>
            </div>  

            </div>

            <div className="relative h-40 w-full lg:w-1/2">
                <div className="loader"></div>
                <div className="loader"></div>
                <div className="loader"></div>
            </div>

           
        </div>
     );
}
 
export default SectionWrapper(About2,'about');