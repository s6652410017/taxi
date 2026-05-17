import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Calculate() {
  const [distance, setDistance] = useState("");
  const [traffic, setTraffic] = useState("");
  const [total, setTotal] = useState(0);
  const [distanceCost, setDistanceCost] = useState(0);
  const [timeCost, setTimeCost] = useState(0);

  const calculateFare = () => {
    let d = parseFloat(distance) || 0;
    let t = parseFloat(traffic) || 0;

    let fare = 35;
    let distCharge = 0;

    if (d > 1) {
      let remaining = d - 1;

      const rates = [
        { limit: 9, price: 6.5 },
        { limit: 10, price: 7.0 },
        { limit: 20, price: 8.0 },
        { limit: 20, price: 8.5 },
        { limit: 20, price: 9.0 },
      ];

      for (let r of rates) {
        if (remaining > 0) {
          let used = Math.min(remaining, r.limit);
          distCharge += used * r.price;
          remaining -= used;
        }
      }

      if (remaining > 0) {
        distCharge += remaining * 10.5;
      }
    }

    let timeCharge = t * 3;

    setDistanceCost(distCharge);
    setTimeCost(timeCharge);
    setTotal(fare + distCharge + timeCharge);
  };

  const reset = () => {
    setDistance("");
    setTraffic("");
    setTotal(0);
    setDistanceCost(0);
    setTimeCost(0);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/taxi.png")}
        style={styles.image}
      />

      <Text style={styles.title}>คำนวณค่าแท็กซี่</Text>

      <View style={styles.card}>
        <Text>ระยะทาง (กิโลเมตร)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={distance}
          onChangeText={setDistance}
          placeholder="0.0"
        />

        <Text>เวลารถติด (นาที)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={traffic}
          onChangeText={setTraffic}
          placeholder="0"
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.calcBtn} onPress={calculateFare}>
            <Text style={{ color: "white" }}>คำนวณราคา</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.resetBtn} onPress={reset}>
            <Text style={{ color: "red" }}>ล้างค่า</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.resultCard}>
        <Text style={styles.resultTitle}>ค่าโดยสารโดยประมาณ</Text>

        <Text style={styles.total}>
          {total.toFixed(2)} <Text style={styles.baht}>บาท</Text>
        </Text>

        <View style={styles.line} />

        <View style={styles.row}>
          <Text style={styles.detailLeft}>ค่าโดยสารตามระยะทาง</Text>
          <Text style={styles.detailRight}>
            {distanceCost.toFixed(2)} ฿
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.detailLeft}>ค่ารถติด (นาที)</Text>
          <Text style={styles.detailRight}>
            {timeCost.toFixed(2)} ฿
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
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
    backgroundColor: "#e5e5e5",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 80,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#f4b400",
    marginBottom: 15,
  },
  card: {
    width: "90%",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    elevation: 3,
  },
  input: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 8,
    marginVertical: 8,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  calcBtn: {
    backgroundColor: "#0f766e",
    padding: 12,
    borderRadius: 8,
    width: "48%",
    alignItems: "center",
  },
  resetBtn: {
    borderWidth: 1,
    borderColor: "red",
    padding: 12,
    borderRadius: 8,
    width: "48%",
    alignItems: "center",
  },

  resultCard: {
    width: "90%",
    backgroundColor: "#374151",
    padding: 20,
    borderRadius: 18,
    marginTop: 20,
  },
  resultTitle: {
    color: "#cbd5e1",
    fontSize: 14,
  },
  total: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#facc15",
    marginVertical: 8,
    textAlign: "center",
  },
  baht: {
    fontSize: 16,
    color: "#facc15",
  },
  line: {
    borderBottomWidth: 1,
    borderColor: "#4b5563",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 3,
  },
  detailLeft: {
    color: "white",
    fontSize: 14,
  },
  detailRight: {
    color: "white",
    fontSize: 14,
  },

  footer: {
    position: "absolute",
    bottom: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555",
  },
});
