import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonImg } from '@ionic/react';
import React from 'react';
import { CreateAnimation} from '@ionic/react';
import './About.css';
import { NavButtons } from '../components/NavButtons';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className = "title">Individual Information</IonTitle>
          <IonButtons slot="start">
            <NavButtons/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        

        <div className="split left">

        <div className="row">

          <div className="column">

           
              <img src="/assets/images/picture2.jpg" className='profileImg'/>

              <img src="/assets/images/picture3.jpg" className='profileImg'/>

              <img src="/assets/images/picture4.jpg" className='profileImg'/>

          
          </div>

          <div className="column">

              <img src="/assets/images/picture5.jpg" className='profileImg' />

              <img src="/assets/images/picture6.jpg" className='profileImg'/>

              <img src="/assets/images/picture8.jpg" className='profileImg'/>

           </div>
          
          </div>

          </div>


          <div className="vl"></div>
          

          <div className="split right">

            <div className="centered">

              <p className='about-content'>
            
                Hello my name is Mamello Mitane and I am a humble, hard-working, driven and optimistic individual who is intrigued by the ever- changing field of technology and its impact in the world. 
                I reside in a town called Vanderbijlpark, which is basically where I was born and bred.
                <br/>
           
                I completed my tertiary journey at an institution currently known as Eduvos,
                 which is where I obtained and completed two qualifications which are: <br/>

                <ul>

                <li>Higher Certificate(HC) in Information Systems(IS) in Information Technology(IT) </li>
                <li>Bachelor of Science Degree(BSc) in Information Technology (IT)</li>

                </ul>
           
                I pride myself on working hard, being productive, providing quality work and becoming an asset to an organisation I join, 
                being all of the above as well as also enjoying myself. I truly enjoy working and interacting with other individuals as
                this allows me to become part of a team, learn, grow and gain more knowledge from others.
                <br/>

                <u>Apart from the professional aspect of my life  I enjoy the following activities listed below: </u>
                <br/>

                <ul>

                <li>Reading fantasy based novels.</li>
                <li>Watching anime, documentaries and movies.</li>
                <li> Working out and hiking.</li>
                <li>Going out on solo dates</li>
                <li>Listening to music</li>

                </ul>

                <u>Reason why I would like to become a developer at SovTech include:</u><br/>

                <ul>

                <li>Apart from being one of the leading software development companies in the world, I believe that the company would provide me with
                  an environment that would enable me to be challenged while simultaneously allowing me to grow and learn from.</li>
                  <br/>
                <li>Based on the SovTech Spex mentioned , I truly resonated with the authentic energy that was given off ,
                  which I believe is quite important for any if not every company to exude. It allows employees to feel more like family
                  and contributes to overall energy and wellbeing of people.
                </li>
                <br/>
                <li>Lastly to honestly top it all off it just seems like an awesome environment to reside in.</li>
                </ul>

              </p>
          </div>
        </div>
      
                
      </IonContent>
    </IonPage>
  );
};

export default About;
