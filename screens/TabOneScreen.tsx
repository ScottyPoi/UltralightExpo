import { ScrollView, StyleSheet } from "react-native";
import "../shim";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import bns from "../boodnodeIds.json";
import { Divider, ListItem } from "@rneui/themed";
import { Button } from "react-native";
import { ENR } from "@chainsafe/discv5";
import { useEffect, useState } from "react";
import PingButton from "../components/PingButton";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Network View</Text>
      <Text style={styles.title}>Peers: {bns.length}</Text>
      <ScrollView contentContainerStyle={styles.list}>
        {bns.map((b, i) => (
          <ListItem.Swipeable
            containerStyle={styles.peer}
            rightContent={<PingButton />}
            leftContent={<Button title="show" />}
            key={i}
          >
            <ListItem.Title style={{ width: "33%" }}>
              ...{b[0].slice(b[0].length - 12)}
            </ListItem.Title>

            <ListItem.Subtitle style={{ width: "66%" }}>
              {b[1]}
            </ListItem.Subtitle>
          </ListItem.Swipeable>
        ))}
      </ScrollView>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    alignItems: "flex-end",
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  peer: {
    padding: 6,
    width: 400,
    borderColor: "gray",
    borderWidth: 1,
  },
  id: {},
});
