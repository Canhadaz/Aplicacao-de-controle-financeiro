import { Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';

import { ArrowUpRight } from 'react-native-feather';
import { getStyles } from './styles';

const dashboard_button = () => {
    const  {width}  = useWindowDimensions();
    const styles = getStyles(width);
    
    return (
        <View style = {styles.container}>
            <Text style = {styles.h1_text}>Dashboard</Text>
            <TouchableOpacity style = {[styles.containerButton, {}]} activeOpacity={0.7}>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style = {{flexDirection: 'column'}}>
                    <Text style = {styles.h3_text}>This Month</Text>
                    <Text style = {styles.h1_white_text}>$53.532</Text>
                </View>
                <View style = {{flexDirection: 'column', alignItems:'flex-end', rowGap: 3}}>
                    <Text style = {styles.h3_text}>Remaining</Text>
                    <View style = {styles.remaining_percentage}>
                    <ArrowUpRight size={20} color='#f0a46d'/>
                    <Text style = {{color: '#f0a46d', fontWeight: 600}}>29%</Text>
                    </View>
                    <Text style = {[styles.h3_text,{opacity: 0.5}, {fontSize: 12}]}>vs last month</Text>
                </View>
                </View>
                <View style = {{rowGap: 8}}>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style = {styles.h3_text}>Budget Usage</Text>
                    <Text style = {[styles.h3_text,{opacity: 1}]}>10%</Text>
                </View>
                <View style = {styles.progressBar}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default dashboard_button;