import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Icon } from "react-native-elements";
import { useContext } from "react";
import { Context } from "../App";
import Logout from "../components/Logout";

export default function Home() {
  const context = useContext(Context);

  return context.posts.length > 0 ? (
    <SafeAreaProvider>
      <SafeAreaView>
        <Logout></Logout>
        <FlatList
          style={styles.list}
          data={context.posts}
          renderItem={(data) => (
            <>
              <Text style={styles.id}>User Id : {data.item.userId}</Text>
              <Text style={styles.title}>Tiltle : {data.item.title}</Text>
              <Text style={styles.body}>{data.item.body}</Text>
            </>
          )}
          keyExtractor={(_data, index) => index.toString()}
          ListHeaderComponent={() => (
            <View style={styles.header}>
              <Icon
                name="arrow-downward"
                color="rgb(2,0,36)"
                type="MaterialIcons"
              />
              <Text style={[styles.title, styles.textHeader]}>Post</Text>
              <Icon
                name="arrow-downward"
                color="rgb(2,0,36)"
                type="MaterialIcons"
              />
            </View>
          )}
          ListFooterComponent={() => <Text>Footer</Text>}
          ItemSeparatorComponent={() => (
            <View style={{ borderBottomWidth: 1, margin: 10 }}></View>
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  ) : (
    <>
      <ActivityIndicator size="large" color="red" />
    </>
  );
}
const styles = StyleSheet.create({
  id: { fontSize: 10, color: "rgba(17,15,60,0.908000700280112)" },
  title: {
    fontWeight: "bold",
    color: "rgba(17,15,60,0.908000700280112)",
  },
  body: { color: "rgba(17,15,60,0.908000700280112)" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
  textHeader: {
    margin: 5,
  },
  list: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
});
