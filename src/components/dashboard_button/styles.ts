import { Platform, StyleSheet } from 'react-native';

export const getStyles = (width: number) => {
    const isLargeScreen = width >= 650;

    return StyleSheet.create({
        container:{
            flex: 1,
            width: '100%',
            flexDirection: 'column',
            rowGap: 8,
            justifyContent: 'center',
            //alignItems: 'center',
        },
        containerButton: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            rowGap: 23,
            width: '100%',
            maxHeight: '180',
            backgroundColor: '#214835',
            borderRadius: 20,
            padding: 20,
            ...Platform.select({
                default: { experimental_backgroundImage: 'Linear-gradient(90deg, #25483a, #2f654d)'},
            }),
            //ANDROID
            elevation: 5,
            //IOS
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
        },
        h1_text:{
            fontSize: 32,
            fontWeight: 800,
        },
        h1_white_text:{
            color: '#fafafa',
            fontSize: 40,
            fontWeight: '800',
        },
        h3_text: {
            color: '#fafafa',
            opacity: 0.8,
        },
        remaining_percentage: {
            width: 'auto',
            flexDirection: 'row',
            paddingHorizontal: 5,
            paddingVertical: 2,
            borderRadius: 20,
            backgroundColor: '#fafafa2d',
            color: '#f0a46d',
            fontWeight: 600
        },
        progressBar:{
            width: '100%',
            height: 6,
            backgroundColor: '#fafafa',
            borderRadius: 20,
            opacity: 0.8,
        },
    })
}