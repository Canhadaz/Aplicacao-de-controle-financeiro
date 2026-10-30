import { StyleSheet } from 'react-native';

const getStyles = (width: number) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
        },
        box:{
            padding: 10,
            borderRadius: 20,
            backgroundColor: '#fafafa',
            width: '100%',
            height: 'auto',
            rowGap: 15,
        },
        h3_text:{
            fontSize: 14,
            fontWeight: '600',
        },
        h3_opactity:{
            fontSize: 14,
            fontWeight: '600',
            opacity: 0.5,
        },
        h1_text:{
            fontSize: 22,
            fontWeight: 700,
        },
        legenda: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
    },
    })
}
export default getStyles;