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
          <p className={classes.description}>Briseida is a software developer and firm believer in the power of flowers and plants. Her mom has been saving a rose Briseida gave her in kindergarden for the past 26 years and that kind of love just hits like a ton of bricks, doesn’t it? Pro-plants, pro-moms, pro-indigenous sovereignty and the fight for environmental justice they lead.</p>

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
          <p className={classes.description}>Hey there! My name is Breeann and I was part of the team that created FloraFile. I was really interested in this project was a combination of design-driven development and a passion for our natural resources. I loved to develop a new way to bring tech and nature together in an informative way.</p>
          <br/>

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
          <p>Nikki Kiga is a software engineer who appreciates clean data and straightforward tooling. She is an active member of the Oregon Mycological Society and can be found making circles in the forest on weekends. In her spare time, she enjoys sculpting in clay and Cinema 4d.</p>
          <br/>

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
          <p>Langston is a FullStack Developer and a Lover of all Plants.</p>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
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
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
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


