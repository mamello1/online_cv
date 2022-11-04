import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons } from '@ionic/react';
import React from 'react';
import { CreateAnimation} from '@ionic/react';
import './Contact.css';
import { NavButtons } from '../components/NavButtons';
import { IonIcon } from '@ionic/react';

const Contact: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title">Contact Information</IonTitle>
          <IonButtons slot="start">
            <NavButtons/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

          <p className='contact-content'>
            
         

          
                <a className="contact" href="mailto:patiencemitane@gmail.com" rel="nofolow">
                  
                {/* <ion-icon name="mail-outline"></ion-icon> */}
                    

                    <p>Email Address: patiencemitane@gmail.com</p>
                </a>
            

            

                <a className="contact" href="tel:+27843932468" target="_blank" rel="nofollow">

                {/* <ion-icon name="call"></ion-icon> */}

                    <p>Contact Detail:+27843932468</p>
                </a>
            
           
                <a className="contact" href="https://www.linkedin.com/resume-builder/urn:li:fs_memberResume:6721665/" target="_blank" rel="nofollow">

                {/* <ion-icon name="logo-linkedin"></ion-icon> */}

                    <p>LinkedIn Profile:https://www.linkedin.com/in/mamello-mitane-102216196</p>
                </a>

           

            

                <a className="contact" href="https://wa.link/fxviyg" target="_blank" rel="nofollow">

                {/* <ion-icon name="logo-whatsapp"></ion-icon> */}

                    <p>WhatsApp Contact:+27843932468</p>
                </a> 

            
  
          </p>
       
      

          
      </IonContent>
    </IonPage>
  );
};

export default Contact;
