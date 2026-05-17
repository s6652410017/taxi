import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";


export default function Index() {
  const router = useRouter();

useEffect(() => {
    const timer = setTimeout(() => {
    router.replace("/calculate");
  }, 3000);

    return () => clearTimeout(timer);
} , []);

  return (
    <View style={styles.container}>
      
      <View style={styles.card}>
        
        <Image
          source={require("../assets/images/taxi.png")}
          style={styles.image}
        />

        <Text style={styles.title}>TAXI METER</Text>
        <Text style={styles.subtitle}>THAI FARE CALCULATOR</Text>

        <ActivityIndicator
          size="large"
          color="#2e7d32"
          style={{ marginTop: 20 }}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>ID: 6652410017</Text>
        <Text style={styles.footerText}>
          NAME: Pattarapon Lertsanthia
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4C400",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "85%",
    backgroundColor: "#F7D54A",
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
    elevation: 5,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    marginTop: 5,
    color: "#1eff00ce",
  },
  footer: {
    position: "absolute",
    bottom: 40,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    fontWeight: "600",
  },
});
