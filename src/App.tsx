import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Theme variables */
import About from './pages/About';
import { Menu } from './components/Menu';
import Contact from './pages/Contact';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Menu/>
      <IonRouterOutlet  id="main">
        <Route path="/home" component={Home} exact={true} />
        <Route path="/about" component={About} exact={true} />
        <Route path="/contact" component={Contact} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
