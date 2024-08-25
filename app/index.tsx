import buildsData from "@/raidData/buildsData";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  FlatList,
} from "react-native";
import { useReducer } from "react";
import Table from "@/components/Table";
import Build from "@/components/Build";
import Select from "@/components/Select";
import { reducer } from "./reducer";

const initialState = {
  builds: [{ id: 0, count: 1 }],
};

export default function HomeScreen() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/bg1.jpg")}
        resizeMode="stretch"
        style={styles.background}
      >
        <ScrollView>
          <Select dispatch={dispatch} buildsData={buildsData} />

          <FlatList
            data={state?.builds}
            style={{ padding: 8 }}
            columnWrapperStyle={{ gap: 8 }}
            contentContainerStyle={styles.buildsContainer}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={({ item }) => (
              <Build id={item.id} count={item.count} dispatch={dispatch} />
            )}
          />

          <Table items={state?.builds} />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 50,
  },

  scrollView: {
    padding: 8,
  },
  text: {
    fontSize: 42,
  },
  buildsContainer: {
    gap: 8,
    justifyContent: "space-between",
  },
});
