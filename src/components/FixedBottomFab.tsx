import React from 'react'
import {
    IonIcon,
    IonFab,
    IonFabButton,
  } from "@ionic/react";

const FixedBottomFab : React.FC <{icon : string; link:string}>= props => {
    return (
        <IonFab horizontal="end" vertical="bottom" slot="fixed">
        <IonFabButton routerLink={props.link}>
            <IonIcon icon={props.icon} />
        </IonFabButton>
    </IonFab>
    )
}

export default FixedBottomFab
