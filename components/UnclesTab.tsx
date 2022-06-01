import { BlockHeader } from "@ethereumjs/block";
import { Button, ButtonGroup } from "@rneui/themed";
import { useContext, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { BlockContext } from "../hooks/useBlock";
import { DisplayHeader } from "./HeaderTab";
import { View } from "./Themed";

export default function UnclesTab() {
  const [idx, setIdx] = useState(0);
  const block = useContext(BlockContext);
  const uncles = block.uncleHeaders.map((uncle) => {
    return `0x${uncle.hash().toString("hex")}`;
  });

  return (
    <View style={styles.container}>
        <ButtonGroup
          buttons={uncles}
          containerStyle={styles.buttonGroup}
          buttonContainerStyle={styles.buttonContainer}
          button={
            <Button style={styles.button} titleProps={{ selectable: true }} />
          }
          onPress={setIdx}
        />
      <ScrollView>
        {uncles.length > 0 && DisplayHeader(block.uncleHeaders[idx])}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  row: {
    flexDirection: "row",
  },
  col: {
    flexDirection: "column",
  },
  buttonGroup: {
    alignItems: "flex-start",
    textAlign: "left",
    flex: 1,
  },
  buttonGroupKeys: {
    width: 120,
  },
  buttonContainer: {
    width: 375,
  },
  buttonContainerKeys: {},
  button: {
    flex: 1,
  },
});
