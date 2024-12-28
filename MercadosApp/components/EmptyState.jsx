import { View, Text } from "react-native";
import React from "react";

export default function EmptyState() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "gray", marginBottom: 20 }}>
        No photo uploaded yet
      </Text>
    </View>
  );
}
