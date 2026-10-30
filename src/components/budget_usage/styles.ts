import { StyleSheet } from 'react-native';

const getStyles = (width: number) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            rowGap: 5,
        },
        box: {
            backgroundColor: '#fafafa',
            width: '100%',
            height: 240,
            borderRadius: 20,
            padding: 15,
        },
        category: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        h3_text:{
            fontSize: 14,
            fontWeight: '600',
        },
        progressBar:{
            width: '100%',
            height: 6,
            backgroundColor: '#e0dfe2',
            borderRadius: 20,
            opacity: 0.8,
            marginBottom: 20,
        },
    })
}
export default getStyles;