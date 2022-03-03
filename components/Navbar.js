import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient"; //a désinstaller
import { Icon } from "react-native-elements";
export default function Navbar() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={[styles.btn, styles.background]}>
          <Icon name="home" color="white" type="Ionicons" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Icon name="post-add" color="white" type="MaterialIcons" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Icon
            name="supervised-user-circle"
            color="white"
            type="MaterialIcons"
          />
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  //
  //
  //
  //    position: "fixed",
  //    bottom: 0,
  //  },

  container: {
    backgroundColor: " rgb(2,0,36)",
    width: "auto",
    flexDirection: "row",
    justifyContent: "space-around",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
  },
  btn: {
    borderRadius: 15,
    padding: 10,
  },
});
