import React from "react";
import { Text, View, Button } from "react-native";
import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";

interface Props {
  navigation: any;
}

export const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz</Text>
      <Text style={styles.paragraph}>
        Responda às perguntas e tente a sorte são 15 perguntas sobre diversos
        temas, consiga o maior número de acerto e se sinta um gênio
      </Text>

      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <Button
            color="#ff9b00"
            onPress={() => navigation.navigate("Quiz")}
            title="Vamos la"
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
