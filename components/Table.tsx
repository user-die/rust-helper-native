import { StyleSheet, View, Image, Text, FlatList } from "react-native";
import buildsData from "@/raidData/buildsData";
import explosives from "@/raidData/explosives";
import {
  explosivesImages,
  resourcesImages,
  benchsImages,
} from "@/raidData/images";
import type { Build, IExplosive } from "@/raidData/types";

const Row = ({ item, builds }: { item: IExplosive; builds: Build[] }) => {
  item.calcCount(builds);
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        gap: 10,
      }}
    >
      <View style={styles.row}>
        <Image
          source={explosivesImages[item.id]}
          style={{ width: 70, height: 70 }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
            color: "#efefef",
          }}
        >
          {item.count}
        </Text>
      </View>

      <View style={{ display: "flex", flexDirection: "column" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <View style={styles.row}>
            <Image
              source={benchsImages[item.workbenchLevel - 1]}
              style={styles.image}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
                color: "#efefef",
              }}
            >
              {item.workbenchLevel}
            </Text>
          </View>

          <View style={styles.row}>
            <Image source={resourcesImages.scrap} style={styles.image} />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
                color: "#efefef",
              }}
            >
              {item.totalScrap}
            </Text>
          </View>

          <View style={styles.row}>
            <Image source={resourcesImages.sulfur} style={styles.image} />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
                color: "#efefef",
              }}
            >
              {item.sulfur * item.count}
            </Text>
          </View>

          <View style={styles.row}>
            <Image source={resourcesImages.charcoal} style={styles.image} />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
                color: "#efefef",
              }}
            >
              {item.charcoal * item.count}
            </Text>
          </View>
        </View>

        <View>
          <FlatList
            data={item.calcResources()}
            style={{
              flexDirection: "row",
              gap: 10,
            }}
            renderItem={({ item: res }) => (
              <View>
                <Image
                  source={resourcesImages[Object.keys(res)[0]]}
                  style={styles.image}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#efefef",
                  }}
                >
                  {Object.values(res)[0]}
                </Text>
              </View>
            )}
          ></FlatList>
        </View>
      </View>
    </View>
  );
};

const RaidTable = ({ items }: { items: { id: number; count: number }[] }) => {
  const builds = items.reduce((acc, el, i) => {
    acc[i] = { ...buildsData[el.id], count: el.count };
    return acc;
  }, []);

  return (
    <View
      style={{
        backgroundColor: "rgba(33, 33, 33, 0.7)",
        borderRadius: 10,
        marginVertical: 20,
        marginHorizontal: 8,
      }}
    >
      <FlatList
        data={explosives}
        renderItem={({ item }) => <Row item={item} builds={builds} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#9fc4f1" },
  head: { height: 80 },
  text: { margin: 6 },
  image: { width: 50, height: 50 },
  row: { display: "flex" },
});

export default RaidTable;
