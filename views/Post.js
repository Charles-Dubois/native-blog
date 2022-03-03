import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  TextInput,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Icon } from "react-native-elements";
import { useContext, useState } from "react";
import { Context } from "../App";

export default function Post() {
  const context = useContext(Context);
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const handlePress = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: context.Id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="  Title"
          onChangeText={setTitle}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="  Body"
          onChangeText={setBody}
        ></TextInput>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => console.log(body, title)}
        >
          <Icon name="send" color="white" type="Feather" />
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
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
