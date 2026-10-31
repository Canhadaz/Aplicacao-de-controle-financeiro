import { StyleSheet } from 'react-native';

const getStyles = (width: number) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
        },
        button:{
            width: 100,
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 10,
            backgroundColor: '#214835',
            borderColor: '#484848',
            borderWidth: 1,
            alignItems: 'center',
            marginTop: 10,
        },
        h3_text:{
            color: '#fafafa',
            fontSize: 14,
            fontWeight: '600',
        },
    })
}
export default getStyles;