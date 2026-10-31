import { Text, useWindowDimensions, View } from 'react-native';

import getStyles from './styles';

const Save_button = () => {
    const { width } = useWindowDimensions();
    const styles = getStyles(width);
    
    return (
        <View style = {styles.container}>
            <View style = 
            {{borderTopWidth: 1, borderColor: '#484848', 
                width: '100%',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',}}>
            <View style = {styles.button}>
                <Text style = {styles.h3_text}>Save</Text>
            </View>
            </View>
        </View>
    )
}

export default Save_button;