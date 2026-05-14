import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { LegalContent } from "./LegalContent";

export const Legal = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textView}>
        <LegalContent />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  textView: {
    marginTop: 10,
    paddingHorizontal: 15,
  },
});
