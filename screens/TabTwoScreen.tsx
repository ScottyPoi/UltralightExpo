import { Button, StyleSheet } from "react-native";
import "../shim";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import _blocks from "../blocks200000-210000.json";
import { createContext, useEffect, useState } from "react";
import { Block } from "@ethereumjs/block";
import DisplayBlock from "../components/DisplayBlock";
import Icon from "react-native-vector-icons/AntDesign";
import { BlockContext } from "../hooks/useBlock";

const blocks = Object.entries(_blocks);
const randomIdx = Math.floor(Math.random() * 10000);
const randomRlp = blocks[randomIdx][1].rlp;
const randomBlock = Block.fromRLPSerializedBlock(randomRlp);
export default function TabTwoScreen() {
  const [idx, setIdx] = useState<number>(randomIdx);
  const [block, setBlock] = useState(randomBlock);

  useEffect(() => {
    setBlock(Block.fromRLPSerializedBlock(blocks[idx][1].rlp));
  }, [idx]);

  return (
    <BlockContext.Provider value={block}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.title}>Block {}</Text>
            <Text style={styles.title}>
              <Text selectable style={{ textAlign: "center", fontSize: 20 }}>
                0x{block.hash().toString("hex")}
              </Text>
            </Text>
            <Button title="get_parent_block" onPress={() => setIdx(idx - 1)} />
          </View>
        </View>
        <Text style={styles.header}></Text>
        {DisplayBlock(idx)}
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
      </View>
    </BlockContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  col: {
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  title0: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  header: {
    paddingHorizontal: 20,
  },
  separator: {
    marginVertical: 30,
    marginHorizontal: 30,
    height: 1,
    width: "80%",
  },
});
