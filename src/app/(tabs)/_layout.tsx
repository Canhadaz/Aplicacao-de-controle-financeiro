import { Tabs } from 'expo-router';

import { faChartColumn, faChartLine, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { View } from 'react-native';

export default function TabLayout() {

    return (
        <Tabs 
        screenOptions={{
            headerShown: true,
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "#64748B",
            tabBarStyle: {
                marginHorizontal: 20,
                height: 65,
                bottom: 20,
                backgroundColor: "#FFFFFF",
                borderRadius: 30,
                
            },
            tabBarItemStyle: {
                alignItems: 'center',
                justifyContent: 'center',
            },
            tabBarLabelStyle: {
                fontSize: 13,
                fontWeight: 600,
            },
            header: () => (
                <View style = {{
                    height: 30,
                    backgroundColor: '#fafafa',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                </View>
            ),
        }}>
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Dashboard',
                    tabBarLabel: 'Dashboard',
                    tabBarIcon: () => (
                        <FontAwesomeIcon
                            icon={faChartColumn}
                            color= 'black'
                            size = {25}
                        />
                    ),
                }}/>
            <Tabs.Screen
                name='transactions'
                options={{
                    title: 'Transactions',
                    tabBarLabel: 'Transactions',
                    tabBarIcon: () => (
                        <FontAwesomeIcon
                            icon={faMoneyBill}
                            color= 'black'
                            size = {25}
                        />
                    ),
                }}/>
            <Tabs.Screen
                name='reports'
                options={{
                    title: 'Reports',
                    tabBarLabel: 'Reports',
                    tabBarIcon: () => (
                        <FontAwesomeIcon
                            icon={faChartLine}
                            color= 'black'
                            size = {25}
                        />
                    ),
                }}/>
        </Tabs>
    )
}