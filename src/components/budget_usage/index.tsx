import { Text, useWindowDimensions, View } from 'react-native';

import getStyles from './styles';

import { faBoltLightning, faCartShopping, faHeart, faRefresh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const budget_usage = () => {
    const { width } = useWindowDimensions();
    const styles = getStyles(width);
    
    return (
        <View style = {styles.container}>
            <Text style = {[styles.h3_text,{color: '#959595'}]}>BUDGET USAGE</Text>
            <View style = {styles.box}>
            <View style = {styles.category}>
            <View style = {{flexDirection: 'row', columnGap: 15}}>
                <FontAwesomeIcon size={20} icon={faBoltLightning } color='#ffc00f'/>
                <Text style = {[styles.h3_text]}>Bills</Text>
            </View>
            <Text style = {[styles.h3_text]}>71%</Text>
            </View>
            <View style = {styles.progressBar}/>
            <View style = {styles.category}>
            <View style = {{flexDirection: 'row', columnGap: 15}}>
                <FontAwesomeIcon size={20} icon={faHeart} color='#ee3853'/>
                <Text style = {[styles.h3_text]}>Health</Text>
            </View>
            <Text style = {[styles.h3_text]}>70%</Text>
            </View>
            <View style = {styles.progressBar}/>
            <View style = {styles.category}>
            <View style = {{flexDirection: 'row', columnGap: 15}}>
                <FontAwesomeIcon size={20} icon={faCartShopping} color='#25483a'/>
                <Text style = {[styles.h3_text]}>Groceries</Text>
            </View>
            <Text style = {[styles.h3_text]}>64%</Text>
            </View>
            <View style = {styles.progressBar}/>
            <View style = {styles.category}>
            <View style = {{flexDirection: 'row', columnGap: 15}}>
                <FontAwesomeIcon size={20} icon={faRefresh} color='#bf83ff'/>
                <Text style = {[styles.h3_text]}>Subscriptions</Text>
            </View>
            <Text style = {[styles.h3_text]}>62%</Text>
            </View>
            <View style = {styles.progressBar}/>
            </View>
        </View>
    )
}

export default budget_usage;