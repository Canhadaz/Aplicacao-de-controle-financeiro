import { Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';

import { ArrowRight } from 'react-native-feather';
import getStyles from './styles';

const transactions_his = () => {
    const { width } = useWindowDimensions();
    const styles = getStyles(width);
    
    const dados = [
        {value: 81.17, name: 'Inteligentsia Coffe', open: '8-24pm', type: 'Restaurants & cafes'},
        {value: 10.45, name: 'Inteligentsia Coffe', open: '8-24pm', type: 'Restaurants & cafes'},
        {value: 32.99, name: 'Inteligentsia Coffe', open: '8-24pm', type: 'Restaurants & cafes'},
        {value: 51.05, name: 'Inteligentsia Coffe', open: '8-24pm', type: 'Restaurants & cafes'},
    ]
    const dados2 = [
        {value: 12.35, name: 'Inteligentsia Coffe', open: '8-24pm', type: 'Restaurants & cafes'},
        {value: 23.05, name: 'Inteligentsia Coffe', open: '8-24pm', type: 'Restaurants & cafes'},
        {value: 16.21, name: 'Inteligentsia Coffe', open: '8-24pm', type: 'Restaurants & cafes'},
        {value: 18.99, name: 'Inteligentsia Coffe', open: '8-24pm', type: 'Restaurants & cafes'},
    ]

    return (
        <View style = {styles.container}>
            <View style = {styles.box}>
                <Text style ={[styles.h3_opactity, {fontSize: 14}]}>Today</Text>
                {dados.map((item,index) => (
                    <TouchableOpacity key={index} style = {styles.category} activeOpacity={0.7}>
                        <View style = {{flexDirection: 'column', rowGap: 8}}>
                            <Text style = {styles.h3_text}>{item.name}</Text>
                            <Text style = {styles.h3_opactity}>{item.open}- {item.type}</Text>
                        </View>
                        <View style = {{flexDirection: 'row', columnGap: 5, alignItems: 'center'}}>
                            <Text style = {styles.h3_text}>${item.value}</Text>
                            <ArrowRight  size = {20} style = {{opacity: 0.7}}/>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
            <View style = {styles.box}>
                <Text style ={[styles.h3_opactity, {fontSize: 14}]}>Yesterday</Text>
                {dados2.map((item,index) => (
                <TouchableOpacity key={index} style = {styles.category} activeOpacity={0.7}>
                    <View style = {{flexDirection: 'column', rowGap: 8}}>
                        <Text style = {styles.h3_text}>{item.name}</Text>
                        <Text style = {styles.h3_opactity}>{item.open}- {item.type}</Text>
                    </View>
                    <View style = {{flexDirection: 'row', columnGap: 5, alignItems: 'center'}}>
                        <Text style = {styles.h3_text}>${item.value}</Text>
                        <ArrowRight  size = {20} style = {{opacity: 0.7}}/>
                    </View>
                </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

export default transactions_his;