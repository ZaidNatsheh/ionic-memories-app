import React from "react";
import { IonButtons, IonButton, IonIcon } from "@ionic/react";

const ToolBarAction: React.FC<{ link: string; icon: string }> = (props) => {
  return (
    <IonButtons slot="end">
      <IonButton routerLink={props.link}>
        <IonIcon slot="icon-only" icon={props.icon} />
      </IonButton>
    </IonButtons>
  );
};

export default ToolBarAction;
