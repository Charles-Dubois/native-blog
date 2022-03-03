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
      <SafeAreaView style={styles.container}>
        <Logout></Logout>
        <FlatList
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
  id: { fontSize: 10 },
  title: {
    fontWeight: "bold",
  },
  body: {},
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
  textHeader: {
    margin: 5,
  },
});
