import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import SingleProduct from "./SingleProduct";

export default function Products(props) {
  const { products, navigation } = props;

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 15,
          flexWrap: "wrap",
          marginTop: 30,
        }}
      >
        {products?.map((product) => (
          <SingleProduct
            image={product.image}
            title={product.productName}
            price={product.price}
            onData={() => navigation.navigate("Details")}
          />
        ))}
      </View>
      {/* <View
        style={{
          flexDirection: "row",
          marginHorizontal: 15,
          flexWrap: "wrap",
          marginTop: 30,
        }}
      >
        {crockeriesCategory?.map((product) => (
          <SingleProduct
            image={product.image}
            title={product.productName}
            price={product.price}
            onPress={() => props.navigation.navigate("Detail")}
          />
        ))}
      </View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 15,
          flexWrap: "wrap",
          marginTop: 30,
        }}
      >
        {clothCategory?.map((product) => (
          <SingleProduct
            image={product.image}
            title={product.productName}
            price={product.price}
            onPress={() => props.navigation.navigate("Detail")}
          />
        ))}
      </View> */}
    </>
  );
}
