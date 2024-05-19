import { View, Text, StyleSheet, Pressable } from "react-native";
import { colors } from "../../constants/Color";

export function PrimaryButton({ children, onPress }) {
  return (
    // minh khong dung nut co san nen tu tao va hay xay ra truong hop nhu nay
    // chinh sao cho hieu ung nhan nut xay ra ben tron gnut thay vi o ngoai
    //b1: cho view boc ngoai pressable thay vi view o trong
    // b2: style rieng hai vung nhu duoi
    <View
      style={styles.buttonOuterContainer}
      // array style object
    >
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden", // nhung hieu ung nao, style nao cua vung ma di ra ngoai se KHONG duoc hien thi
  },
  buttonInnerContainer: {
    backgroundColor: colors.primary500,
    paddingVertical: 8, // top and bottom
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center", // ko co key thua o trong reaCT NATIVE
  },
  pressed: {
    opacity: 0.75,
  },
});
