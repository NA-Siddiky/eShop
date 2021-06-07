import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import SingleProduct from "./SingleProduct";

export default function Products({ products, navigation }) {
  // console.log(products)

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 10,
          flexWrap: "wrap",
          marginTop: 30,
          marginBottom: 30,
        }}
      >
        {products?.map((product) => (
          <SingleProduct key={product._id} product={product} navigation={navigation} />
        ))}
      </View>
    </>
  );
}
