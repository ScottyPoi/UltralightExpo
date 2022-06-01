import React, {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import "../shim";
import { Block } from "@ethereumjs/block";
import { FlatList, View, StyleSheet, ScrollView } from "react-native";
import {
  ButtonGroup,
  Button,
  Divider,
  Tab,
  TabView,
  Text,
} from "@rneui/themed";
import Clipboard, { useClipboard } from "@react-native-community/clipboard";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HeaderTab from "./HeaderTab";
import { BlockContext } from "../hooks/useBlock";
import TransactionsTab from "./TransactionsTab";
import TransactionStack from "./TransactionsTab";
import UnclesTab from "./UnclesTab";

type BlockTabs = {
  header: undefined;
  transactions: undefined;
  receipts: undefined;
};

const BlockTab = createBottomTabNavigator<BlockTabs>();

export default function DisplayBlock(
  idx: number
  // setIdx: Dispatch<SetStateAction<number>>
) {
  const block = useContext(BlockContext);
  const [index, setIndex] = useState(0);

  function showParent(i: number) {
    i === 0 && setIndex(idx - 1);
  }

  return (
    <>
      {/* <BlockTab.Navigator initialRouteName="header">
        <BlockTab.Screen name="header" component={Text} />
      </BlockTab.Navigator> */}
      {/* <Text>{index}</Text>
      <Text>
        <HeaderTab
        // showParent={showParent}
        />
      </Text> */}
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "white",
          height: 3,
        }}
        variant="default"
      >
        <Tab.Item title="Header" />
        <Tab.Item title="Transactions" />
        <Tab.Item title="Uncles" />
      </Tab>
      <TabView
        containerStyle={{ width: "100%" }}
        onChange={setIndex}
        value={index}
      >
        <TabView.Item>
          <ScrollView>
            <Text>
              <HeaderTab />
            </Text>
          </ScrollView>
        </TabView.Item>
        <TabView.Item style={{ flex: 1 }}>
          <Text>
            <TransactionsTab />
          </Text>
        </TabView.Item>
        <TabView.Item>
          <ScrollView>
          <Text><UnclesTab /></Text>
          </ScrollView>
        </TabView.Item>
      </TabView>
    </>
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
  },
  buttonGroupKeys: {
    width: 120,
  },
  buttonContainer: {
    width: 245,
    paddingLeft: 10,
  },
  buttonContainerKeys: {},
  button: {},
});
