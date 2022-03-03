import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Icon } from "react-native-elements";
import { useContext } from "react";
import { Context } from "../App";

export default function Home() {
  const context = useContext(Context);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text>ID : {context.Id}</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => context.setIsLoggedIn()}
        >
          <Icon name="logout" color="white" type="MaterialCommunityIcons" />
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    right: 0,
    top: 0,
  },
  btn: {
    borderRadius: 1000,
    backgroundColor: "darkgrey",
    padding: 5,
    marginLeft: 10,
  },
  textBtn: {
    color: "white",
  },
});
