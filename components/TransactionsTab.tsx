import { ButtonGroup, Button, SearchBar } from "@rneui/themed";
import { createContext, useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Transaction from "./Transaction";
import { BlockContext } from "../hooks/useBlock";

const Stack = createNativeStackNavigator();

// export default function TransactionStack() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Transactions" component={TransactionsTab} />
//         {/* <Stack.Screen name="Transaction" component={Transaction} /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

export default function TransactionsTab() {
  const [idx, setIdx] = useState(0);
  const block = useContext(BlockContext);
  const transactions = block.transactions.map((tx, i) => {
    return JSON.stringify(tx.toJSON());
  });
  const hashes = block.transactions.map((tx) => {
    return `0x${tx.hash().toString("hex")}`;
  });
  const [hash, setHash] = useState(hashes[idx]);
  const [hashSearch, setHashSearch] = useState("");

  return (
    <View>
      <SearchBar value={hashSearch} onChange={() => setHashSearch} />
      <Text>
        <ButtonGroup
          vertical
          buttons={hashes}
          onPress={(e) => setIdx(e.target)}
          buttonContainerStyle={styles.buttonContainer}
          containerStyle={styles.buttonGroup}
          button={
            <Button style={styles.button} titleProps={{ selectable: true }} />
          }
        />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonGroup: {
    alignItems: "flex-start",
    textAlign: "left",
  },
  buttonContainer: {
    width: 375,
  },
  button: {
    flex: 1,
  },
});
