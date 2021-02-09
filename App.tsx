import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";

type Quest = {
  quest: string;
  image: NodeRequire;
  correct: string;
  answers: Array<string>;
};

export default function App() {
  const [questState, setQuest] = useState<Array<Quest>>([
    {
      quest: "1.De quem é a famosa frase “Penso, logo existo”?",
      image: require("./assets/undraw_Publish_article_re_3x8h.png"),
      correct: "Descartes",
      answers: [
        "a) Platão",
        "b) Galileu Galilei",
        "c) Descartes",
        "d) Sócrates",
        "e) Francis Bacon",
      ],
    },
    {
      quest: "2.De onde é a invenção do chuveiro elétrico?",
      image: require("./assets/undraw_Code_thinking_re_gka2.png"),
      correct: "Brasil",
      answers: [
        "a) França",
        "b) Inglaterra",
        "c) Brasil",
        "d) Austrália",
        "e) Itália",
      ],
    },
  ]);
  let [questIdexState, setIdexQuest] = useState<number>(0);
  let [questCorrectCount, setQuestCorrectCount] = useState<number>(0);
  let [alreadyHit, setAlreadyhit] = useState(["vazio"]);
  
  const checkQuestCorrect = useCallback(
    (questSelect: string) => {
      const conditionCorrect = questSelect.includes(
        questState[questIdexState].correct
      );
      let conditionCorrectAlreadyHit = false;
      for (const iterator of alreadyHit) {
        if (questSelect.includes(iterator)) {
          conditionCorrectAlreadyHit = true;
        }
      }
      if (conditionCorrectAlreadyHit) {
        return;
      }
      if (conditionCorrect) {
        setQuestCorrectCount(questCorrectCount + 1);
        setAlreadyhit([...alreadyHit, questSelect]);
      }
      if (questIdexState < questState.length - 1) {
        setIdexQuest(questIdexState + 1);
      }
      if (questIdexState == questState.length - 1) {
      }
    },
    [questIdexState]
  );

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.imgQuest}
          source={questState[questIdexState].image}
        ></Image>
      </View>

      <View style={styles.questContainer}>
        <Text style={styles.questTitle}>
          {questState[questIdexState].quest}
        </Text>

        {questState[questIdexState].answers.map((answer) => {
          return (
            <TouchableOpacity
              key={answer}
              onPress={() => {
                checkQuestCorrect(answer);
              }}
            >
              <View style={styles.answersContainer}>
                <Text style={styles.answers}>{answer}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <Button
            onPress={() => {
              if (questIdexState > 0) {
                setIdexQuest(questIdexState - 1);
              }
            }}
            title="Voltar"
          />
        </View>

        <View style={styles.btn}>
          {questIdexState == questState.length - 1 ? (
            <Button
              onPress={() => {
                console.log("finalizado exibir resultado");
              }}
              title="Finalizar"
            />
          ) : (
            <Button
              onPress={() => {
                if (questIdexState < questState.length - 1) {
                  setIdexQuest(questIdexState + 1);
                }
              }}
              title="Proximo"
            />
          )}
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  imgContainer: {
    marginTop: 30,
    marginBottom: 20,
  },
  imgQuest: {
    width: 350,
    height: 220,
    resizeMode: "stretch",
  },
  questContainer: {
    flex: 1,
    width: "100%",
  },
  questTitle: {
    marginBottom: 20,
    fontSize: 22,
    letterSpacing: 1,
  },
  answersContainer: {
    backgroundColor: "#ffb834",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  answers: {
    marginBottom: 10,
    marginTop: 10,
    fontSize: 19,
    letterSpacing: 1,
  },
  btnContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
  },
  btn: {
    width: 100,
  },
});
