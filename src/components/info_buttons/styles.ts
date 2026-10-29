import { StyleSheet } from 'react-native';

const getStyles = (width: number) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        box_button:{
            backgroundColor: '#fafafa',
            width: '32%',
            height: 'width',
            borderRadius: 20,
            flexDirection: 'column',
            rowGap: 3,
            justifyContent: 'flex-start',
            padding: 13,
        },
        h2_text:{
            fontSize: 20,
            fontWeight: '800',
        },
        h3_text:{
            color: '#959595',
            fontSize: 13,
            fontWeight: '600',
        },
        circle:{
            backgroundColor: '#25483a',
            width: '30%',
            borderRadius: 100,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
        }
    })
}
export default getStyles;