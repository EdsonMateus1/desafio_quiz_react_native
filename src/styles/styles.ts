import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: "center",
  },

  imgContainer: {
    marginBottom: 15,
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
    marginBottom: 8,
    fontSize: 22,
    letterSpacing: 1,
  },

  answersContainerCheck: {
    backgroundColor: "rgba(255, 155, 0, 0.8)",
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
    shadowColor: "rgba(255, 155, 0, 0.8)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 2,
  },

  answersContainer: {
    backgroundColor: "#fff",
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 5,
    borderColor: "#fff",
    borderWidth: 1,
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
    marginBottom: 8,
    marginTop: 8,
    fontSize: 19,
    letterSpacing: 1,
  },

  btnContainer: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  btn: {
    width: 100,
  },

  containerResult: {
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: "70%",
  },
  
  containerResultTitle: {
    height: "50%",
    alignItems: "center",
    justifyContent: "space-between",
  },

  ResultTitle: {
    fontSize: 30,
  },

  Result: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#006400",
  },
});
