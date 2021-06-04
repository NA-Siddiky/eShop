import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";

const SingleProduct = (props) => {
  const { image, title, price, brandName } = props;
  return (
    <TouchableOpacity
      onPress={props.onData}
      style={{
        backgroundColor: "#f5f5fa",
        height: 280,
        width: 160,
        borderRadius: 20,
        marginTop: props.marginTop,
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
        <Image source={image} style={{ height: 25, width: 20 }} />
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
        source={image}
        style={{
          height: 105,
          alignSelf: "center",
          width: 130,
          marginTop: 15,
          marginBottom: 15,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          paddingHorizontal: 10,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
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
