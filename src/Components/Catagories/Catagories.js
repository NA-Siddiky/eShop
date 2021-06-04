import React from "react";
import { View, Text, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default function Catagories(props) {
  const { categories, getCategoryProducts } = props;
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginTop: 40 }}
    >
      {categories.map((category) => (
        <TouchableOpacity
          onPress={() => getCategoryProducts(category.categoryTitle)}
        >
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: "#f9dd7a",
              marginHorizontal: 15,
              borderRadius: 25,
              paddingVertical: 5,
              paddingHorizontal: 15,
            }}
            onPress
          >
            <Image
              source={category.categoryImg}
              style={{ height: 40, width: 40 }}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                paddingLeft: 10,
              }}
            >
              {category.categoryTitle}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
