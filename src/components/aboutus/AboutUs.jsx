import React from 'react';
import BriseidaProfile from '../../../images/profileimages/briseida.jpg';
import BreeannProfile from '../../../images/profileimages/breeann.jpg';
import NikkiProfile from '../../../images/profileimages/nikki.jpg';
import RachelProfile from '../../../images/profileimages/rachel.jpg';
import LangstonProfile from '../../../images/profileimages/langston.jpg';
import GithubIcon from '../../../images/socialicons/github.jpg';
import LinkedIcon from '../../../images/socialicons/linkedin.jpg';

export default function AboutUs() {
  return (
    <div>
      <h1>About Us Page</h1>

      <div>
        <img src={BriseidaProfile} alt="" />
        <h3>Briseida </h3>
        <p>Description:</p>
        <img src={GithubIcon} alt="" />
        <p>Github: https://github.com/bpagador</p>
        <img src={LinkedIcon} alt="" />
        <p>Linkedin: https://www.linkedin.com/in/briseida-pagador/</p> <p>Portfolio: </p>
      </div>

      <div>
        <img src={BreeannProfile} alt="" />
        <h3>Breeann</h3>
        <p>Description: Hey there! My name is Breeann and I was part of the team that created FloraFile. I was really interested in this project was a combination of design-driven development and a passion for nature. I loved to develop a new way to bring tech and nature together in an informative way. </p>
        <img src={GithubIcon} alt="" />
        <p>Github: https://github.com/breeannb</p>
        <img src={LinkedIcon} alt="" />
        <p>Linkedin: https://www.linkedin.com/in/breeannbolinsky/</p>
      </div>

      <div>
        <img src={NikkiProfile} alt="" />
        <h3>Nikki</h3>
        <p>Description:  </p>
        <img src={GithubIcon} alt="" />
        <p>Github: https://github.com/nikki-kiga</p>
        <img src={LinkedIcon} alt="" />
        <p>Linkedin: https://www.linkedin.com/in/nikkikiga/</p>
        <p>Portfolio: </p>
      </div>

      <div>
        <img src={LangstonProfile} alt="" />
        <h3>Langston</h3>
        <p>Description:  </p>
        <img src={GithubIcon} alt="" />
        <p>Github: https://github.com/orgs/GOATDreamTeam/people/langstonBS</p>
        <img src={LinkedIcon} alt="" />
        <p>Linkedin: https://www.linkedin.com/in/langston-beckwith-stanley/</p>
        <p>Portfolio: </p>
      </div>

      <div>
        <img src={RachelProfile} alt="" />
        <h3>Rachel</h3>
        <p>Description:  </p>
        <img src={GithubIcon} alt="" />
        <p>Github: https://github.com/PeepTheMoon</p>
        <img src={LinkedIcon} alt="" />
        <p>Linkedin: https://www.linkedin.com/in/rachelmdonahue/</p>
        <p>Portfolio: </p>
      </div>
            
    </div>
  );
}


