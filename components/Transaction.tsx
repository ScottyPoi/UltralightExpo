import { View } from "react-native";

export default function Transaction({ navigation, route }: {navigation: any, route: any}) {
  return <View>{route.params.tx}</View>;
}
