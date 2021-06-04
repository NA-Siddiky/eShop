import React, { useState } from "react";
import { View, Image, Picker, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/Entypo";
import Product from "../Components/Product";

const Home = (props) => {
  const [city, setCity] = useState([]);
  // state = {
  //   city: "Los Angeles",
  // };
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
              label="Los Angeles"
              value="Los Angeles"
              style={{ fontWeight: "bold" }}
            />
            <Picker.Item
              label="Dhaka"
              value="Dhaka"
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
          Food that
        </Text>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          meet your needs.
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 40 }}
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
        >
          <Image
            source={require("../images/5.png")}
            style={{ height: 40, width: 40 }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              paddingLeft: 10,
            }}
          >
            Burgers
          </Text>
        </View>

        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#e5e4eb",
            marginHorizontal: 15,
            borderRadius: 25,
            paddingVertical: 5,
            paddingHorizontal: 15,
          }}
        >
          <Image
            source={require("../images/10.png")}
            style={{ height: 40, width: 40 }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              paddingLeft: 10,
            }}
          >
            Burrito
          </Text>
        </View>

        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#e4e5eb",
            marginHorizontal: 15,
            borderRadius: 25,
            paddingVertical: 5,
            paddingHorizontal: 15,
          }}
        >
          <Image
            source={require("../images/7.png")}
            style={{ height: 40, width: 40 }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              paddingLeft: 10,
            }}
          >
            Salads
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#e4e5eb",
            marginHorizontal: 15,
            borderRadius: 25,
            paddingVertical: 5,
            paddingHorizontal: 15,
          }}
        >
          <Image
            source={require("../images/6.png")}
            style={{ height: 40, width: 40 }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              paddingLeft: 10,
            }}
          >
            Pizza
          </Text>
        </View>
      </ScrollView>

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

      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 15,
          marginTop: 30,
        }}
      >
        <Product
          image={require("../images/4.png")}
          title="Smokehouse"
          price="12.99"
          onPress={() => props.navigation.navigate("Detail")}
        />
        <Product
          image={require("../images/9.png")}
          title="Honey Chilli"
          price="9.99"
          marginTop={25}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 15,
          marginTop: 30,
        }}
      >
        <Product
          image={require("../images/6.png")}
          title="Pizza House"
          price="12.99"
        />
        <Product
          image={require("../images/10.png")}
          title="Burrito"
          price="9.99"
          marginTop={30}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
