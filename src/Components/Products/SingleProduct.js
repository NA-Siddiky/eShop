import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";

const SingleProduct = ({ navigation, product, marginTop }) => {
  // console.log(props)
  const { image, price, brandName, productName, _id } = product;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { _id: _id })}
      style={{
        backgroundColor: "#f5f5fa",
        height: 280,
        width: 160,
        borderRadius: 20,
        marginTop: marginTop,
        marginBottom: 10,
        marginRight: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            paddingHorizontal: 10,
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          {brandName}
        </Text>
      </View>
      <Image
        source={{ uri: image }}
        style={{
          height: 150,
          alignSelf: "center",
          width: 140,
          marginTop: 10,
          marginBottom: 10,
          borderRadius: 20,
        }}
      />
      <Text
        style={{
          alignSelf: "center",
          fontSize: 18,
          fontWeight: "bold",
          paddingHorizontal: 10,
        }}
      >
        {productName}
      </Text>
      <Text
        style={{
          alignSelf: "center",
          fontSize: 15,
          fontWeight: "bold",
          paddingHorizontal: 10,
          color: "#848385",
        }}
      >
        ${price}
      </Text>
    </TouchableOpacity>
  );
};

export default SingleProduct;
