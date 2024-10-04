import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function WelcomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* You can replace the URI with a local image or asset */}
        <Image
          source={require("../assets/welcome.png")} // Add your image path here
          style={styles.image}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Discover Your Dream Job here</Text>
        <Text style={styles.subtitle}>
          Explore all the existing job roles based on your interest and study
          major
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0033CC",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#555555",
    textAlign: "center",
    marginTop: 10,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 40,
  },
  loginButton: {
    backgroundColor: "#0033CC",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 20,
    marginBottom: 15,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  registerButton: {
    backgroundColor: "#FFFFFF",
    borderColor: "#0033CC",
    borderWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 20,
  },
  registerButtonText: {
    color: "#0033CC",
    fontSize: 18,
  },
});