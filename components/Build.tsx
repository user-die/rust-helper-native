import { memo } from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { vw } from "react-native-expo-viewport-units";
//import { View } from "react-native-reanimated/lib/typescript/Animated";
import { buildImages } from "@/raidData/images";
import buildsData from "@/raidData/buildsData";

const Build = memo(
  ({ id, count, dispatch }: { id: number; count: number; dispatch }) => {
    const build = buildsData[id];

    return (
      <View style={styles.build}>
        <View style={styles.imageContainer}>
          <Image
            source={buildImages[id]}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <View style={{ height: 60, display: "flex", justifyContent: "center" }}>
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              color: "#efefef",
            }}
          >
            {build.value}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable
            onPress={() => dispatch({ type: "DECREMENT", payload: id })}
            style={styles.button}
          >
            <Text style={styles.buttonText}>-</Text>
          </Pressable>

          <Text style={styles.text}> {count}</Text>

          <Pressable
            onPress={() => dispatch({ type: "INCREMENT", payload: id })}
            style={styles.button}
          >
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    width: "100%",
    borderRadius: 20,
    backgroundColor: "rgba(33, 33, 33, 0.7)",
    display: "flex",
    alignItems: "center",
    padding: 8,
  },
  image: {
    height: 140,
    width: 140,
    borderRadius: 20,
  },
  scrollView: {},
  text: {
    fontSize: 18,
    textAlign: "center",
    color: "#efefef",
  },
  build: {
    flex: 1,
    maxWidth: vw(50),
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: "#17B5D3",
  },
  buttonText: {
    fontSize: 26,
    color: "#ffffff",
  },
});

export default Build;

/*
        <Pressable
          onPress={() => dispatch({ type: "DELETE_ITEM", payload: id })}
          style={styles.button}
        >
          <Text style={styles.buttonText}>У</Text>
        </Pressable>
        */
