import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonLabel,
} from "@ionic/react";
import React from "react";

export const Menu = () => {
  return (
    <IonMenu side="start" contentId="main" >
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle auto-hide="true">
            <IonItem button routerLink={"/home"} routerDirection="none">
              <IonLabel>Home</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle auto-hide="true">
            <IonItem button routerLink={"/about"} routerDirection="none">
              <IonLabel>About</IonLabel>
            </IonItem>
            <IonItem button routerLink={"/contact"} routerDirection="none">
              <IonLabel>Contact</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
