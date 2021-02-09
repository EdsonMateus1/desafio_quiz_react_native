import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { quest } from "./utils/quest_array";
import { styles } from "./styles/styles";

type Quest = {
  quest: string;
  image: NodeRequire;
  correct: string;
  answers: Array<string>;
};

export default function App() {
  const [questState, setQuest] = useState<Array<Quest>>(quest);
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
    },
    [questIdexState]
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
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
                  if (questIdexState < questState.length - 1) {
                    setIdexQuest(questIdexState + 1);
                  }
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
              color="#f3be6f"
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
                color="#ff9b00"
                onPress={() => {
                  console.log("finalizado exibir resultado");
                }}
                title="Finalizar"
              />
            ) : (
              <Button
                color="#ff9b00"
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
    </SafeAreaView>
  );
}
