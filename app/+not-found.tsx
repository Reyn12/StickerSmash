import { View, StyleSheet, Text } from "react-native";
import { Link, Stack } from "expo-router";
import React from "react";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View style={styles.container}>
        <Text style={styles.heading}>404</Text>
        <Text style={styles.subheading}>Halaman tidak ditemukan</Text>
        <Link href="/" style={styles.button}>
          Go back to Home Screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
    padding: 20, // Tambahkan padding untuk jarak dari tepi layar
  },
  heading: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#FF5722",
    marginBottom: 10, // Jarak heading dengan teks lain
  },
  subheading: {
    fontSize: 18,
    color: "#FFF",
    marginBottom: 30, // Jarak subheading dengan tombol
  },
  button: {
    backgroundColor: "#FF5722", // Warna latar tombol
    color: "#FFF",
    fontSize: 18,
    paddingVertical: 12, // Padding atas dan bawah
    paddingHorizontal: 25, // Padding kiri dan kanan
    borderRadius: 25, // Membuat tombol bulat
    textAlign: "center", // Teks di tengah
    fontWeight: "bold", // Teks tebal
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Efek bayangan (Android)
  },
});
