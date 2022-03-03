import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Icon } from "react-native-elements";
import { useState, useContext } from "react";
import { Context } from "../App";

export default function Login() {
  const context = useContext(Context);
  const [IdCheck, setIdCheck] = useState(false);

  const handleId = (bool) => {
    setIdCheck(bool);
  };

  const validateID = (idUser) => {
    context.setId(idUser.toString());
    const idUserRegex = /^[1-9]|10$/;
    if (idUserRegex.test(idUser) && idUser <= 10) {
      return handleId(true);
    } else {
      return handleId(false);
    }
  };

  const handlePress = () => {
    if (IdCheck) {
      return context.setIsLoggedIn();
    } else {
      Alert.alert("The Id must be a number between 1and 10");
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder=" ID"
          onChangeText={(text) => validateID(text)}
        ></TextInput>
        <TouchableOpacity style={styles.btn} onPress={handlePress}>
          <Icon name="login" color="white" type="MaterialIcons" />
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 100,
    borderRadius: 15,
    borderWidth: 2,
    marginBottom: 5,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 200,
  },
  btn: {
    borderRadius: 1000,
    backgroundColor: "darkgrey",
    padding: 10,
  },
  textBtn: {
    color: "white",
  },
});
