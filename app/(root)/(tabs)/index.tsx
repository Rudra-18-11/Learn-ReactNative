
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function App() {
  const properties = [
    { id: "1", title: "Modern Villa", city: "Mumbain", price: "₹1.2Cr" },
    { id: "2", title: "Sea View Flat", city: "Mumbai", price: "₹85L" },
    { id: "3", title: "Studio Loft", city: "Bangalore", price: "₹34L" }
  ]
  return (

    <SafeAreaView
      className="flex-1 bg-indigo-400">

      <View className=" items-center justify-center">
        <Text className="text-xl font-bold text-blue-500">
          Welcome to Nativewind!
        </Text>
      </View>

      <View className="p-5">
        <Text className="font-bold  p-5 text-xl antialiased ">Rudra's first native project </Text>

        <TextInput
          placeholder="Search City..."
          placeholderTextColor="#090404"
          className="p-2 border border-lime-400 rounded-2xl"
        // style={{
        //   borderWidth: 1,
        //   borderColor: "#f7f4f4",
        //   borderRadius: 8,
        //   padding: 8,
        //   marginTop: 12,

        // }}
        />
        <TouchableOpacity
          onPress={() => alert("Searching")}
          className="bg-[##2563EB] rounded-3xl p-3 mt-3 items-center"

        // style={{
        //   backgroundColor: "#2563EB",
        //   padding: 12,
        //   borderRadius: 8,
        //   marginTop: 10,
        //   alignItems: "center"

        // }}
        >
          <Text style={{
            color: "#ffff",
            fontWeight: "bold"
          }}>Search</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={properties}

        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <View style={{
            borderWidth: 1,
            margin: 5,
            padding: 4,
            borderRadius: 8,
            backgroundColor: "#abace2"

          }}>
            <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
            <Text style={{ color: "#000000" }}>{item.city}</Text>
            <Text style={{ color: "#bb3c0a", fontWeight: "bold", fontSize: 15 }}>{item.price}</Text>

          </View>
        )}
      />





    </SafeAreaView>
  );
}