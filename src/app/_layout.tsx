import { Stack } from 'expo-router'

import { View } from 'react-native'

export default function Layout(){
    return <Stack 
        screenOptions={{
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
            <Stack.Screen
                name='(tabs)'
                options={{
                    headerShown: false,
                }}
            />
        </Stack>


}