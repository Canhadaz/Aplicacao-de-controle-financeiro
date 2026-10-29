import { Tabs } from 'expo-router';

import { faChartColumn, faChartLine, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function TabLayout() {

    return (
        <Tabs 
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#27483a",
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
            }

        }}>
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Dashboard',
                    tabBarLabel: 'Dashboard',
                    tabBarIcon: () => (
                        <FontAwesomeIcon
                            icon={faChartColumn}
                            color= '#27483a'
                            size = {25}
                        />
                    ),
                }}/>
            <Tabs.Screen
                name='transacoes'
                options={{
                    title: 'Transactions',
                    tabBarLabel: 'Transactions',
                    tabBarIcon: () => (
                        <FontAwesomeIcon
                            icon={faMoneyBill}
                            color= '#27483a'
                            size = {25}
                        />
                    ),
                }}/>
            <Tabs.Screen
                name='relatorios'
                options={{
                    title: 'Reports',
                    tabBarLabel: 'Reports',
                    tabBarIcon: () => (
                        <FontAwesomeIcon
                            icon={faChartLine}
                            color= '#27483a'
                            size = {25}
                        />
                    ),
                }}/>
        </Tabs>
    )
}