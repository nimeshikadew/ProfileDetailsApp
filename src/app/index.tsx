import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* Profile Image */}
      <View style={styles.profileSection}>
        <View style={styles.imageContainer}>

          <Image
            source={{
              uri: "https://i.pravatar.cc/200?img=12",
            }}
            style={styles.profileImage}
          />

          {/* Green Verified Icon */}
          <View style={styles.verified}>
            <Text style={styles.check}>✓</Text>
          </View>

        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Details */}
      <View style={styles.details}>

        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>Diluka</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.email}>
          ✉  diluka.w@nsbm.ac.lk
        </Text>

        <Text style={styles.label}>Points</Text>

        <View style={styles.pointsRow}>
          <Text style={styles.star}>★</Text>
          <Text style={styles.points}>0</Text>
        </View>

      </View>

      {/* Floating Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => alert("Add button clicked")}
      >
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  header: {
    height: 55,
    backgroundColor: "#eeeeee",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222222",
  },

  profileSection: {
    alignItems: "center",
    marginTop: 18,
    marginBottom: 8,
  },

  imageContainer: {
    width: 105,
    height: 105,
    borderRadius: 55,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eeeeee",
  },

  profileImage: {
    width: 82,
    height: 82,
    borderRadius: 41,
  },

  verified: {
    position: "absolute",
    right: 2,
    bottom: 8,
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: "#00c853",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#ffffff",
  },

  check: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
  },

  divider: {
    height: 1,
    backgroundColor: "#333333",
    marginHorizontal: 15,
  },

  details: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },

  label: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#222222",
    marginTop: 5,
  },

  value: {
    fontSize: 14,
    color: "#333333",
    marginTop: 3,
  },

  email: {
    fontSize: 13,
    color: "#333333",
    marginTop: 3,
  },

  pointsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },

  star: {
    fontSize: 15,
    marginRight: 7,
    color: "#222222",
  },

  points: {
    fontSize: 14,
    color: "#333333",
  },

  addButton: {
    position: "absolute",
    right: 18,
    bottom: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },

  plus: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "300",
  },
});