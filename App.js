import { SafeAreaView, StyleSheet } from "react-native";
import { useState, createContext, useEffect } from "react";
import { NativeRouter, Routes, Route, View } from "react-router-native";
import Navbar from "./components/Navbar";
import Login from "./views/Login";
import Home from "./views/Home";
import Post from "./views/Post";

export const Context = createContext("default value");
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [Id, setId] = useState("");
  const [posts, setPosts] = useState([]);
  const [personnalPosts, setPersonnalPosts] = useState([]);
  const handleLoggedIn = () => {
    setIsLoggedIn((prev) => !prev);
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((json) => setPosts(json))
        .catch((err) => console.log(err));
    }
  }, [isLoggedIn]);
  const contextValue = {
    isLoggedIn: isLoggedIn,
    setIsLoggedIn: handleLoggedIn,
    Id: Id,
    setId: setId,
    posts: posts,
    setPosts: setPosts,
    personnalPosts,
    setPersonnalPosts,
  };
  const renderNavbar = () => {
    return isLoggedIn ? <Navbar /> : null;
  };
  const renderLoggedIn = () => {
    return isLoggedIn ? <Home /> : <Login />;
  };

  return (
    <Context.Provider value={contextValue}>
      <SafeAreaView style={styles.container}>
        <NativeRouter>
          <Routes>
            <Route exact path="/" element={renderLoggedIn()} />
            <Route exact path="/post" element={<Post />} />
          </Routes>
          {renderNavbar()}
        </NativeRouter>
      </SafeAreaView>
    </Context.Provider>
  );
}
const styles = StyleSheet.create({});
