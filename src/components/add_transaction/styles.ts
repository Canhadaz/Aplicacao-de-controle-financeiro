import { StyleSheet } from 'react-native';

const getStyles = (width: number) => {
    return StyleSheet.create({
        container: {
            //flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginBottom: -10,
        },
        transactionButton:{
            width: 'auto',
            padding: 12,
            flexDirection: 'row',
            backgroundColor: '#fafafa',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'space-between',
            columnGap: 5
        },
        h3_text:{
            color: '#25483a',
            fontSize: 15,
            fontWeight: '600',
        },
        circle:{
            backgroundColor: '#25483a',
            width: 'auto',
            borderRadius: 100,
            padding: 3,
        }
    })
}
export default getStyles;