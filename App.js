import { SafeAreaView, StyleSheet } from "react-native";
import { useState, createContext } from "react";
import { NativeRouter, Routes, Route } from "react-router-native";

import Login from "./views/Login";
import Home from "./views/Home";

export const Context = createContext("default value");
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [Id, setId] = useState("");
  const handleLoggedIn = () => {
    setIsLoggedIn((prev) => !prev);
  };

  const contextValue = {
    isLoggedIn: isLoggedIn,
    setIsLoggedIn: handleLoggedIn,
    Id: Id,
    setId: setId,
  };

  const renderLoggedIn = () => {
    return isLoggedIn ? (
      <Home context={contextValue} />
    ) : (
      <Login context={contextValue} />
    );
  };
  return (
    <Context.Provider value={contextValue}>
      <SafeAreaView style={styles.container}>
        <NativeRouter>
          <Routes>
            <Route exact path="/" element={renderLoggedIn()} />
          </Routes>
        </NativeRouter>
      </SafeAreaView>
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
