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
            // Android
            elevation: 5,
            // Estilos para iOS
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
        },
        blocks:{
            borderRadius: 10,
            width: '32%',
            padding: 10,
            height: 'auto',
            backgroundColor: '#fef2f2',
            borderColor: '#b73939',
            borderWidth: 1,
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
        h2_text:{
            fontSize: 18,
            fontWeight: '600', 
            color: '#8e2a39' 
        },
        h1_text:{
            fontSize: 22,
            fontWeight: 700,
        },
        column_value:{
            width: '80%',
            backgroundColor: '#ef4545',
            borderRadius: 5,
        },
        circle:{
            borderRadius: 20,
            backgroundColor: '#fef2f2',
            borderWidth: 1,
            borderColor: '#b73939',
            padding: 10
        }
    });
}
export default getStyles;