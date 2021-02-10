import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { quest } from "./utils/quest_array";
import { styles } from "./styles/styles";
import { Answer } from "./widgets/answer";

type Quest = {
  quest: string;
  image: NodeRequire;
  correct: string;
  answers: Array<string>;
};

export default function App() {
  const [questState, setQuest] = useState<Array<Quest>>(quest);
  let [resultState, setResult] = useState(true);
  let [questIdexState, setIdexQuest] = useState<number>(0);
  let [answerIdexState, setIdexanswer] = useState<number>(0);
  let [questCorrectCount, setQuestCorrectCount] = useState<number>(0);
  let [alreadyHit, setAlreadyhit] = useState(["vazio"]);

  useEffect(() => {
    setQuest(quest);
  }, []);

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

  const reset = useCallback(() => {
    setAlreadyhit((alreadyHit = ["vazio"]));
    setIdexQuest((questIdexState = 0));
    setQuestCorrectCount((questCorrectCount = 0));
    setResult((resultState = false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {resultState ? (
        <View style={styles.containerResult}>
          <View style={styles.containerResultTitle}>
            <Text style={styles.ResultTitle}>Você acertou</Text>
            <Text style={styles.Result}> {questCorrectCount} </Text>
            <Text style={styles.ResultTitle}>questoes</Text>
          </View>
          <Button
            color="#ff9b00"
            onPress={() => {
              return reset();
            }}
            title="Voltar ao inicio"
          />
        </View>
      ) : (
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

            {questState[questIdexState].answers.map((answer, index) => {
              return (
                <Answer
                  style={[
                    false
                      ? styles.answersContainerCheck
                      : styles.answersContainer,
                  ]}
                  answer={answer}
                  key={answer}
                  onPressAnswer={() => {
                    checkQuestCorrect(answer);
                    if (questIdexState < questState.length - 1) {
                      setIdexQuest(questIdexState + 1);
                    }
                  }}
                ></Answer>
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
                    return setResult(true);
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
        </View>
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
