import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  isPlatform,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import MemoriesList from "../components/MemoriesList";
import { add } from "ionicons/icons";
import { Memory } from "../data/memories-context";
import FixedBottomFab from "./FixedBottomFab";
import ToolBarAction from "./ToolBarAction";

const MemoriesContent: React.FC<{
  title: string;
  fallbackText: string;
  memories: Memory[];
}> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{props.title}</IonTitle>
          {isPlatform("ios") && <ToolBarAction link="/new-memory" icon={add} />}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {props.memories.length === 0 && (
            <IonRow>
              <IonCol>
                <h2>{props.fallbackText}</h2>
              </IonCol>
            </IonRow>
          )}
          <MemoriesList items={props.memories} />
        </IonGrid>
        {!isPlatform("ios") && <FixedBottomFab icon={add} link="/new-memory" />}
      </IonContent>
    </IonPage>
  );
};

export default MemoriesContent;
