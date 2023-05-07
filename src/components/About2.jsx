import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const About2 = () => {
    return ( 
        <div className="flex gap-5  items-center direction-column" >
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
                {/* <div>
                <button className="mt-4 text-secondary outline outline-offset-2 rounded-lg  outline-2 py-2 px-4 hover:text-[#fff]">RESUME</button>
            </div> */}
            </div>  

            </div>

            {/* <div className="relative pr-4  w-1/2 h-96">
                <div className="absolute mt-[-25] mb-16 z-[-1] w-96 h-full outline outline-4">
                </div>
            <img src="profilepic.jpg" alt="" className="absolute z-1 object-cover w-4/5 h-4/5" />
            </div> */}

            <div>
              
            </div>
        </div>
     );
}
 
export default SectionWrapper(About2,'about');