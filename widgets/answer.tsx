import React, { useState, useEffect, useCallback } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { styles } from "../styles/styles";

interface Props {
  onPressAnswer: Function;
  answer: string;
}

export const Answer: React.FC<Props> = ({ onPressAnswer, answer }) => {
  let [answersIdexState, setIdexanswers] = useState<number>(0);
  return (
    <TouchableOpacity onPress={() => onPressAnswer}>
      <View
        style={[answersIdexState ? styles.answersContainerCheck : styles.answersContainer]}
      >
        <Text style={styles.answers}>{answer}</Text>
      </View>
    </TouchableOpacity>
  );
};
