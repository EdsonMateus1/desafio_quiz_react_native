import React, { useState, useEffect, useCallback } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { styles } from "../styles/styles";

interface Props {
  onPressAnswer: Function;
  answer: string;
  style: any;
}

export const Answer: React.FC<Props> = ({ onPressAnswer, answer, style }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPressAnswer();
      }}
    >
      <View style={style}>
        <Text style={styles.answers}>{answer}</Text>
      </View>
    </TouchableOpacity>
  );
};
