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
            flexDirection: 'column',
            width: '100%',
            height: 'auto',
            padding: 15,
            rowGap: 15,
        },
        category: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            borderBottomColor: '#0000006d',
            paddingBottom: 5,
            borderBottomWidth: 2,
        },
        h3_text:{
            fontSize: 14,
            fontWeight: '600',
        },
        h3_opactity:{
            fontSize: 12,
            fontWeight: '600',
            opacity: 0.5,
        }
    })
}
export default getStyles;