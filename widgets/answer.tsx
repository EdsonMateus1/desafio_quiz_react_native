import React, { useState, useEffect, useCallback } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { styles } from "../styles/styles";

interface Props {
  onPressAnswer: Function;
  answer: string;
}

export const Answer: React.FC<Props> = ({ onPressAnswer, answer }) => {
  // let [answerState, setanswer] = useState(answer);  // implementar estilo na pergunta que foi selecionada

  return (
    <TouchableOpacity
      onPress={() => {
        onPressAnswer();
      }}
    >
      <View
        style={false ? styles.answersContainerCheck : styles.answersContainer} // implementar estilo na pergunta que foi selecionada
      >
        <Text style={styles.answers}>{answer}</Text>
      </View>
    </TouchableOpacity>
  );
};
