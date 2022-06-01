import { useEffect, useState } from "react";
import { Alert, Button } from "react-native";

interface PingButtonProps {}

export default function PingButton(props: PingButtonProps) {
  const [color, setColor] = useState("#0077DD");

  function handlePing() {
    const l = "#AAAAAA";
    Alert.alert('Ping', "Ping Sent")
    setColor(l);
  }

  useEffect(() => {
    if (color === "#AAAAAA") {
        setTimeout(() => {
          setColor("#0077DD");
          Alert.alert("Pong", "Pong Received")
        }, 3000)
    }
  }, [color]);

  return <Button title="Ping" color={color} onPress={handlePing} />;
}
