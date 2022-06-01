import React, { useContext } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { Button, ButtonGroup, Divider } from "@rneui/themed";
import { Block, BlockHeader } from "@ethereumjs/block";
import { BlockContext } from "../hooks/useBlock";

interface IHeaderTabProps {
  // showParent: (i: number) => void;
}

export function DisplayHeader(header: BlockHeader) {
  // const { showParent } = props;
  const keys = Object.keys(header.toJSON());
  const values: string[] = Object.values(header.toJSON());

  return (
    <Text style={styles.row}>
      <ButtonGroup
        vertical
        containerStyle={styles.buttonGroupKeys}
        buttons={keys}
        buttonContainerStyle={styles.buttonContainerKeys}
      />
      <Divider />
      <ButtonGroup
        vertical
        containerStyle={styles.buttonGroup}
        buttons={values}
        buttonContainerStyle={styles.buttonContainer}
        button={
          <Button style={styles.button} titleProps={{ selectable: true }} />
        }
        // onPress={showParent}
      />
    </Text>
  );
}

export default function HeaderTab(props: IHeaderTabProps) {
  const block: Block = useContext(BlockContext);
  const header: BlockHeader = block.header;
  return <ScrollView>{DisplayHeader(header)}</ScrollView>;
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
