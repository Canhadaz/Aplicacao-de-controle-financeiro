import { Text, useWindowDimensions, View } from 'react-native';

import getStyles from './styles';

import { faBoltLightning, faCartShopping, faHeart, faRefresh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const budget_usage = () => {

    const dados = [
        {icon: faBoltLightning, text: 'Bills', percentage: '71%', color: '#ffc00f'},
        {icon: faHeart, text: 'Health', percentage: '70%', color: '#ee3853'},
        {icon: faCartShopping, text: 'Groceries', percentage: '64%', color: '#25483a'},
        {icon: faRefresh, text: 'Subscriptions', percentage: '82%', color: '#bf83ff'},
    ]

    const { width } = useWindowDimensions();
    const styles = getStyles(width);
    
    return (
        // que gambiarra do crl, mas é oq tem pra hj
        <View style = {styles.container}>
            <Text style = {[styles.h3_text,{color: '#959595'}]}>BUDGET USAGE</Text>
            <View style = {styles.box}>
            {dados.map((item, index) => (
            <View key={`${item.text}-${index}`}>
                <View style={[styles.category, { paddingBottom: 10 }]}>
                <View style={{ flexDirection: 'row', columnGap: 15 }}>
                    <FontAwesomeIcon size={20} icon={item.icon} color={item.color}/>
                    <Text style={styles.h3_text}>{item.text}</Text>
                </View>
                    <Text style={styles.h3_text}>{item.percentage}</Text>
                </View>
                <View style={[styles.progressBar,
                    {backgroundColor: item.color,
                    width: item.percentage,
                    position: 'relative',
                    zIndex: 5,},]}/>
                <View style={[styles.progressBar,
                    {position: 'relative', 
                    bottom: 26, 
                    marginBottom: -5 },]}/>
            </View>))}
            </View>
        </View>
    )
}

export default budget_usage;