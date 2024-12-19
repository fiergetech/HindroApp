// App.js
import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { TextInput, Button } from "react-native-paper";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>CARTRIDGE KINGS</Text>
          <View style={styles.searchContainer}>
            <TextInput
              placeholder="Search"
              mode="outlined"
              style={styles.searchInput}
            />
            <Button mode="contained" style={styles.cartButton}>Cart (1)</Button>
          </View>
        </View>

        {/* Main Section */}
        <View style={styles.banner}>
          <Text style={styles.bannerText}>FIND THE RIGHT CARTRIDGES FOR YOUR PRINTER</Text>
          <View style={styles.searchSteps}>
            <TextInput placeholder="1. Printer Brand" style={styles.stepInput} />
            <TextInput placeholder="2. Printer Series" style={styles.stepInput} />
            <TextInput placeholder="3. Printer Model" style={styles.stepInput} />
            <Button mode="contained" style={styles.findButton}>Find Cartridges</Button>
          </View>
        </View>

        {/* Featured Products */}
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Featured Products</Text>
          <View style={styles.productList}>
            {products.map((product, index) => (
              <View key={index} style={styles.productCard}>
                <Image source={product.image} style={styles.productImage} />
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>
                <Button mode="contained" style={styles.addButton}>
                  Add to Cart
                </Button>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const products = [
  {
    name: "HP 62 Black Ink Cartridge",
    price: "$9.49",
    image: "https://via.placeholder.com/150/000000/FFFFFF/?text=HP+62+Black+Ink+Cartridge",
  },
  {
    name: "Canon MF-3110 Toner",
    price: "$36.45",
    image: "https://via.placeholder.com/150/000000/FFFFFF/?text=Canon+MF-3110+Toner",
  },
  {
    name: "HP 62 Black Ink Cartridge",
    price: "$5.99",
    image: "https://via.placeholder.com/150/000000/FFFFFF/?text=HP+62+Black+Ink+Cartridge+2",
  },
];


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#f4f4f4",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    width: 200,
    marginRight: 10,
  },
  cartButton: {
    backgroundColor: "#ff9900",
  },
  banner: {
    backgroundColor: "#ddd",
    padding: 20,
    alignItems: "center",
  },
  bannerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  searchSteps: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  stepInput: {
    width: "30%",
    margin: 5,
  },
  findButton: {
    backgroundColor: "#007BFF",
    marginTop: 10,
  },
  featuredSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productList: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  productCard: {
    width: "30%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#28a745",
  },
});

export default App;
