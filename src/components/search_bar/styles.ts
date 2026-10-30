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
            paddingHorizontal: 10,
            alignItems: 'center'
            //rowGap: 0,
        },
        search_header:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignSelf: 'stretch',
        },  
        input_row:{
            flexDirection: 'row', 
            alignItems: 'center', 
            columnGap: 5, 
            width: '100%',
            borderBottomWidth: 1,
        },  
        filter_section:{
            flexDirection: 'row', 
            alignSelf: 'flex-start',
            columnGap: 8, 
            marginTop: 10,
        },
        h3_text:{
            fontSize: 14,
            fontWeight: '600',
        },
        h3_opactity:{
            fontSize: 12,
            fontWeight: '600',
            opacity: 0.5,
        },
        circle:{
            width: 'auto',
            height: 'auto',
            padding: 8,
            backgroundColor: '#e5e5e7',
            borderRadius: 20,
            flexDirection: 'row',
            columnGap: 5,
        }
    })
}
export default getStyles;