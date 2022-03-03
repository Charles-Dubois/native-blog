import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import { useState, useContext } from "react";
import { Context } from "../App";

export default function Login() {
  const context = useContext(Context);
  const [IdCheck, setIdCheck] = useState(false);

  const handleId = (bool) => {
    setIdCheck(bool);
  };

  const validateID = (password) => {
    const passwordRegex = /^[1-9]|10$/;
    if (passwordRegex.test(password) && password <= 10) {
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
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="  ID"
        onChangeText={(text) => validateID(text)}
      ></TextInput>

      <TouchableOpacity style={styles.btn} onPress={handlePress}>
        <Text style={styles.textBtn}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 200,
    borderRadius: 15,
    borderWidth: 2,
    marginBottom: 5,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    borderRadius: 15,
    backgroundColor: "darkgrey",
    padding: 10,
  },
  textBtn: {
    color: "white",
  },
});
