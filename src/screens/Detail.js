import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/Entypo";

const Detail = ({ route, navigation }) => {
  const { productId } = route.params._id;
  console.log(route.params._id);

  const [products, setProducts] = useState([]);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function fetchSingleProduct() {
      await fetch(`https://cryptic-dawn-15211.herokuapp.com/products/60b265275183a850e0828195`)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        });
    }
    fetchSingleProduct();
  }, []);
  console.log(products);

  const {
    catagory,
    shopName,
    productName,
    brandName,
    image,
    price,
    rating,
    description,
  } = products;

  return (
    <View style={{ backgroundColor: "#FFF" }}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 40,
            marginHorizontal: 20,
          }}
        >
          <View style={{ width: "10%" }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require("../images/2.png")} />
            </TouchableOpacity>
          </View>
          <View style={{ width: "80%", alignItems: "center" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <Image
                source={require("../images/3.png")}
                style={{ height: 25, width: 20 }}
              />
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                {shopName}
              </Text>
            </View>
          </View>
          <View style={{ width: "10%" }}>
            <Icon name="heart" color="red" size={30} />
          </View>
        </View>

        <Image
          source={{ uri: image }}
          style={{ height: 300, width: 300, alignSelf: "center" }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            backgroundColor: "#f6f3fb",
            paddingHorizontal: 20,
            paddingVertical: 8,
            borderRadius: 20,
          }}
        >
          <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}> + </Text>
          </TouchableOpacity>
          <Text
            style={{ fontWeight: "bold", fontSize: 18, paddingHorizontal: 20 }}
          >
            {quantity}
          </Text>
          <TouchableOpacity
            onPress={() => {
              if (quantity > 0) setQuantity(quantity - 1);
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 18 }}> - </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 20,
            marginTop: 30,
          }}
        >
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 25,
              }}
            >
              {brandName}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                color: "#a4a4a9",
              }}
            >
              {productName}
            </Text>
          </View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 28,
              marginLeft: 65,
            }}
          >
            ${price}
          </Text>
        </View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 30,
            marginHorizontal: 20,
          }}
        >
          Category: {catagory}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 30,
            marginHorizontal: 20,
          }}
        >
          Ratings: {rating}/5
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 30,
            marginHorizontal: 20,
          }}
        >
          Details
        </Text>
        <Text
          style={{
            color: "#a4a4a9",
            fontWeight: "bold",
            fontSize: 15,
            marginTop: 10,
            marginBottom: 20,
            marginHorizontal: 20,
            textAlign: "justify",
          }}
        >
          {description}
        </Text>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          backgroundColor: "#000",
          height: 50,
          width: 50,
          bottom: 20,
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          borderRadius: 25,
        }}
      >
        <Icon name="shopping-cart" size={24} color="#FFF" />
      </View>
    </View>
  );
};

export default Detail;
