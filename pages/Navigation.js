import Nations from "./Nations";
import Artifacts from "./Artifacts";
import ProfileScreen from "./ProfileScreen";
import Weapons from "./Weapons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCubes, faHome, faUser, faFontAwesomeFlag, faPersonRifle } from "@fortawesome/free-solid-svg-icons";



const BottomTab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name="Artifacts" component={Artifacts}
                options={{
                    headerShown: false,
                    tabBarIcon: () => <FontAwesomeIcon icon={faCubes} />
                }} />
            <BottomTab.Screen name="Weapons" component={Weapons}
                options={{
                    headerShown: false,
                    tabBarIcon: () => <FontAwesomeIcon icon={faPersonRifle} />
                }} />
            <BottomTab.Screen name="Nations" component={Nations}
                options={{
                    headerShown: false,
                    tabBarIcon: () => <FontAwesomeIcon icon={faFontAwesomeFlag} />
                }} />
            <BottomTab.Screen name="Profile Screen" component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => <FontAwesomeIcon icon={faUser} />
                }} />
        </BottomTab.Navigator>
    );
}

export default Navigation
