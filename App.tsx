import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

type Quest = {
  quest: string;
  img: string,
  answers: Array<string>;
};

export default function App() {
  const [questState, setQuest] = useState<Array<Quest>>([
    {
      quest: "1.pergunta do quiz",
      img: "./assets/undraw_Publish_article_re_3x8h.png",
      answers: [
        "a) pergunta do quiz",
        "b) pergunta do quiz",
        "c) pergunta do quiz",
        "d) pergunta do quiz",
        "e) pergunta do quiz",
      ],
    },
    {
      quest: "2.pergunta do quiz",
      img: "",
      answers: [
        "a) pergunta do quiz",
        "b) pergunta do quiz",
        "c) pergunta do quiz",
        "d) pergunta do quiz",
        "e) pergunta do quiz",
      ],
    },
  ]);
  let [questIdexState, setIdexQuest] = useState<number>(0);

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>

        <Image
          style={styles.imgQuest}
          source={require('./assets/undraw_Publish_article_re_3x8h.png')}
        ></Image>

      </View>
      <View style={styles.questContainer}>
        <Text style={styles.questTitle}>
          {questState[questIdexState].quest}
        </Text>

        {questState[questIdexState].answers.map((quest) => {
          return (
            <TouchableOpacity>
              <Text style={styles.answers}>{quest}</Text>
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
          <Button
            onPress={() => {
              if (questIdexState < questState.length - 1) {
                setIdexQuest(questIdexState + 1);
              }
            }}
            title="Proximo"
          />
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
    marginTop: 50,
    marginBottom: 20,
  },
  imgQuest: {
    width: 350,
    height: 350,
  },
  questContainer: {
    flex: 1,
    width: "100%",
  },
  questTitle: {
    marginBottom: 40,
    fontSize: 18
  },
  answers: {
    marginBottom: 10,
    marginTop: 10,
    fontSize: 14
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
