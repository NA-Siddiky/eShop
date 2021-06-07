import React, { useState, useEffect } from "react";
import { View, Image, Picker, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/Entypo";
import Catagories from "../Components/Catagories/Catagories";
import Products from "../Components/Products/Products";

const Home = ({ navigation }) => {
  const [city, setCity] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      await fetch("https://cryptic-dawn-15211.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => {
          let sliceData = data.slice(0, 10);
          setProducts(sliceData);
        });
    }
    fetchProducts();
  }, []);

  const categories = [
    {
      id: 1,
      categoryTitle: "Cloth",
      categoryImg: "https://i.ibb.co/54Zq3k4/Cloth-Banner.jpg",
    },
    {
      id: 2,
      categoryTitle: "Electronics",
      categoryImg: "https://i.ibb.co/g4DRfVc/Electronics-Banner.jpg",
    },
    {
      id: 3,
      categoryTitle: "Groceries",
      categoryImg: "https://i.ibb.co/VCk2sfJ/Grocery-Banner.png",
    },
    {
      id: 4,
      categoryTitle: "Crockeries",
      categoryImg: "https://i.ibb.co/nnQY52f/Crockeries-Banner.jpg",
    },
    {
      id: 5,
      categoryTitle: "Home Appliances",
      categoryImg: "https://i.ibb.co/brbwnPJ/Home-Appliences-Banner.jpg",
    },
    {
      id: 6,
      categoryTitle: "Sports & Fitness",
      categoryImg: "https://i.ibb.co/Qfds9rB/category-img.png",
    },
  ];
  const getCategoryProducts = (category) => {
    fetch("https://cryptic-dawn-15211.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        const filterCategory = data.filter(
          (product) => product.catagory == category
        );
        // console.log(filterCategory);
        setProducts(filterCategory);
      });
  };
  return (
    <ScrollView style={{ backgroundColor: "#FFF" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 40,
          marginHorizontal: 20,
        }}
      >
        <View style={{ width: "10%" }}>
          <Image source={require("../images/1.png")} />
        </View>
        <View style={{ width: "80%", alignItems: "center" }}>
          <Picker
            selectedValue={city}
            style={{ height: 50, width: 160 }}
            onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
          >
            <Picker.Item
              label="Dhaka"
              value="Dhaka"
              style={{ fontWeight: "bold" }}
            />
            <Picker.Item
              label="Rajshahi"
              value="Rajshahi"
              style={{ fontWeight: "bold" }}
            />
            <Picker.Item
              label="Chittagong"
              value="Chittagong"
              style={{ fontWeight: "bold" }}
            />
            <Picker.Item
              label="Khustia"
              value="Khustia"
              style={{ fontWeight: "bold" }}
            />
          </Picker>
        </View>
        <View style={{ width: "10%" }}>
          <Icon name="magnifying-glass" size={30} />
        </View>
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          All Products,
        </Text>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          that you needs.
        </Text>
      </View>

      <Catagories
        getCategoryProducts={getCategoryProducts}
        categories={categories}
      />

      <View
        style={{
          alignItems: "center",
          marginHorizontal: 20,
          flexDirection: "row",
          marginTop: 40,
        }}
      >
        <View
          style={{
            width: "90%",
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            New Products
          </Text>
        </View>
        <View
          style={{
            width: "50%",
          }}
        >
          <Icon name="dots-three-horizontal" />
        </View>
      </View>
      <Products products={products} navigation={navigation} />
    </ScrollView>
  );
};

export default Home;
