import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function search() {
    return (
        <SafeAreaView
            className="flex-1 bg-indigo-400">
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
        </SafeAreaView>

    )
}