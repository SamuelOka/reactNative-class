import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/splash-icon.png")}
        style={styles.image}
      />
      <Text style={styles.tile}>The number</Text>

      <Text style={styles.smalltext}>Reading list App</Text>
      <Link href="/about" style={styles.link}>
        About
      </Link>
      <Link href="/contact" style={styles.link}>
        Contact
      </Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tile: {
    fontWeight: "bold",
    fontSize: 18,
  },
  smalltext: {
    marginTop: 10,
    marginBottom: 30,
  },

  image: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  link: { marginVertical: 10, borderBottomWidth: 1 },
});
