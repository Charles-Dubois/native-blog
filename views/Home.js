import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useContext } from "react";
import { Context } from "../App";

export default function Home() {
  const context = useContext(Context);

  return (
    <SafeAreaView>
      <Text>User's e-mail : {context.userEmail}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => context.setIsLoggedIn()}
      >
        <Text style={styles.textBtn}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  btn: {
    borderRadius: 15,
    backgroundColor: "darkgrey",
    padding: 10,
  },
  textBtn: {
    color: "white",
  },
});
