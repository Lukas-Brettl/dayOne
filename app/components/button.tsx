import { Text, TouchableOpacity} from "react-native";
import { scale, verticalScale } from 'react-native-size-matters';

interface Props {
  text: string,
  fs?: number,
  width?: number,
  height?: number,
  disabled?:boolean,
  fun?:any
}

export default function Button({ text, fs = 16, width = 150, height = 45, disabled = false, fun }: Props) {
  return (
    <TouchableOpacity className="justify-center items-center rounded-xl bg-white"
        disabled={disabled}
        onPress={fun}
        style={{
            width: scale(width),
            height: verticalScale(height),
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: disabled?'#b3b3b5':'white'}}>

      <Text className="text-black font-semibold"
        style={{
          fontSize: scale(fs),
          color: 'black',
          fontWeight: '600'}}>
        {text}
      </Text>

    </TouchableOpacity>
  );
}
