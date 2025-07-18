import { View } from "react-native";
import { scale } from "react-native-size-matters";

export default function Squares() {
  function generate(age: number) {
    const mainArray = []
    let monthAge = age * 12

    for (let i = 0; i < 24; i++) {
      const row = []

      for (let ii = 0; ii < 40; ii++) {
        row.push(
          <View
            key={`${i}-${ii}`}
            style={{
              backgroundColor: monthAge > 0 ? "white" : "#757575",
              width: scale(7),
              height: scale(7),
            }}
            className="border"
          />
        )
        if (monthAge > 0) monthAge -= 1
      }

      mainArray.push(
        <View key={`row-${i}`} className="flex-row">
          {row}
        </View>
      );
    }

    return mainArray
  }

  return (
    <View className=" justify-center items-center" style={{gap: scale(1)}}>
        {generate(17)}
    </View>
  );
}
