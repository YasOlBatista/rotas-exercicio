import { MaterialIcons } from "@expo/vector-icons";
import {Tabs} from "expo-router";

export default function LayoutTabs() {
    return (
        <Tabs screenOptions={{ 
            headerShown: false, 
            tabBarLabelPosition: "beside-icon",
            tabBarItemStyle: {
                flex: 1,
            }
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarLabel: "Episódios",
                    tabBarLabelStyle: {fontSize: 16, fontWeight: 'bold', color: '#6b0a2d'},
                    tabBarIcon: ({ }) => (
                        <MaterialIcons name="list" size={24} color={"#6b0a2d"} />),
                     tabBarItemStyle: {flex: 1,}
                }}
            />
            <Tabs.Screen
                name="momentos"
                options={{
                    tabBarLabel: "Momentos",
                    tabBarLabelStyle: {fontSize: 16, fontWeight: 'bold', color: '#6b0a2d'},
                    tabBarIcon: ({ }) => (
                        <MaterialIcons name="photo" size={24} color={"#6b0a2d"} />
                    )
                }}
            />


        </Tabs>
    )
}