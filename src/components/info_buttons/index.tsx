import { Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';

import { ArrowDown, ArrowUp, Calendar } from 'react-native-feather';
import getStyles from './styles';

const info_buttons = () => {
    const { width } = useWindowDimensions();
    const styles = getStyles(width);
    
    return (
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.box_button} activeOpacity={0.7}>
            <View style = {styles.circle}>
                <ArrowDown size={16} color='#fafafa'/>
            </View>
            <Text style = {styles.h2_text}>57.0K</Text>
            <Text style = {styles.h3_text}>Income</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.box_button} activeOpacity={0.7}>
            <View style = {[styles.circle,{backgroundColor: '#ee3853'}]}>
                <ArrowUp size={16} color='#fafafa'/>
            </View>
            <Text style = {styles.h2_text}>6.5K</Text>
            <Text style = {styles.h3_text}>Expenses</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.box_button} activeOpacity={0.7}>
            <View style = {[styles.circle,{backgroundColor: '#4990d7'}]}>
                <Calendar size={16} color='#fafafa'/>
            </View>
            <Text style = {styles.h2_text}>308</Text>
            <Text style = {styles.h3_text}>Daily Avg</Text>
            </TouchableOpacity>
        </View>
    )
}

export default info_buttons;