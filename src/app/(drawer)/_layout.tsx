import {Drawer} from "expo-router/drawer";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

export default function LayoutDrawer(){
    return (
        <GestureHandlerRootView>
            <Drawer screenOptions={{title: "Navegador"}}>
                <Drawer.Screen 
                    name="(tabs)" 
                    options={{
                        drawerLabel: "Início",
                        drawerIcon: () => <MaterialIcons name="home" size={24} color="#6b0a2d" />
                    }} />

                <Drawer.Screen 
                    name="configs" 
                    options={{
                        drawerLabel: "Configurações",
                        drawerIcon: () => <MaterialIcons name="settings" size={24} color="#6b0a2d" />
                    }} />
            </Drawer>
        </GestureHandlerRootView>
    );
}