import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons } from '@ionic/react';
import React from 'react';
import './Home.css';
import { NavButtons } from '../components/NavButtons';

const Home: React.FC = () => {
  return (

    <IonPage className='home'>
      <IonHeader>

        <IonToolbar>
          <IonTitle className='title'>Online Profile</IonTitle>
          <IonButtons slot="start">
            <NavButtons/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>


      <IonContent fullscreen>

      <div className="split left">

          <img src="/assets/images/picture1.jpg" className='profileImg'/>

      </div>

      <div className="vl"></div>

      <div className="split right">


      <p className='welcome-p'>
          Welcome, to my first React Ionic framework assigment. In this site I will showcasing who I am technically and personally.
      <br/>
      Please enjoy!!!
      </p>

      </div>
  
      </IonContent>

    </IonPage>
  );
};

export default Home;
