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


    <div className={classes.pageTitleQuote}>
      <h1 className={classes.pageTitle}>Meet The Developers</h1>

      <div className={classes.aboutUsDiv}>
        
        {/* Briseida */}
        <div className={classes.individualPersonDiv}>
          <img src={BriseidaProfile} alt="" className={classes.aboutUsProfileImg} />
          
          <h3 className={classes.fullName}>Briseida </h3>
          <h4 className={classes.descriptionTitle}>FullStack Developer</h4>
          <p className={classes.description}>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

  
          <ul className={classes.socialMediaList}>
            <li className={classes.socialMediaLi}>
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
          <h3 className={classes.fullName}>Breeann</h3>
          <h4 className={classes.descriptionTitle}>FullStack Developer</h4>
          <p className={classes.description}>Hey there! My name is Breeann and I was part of the team that created FloraFile. I was really interested in this project was a combination of design-driven development and a passion for nature. I loved to develop a new way to bring tech and nature together in an informative way. </p>

          <ul className={classes.socialMediaList}>
            <li>
              <a href="https://github.com/breeannb">
                <img src={GithubIcon} alt="" className={classes.socialIconImg}/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/breeannbolinsky/" className={classes.aboutUsSocialLinks}>
                <img src={LinkedIcon} alt="" className={classes.socialIconImg}/>
              </a>
            </li>
          </ul>
          
        </div>

        {/* Nikki */} 
        <div className={classes.individualPersonDiv}>
          <img src={NikkiProfile} alt="" className={classes.aboutUsProfileImg}/>
          <h3 className={classes.fullName}>Nikki</h3>
          <h4 className={classes.descriptionTitle}>FullStack Developer</h4>
          <p>Lorem Ipsum has been the industyr standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

          <ul className={classes.socialMediaList}>
            <li>
              <a href="https://github.com/nikki-kiga">
                <img src={GithubIcon} alt="" className={classes.socialIconImg}/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nikkikiga/" className={classes.aboutUsSocialLinks}>
                <img src={LinkedIcon} alt="" className={classes.socialIconImg}/>
              </a>
            </li>
          </ul>

        </div>

        { /* Langston */} 
        <div className={classes.individualPersonDiv}>
          <img src={LangstonProfile} alt="" className={classes.aboutUsProfileImg}/>
          <h3 className={classes.fullName}>Langston</h3>
          <h4 className={classes.descriptionTitle}>FullStack Developer</h4>
          <p>Lorem Ipsum has been the industyr standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <ul className={classes.socialMediaList}>
            <li>
              <a href="https://github.com/langstonBS">
                <img src={GithubIcon} alt="" className={classes.socialIconImg}/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/langston-beckwith-stanley/" className={classes.aboutUsSocialLinks}>
                <img src={LinkedIcon} alt="" className={classes.socialIconImg}/>
              </a>
            </li>
          </ul>
        </div>

        {/* Rachel */} 
        <div className={classes.individualPersonDiv}>
          <img src={RachelProfile} alt="" className={classes.aboutUsProfileImg}/>
          <h3 className={classes.fullName}>Rachel</h3>
          <h4 className={classes.descriptionTitle}>FullStack Developer & Nature Nerd</h4>
          <p>A regular plant eater who is consistently nourished, surprised, and inspired by the natural world.</p>
          <ul className={classes.socialMediaList}>
            <li>
              <a href="https://github.com/PeepTheMoon">
                <img src={GithubIcon} alt="" className={classes.socialIconImg}/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/rachelmdonahue/" className={classes.aboutUsSocialLinks}>
                <img src={LinkedIcon} alt="" className={classes.socialIconImg}/>
              </a>
            </li>
          </ul>
  
        </div>
            
      </div>
    </div>
  );
}


