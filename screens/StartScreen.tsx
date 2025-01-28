import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Button } from "../components/Button";
import { theme } from "@/constants/theme";
import React from "react";

export default function StartScreen({ navigation }: { navigation: any }) {
  return (
    <ImageBackground
      source={require("@/assets/images/cooking-food.png")}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.content}>
        <Text style={styles.title}>
          Make your children healthy{"\n"}with perfect meal
        </Text>
      </View>
       <View style={styles.footer}>
        <Button 
          variant="secondary"
          onPress={() => navigation.navigate("Login")}
        >
          Let's start
        </Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: "20%",
    paddingBottom: "10%",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    lineHeight: 32,
  },
  footer: {
    padding: theme.spacing.lg,
    borderTopWidth: 1,
    borderTopColor: theme.colors.secondary,
  },
});
