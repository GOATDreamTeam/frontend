import React from 'react';
import BriseidaProfile from '../../../images/profileimages/briseida.jpg';
import BreeannProfile from '../../../images/profileimages/breeann.jpg';
import NikkiProfile from '../../../images/profileimages/nikki.jpg';
import RachelProfile from '../../../images/profileimages/rachel.jpg';
import LangstonProfile from '../../../images/profileimages/langston.jpg';
import GithubIcon from '../../../images/socialicons/github.jpg';
import LinkedIcon from '../../../images/socialicons/linkedin.jpg';
import { useAccessibility } from '../../hooks/appContext';
import { useAboutUsStyles } from '../../hooks/aboutUsStyles';

export default function AboutUs() {

  const { theme } = useAccessibility();
  const classes = useAboutUsStyles(theme);

  return (
    <div className={classes.aboutUsDiv}>
      <h1>Meet The Developers Behind FloraFile</h1>
      <p>"The strength of the team is each individual member. The strength of each member is the team." – Phil Jackson</p>
      <div className={classes.aboutUsDiv}>
        
        {/* Briseida */}
        <div className={classes.individualPersonDiv}>
          <img src={BriseidaProfile} alt="" className={classes.aboutUsProfileImg} />
          
          <div>
            <h1>Briseida </h1>
            <p>FullStack Developer</p>
          </div>
  
          <ul className={classes.socialMediaList}>
            <li>
              <a href="https://github.com/bpagador">
                <img src={GithubIcon} alt="" className={classes.socialIconImg}/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/briseida-pagador/" className={classes.aboutUsSocialLinks}>
                <img src={LinkedIcon} alt="" className={classes.socialIconImg}/>
              </a>
            </li>

          </ul>
        </div>
        
        {/* Breeann */}
        <div className={classes.individualPersonDiv}>
          <img src={BreeannProfile} alt="" className={classes.aboutUsProfileImg}/>
          <h3>Breeann</h3>
          <p>Description: Hey there! My name is Breeann and I was part of the team that created FloraFile. I was really interested in this project was a combination of design-driven development and a passion for nature. I loved to develop a new way to bring tech and nature together in an informative way. </p>
          <img src={GithubIcon} alt="" className={classes.socialIconImg}/>
          <p>Github: https://github.com/breeannb</p>
          <img src={LinkedIcon} alt="" className={classes.socialIconImg}/>
          <p>Linkedin: https://www.linkedin.com/in/breeannbolinsky/</p>
        </div>

        {/* Nikki */} 
        <div className={classes.individualPersonDiv}>
          <img src={NikkiProfile} alt="" className={classes.aboutUsProfileImg}/>
          <h3>Nikki</h3>
          <p>Description:  </p>
          <img src={GithubIcon} alt="" className={classes.socialIconImg}/>
          <p>Github: https://github.com/nikki-kiga</p>
          <img src={LinkedIcon} alt="" className={classes.socialIconImg}/>
          <p>Linkedin: https://www.linkedin.com/in/nikkikiga/</p>
          <p>Portfolio: </p>
        </div>

        { /* Langston */} 
        <div className={classes.individualPersonDiv}>
          <img src={LangstonProfile} alt="" className={classes.aboutUsProfileImg}/>
          <h3>Langston</h3>
          <p>Description:  </p>
          <img src={GithubIcon} alt="" className={classes.socialIconImg}/>
          <p>Github: https://github.com/orgs/GOATDreamTeam/people/langstonBS</p>
          <img src={LinkedIcon} alt="" className={classes.socialIconImg}/>
          <p>Linkedin: https://www.linkedin.com/in/langston-beckwith-stanley/</p>
          <p>Portfolio: </p>
        </div>

        {/* Rachel */} 
        <div className={classes.individualPersonDiv}>
          <img src={RachelProfile} alt="" className={classes.aboutUsProfileImg}/>
          <h3>Rachel</h3>
          <p>Description:  </p>
          <img src={GithubIcon} alt="" className={classes.socialIconImg}/>
          <p>Github: https://github.com/PeepTheMoon</p>
          <img src={LinkedIcon} alt="" className={classes.socialIconImg}/>
          <p>Linkedin: https://www.linkedin.com/in/rachelmdonahue/</p>
          <p>Portfolio: </p>
        </div>
            
      </div>
    </div>
  );
}


