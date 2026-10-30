import { Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';

import { ArrowRight } from 'react-native-feather';
import getStyles from './styles';

const transactions_his = () => {
    const { width } = useWindowDimensions();
    const styles = getStyles(width);
    
    return (
        <View style = {styles.container}>
            <View style = {styles.box}>
                <Text style ={[styles.h3_opactity, {fontSize: 14}]}>Today</Text>
                <TouchableOpacity style = {styles.category} activeOpacity={0.7}>
                <View style = {{flexDirection: 'column', rowGap: 8}}>
                    <Text style = {styles.h3_text}>Inteligentsia Coffe</Text>
                    <Text style = {styles.h3_opactity}>8-24pm - Restaurants & cafes</Text>
                </View>
                <View style = {{flexDirection: 'row', columnGap: 5, alignItems: 'center'}}>
                    <Text style = {styles.h3_text}>$10.95</Text>
                    <ArrowRight  size = {20} style = {{opacity: 0.7}}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.category} activeOpacity={0.7}>
                <View style = {{flexDirection: 'column', rowGap: 8}}>
                    <Text style = {styles.h3_text}>Inteligentsia Coffe</Text>
                    <Text style = {styles.h3_opactity}>8-24pm - Restaurants & cafes</Text>
                </View>
                <View style = {{flexDirection: 'row', columnGap: 5, alignItems: 'center'}}>
                    <Text style = {styles.h3_text}>$10.95</Text>
                    <ArrowRight  size = {20} style = {{opacity: 0.7}}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.category} activeOpacity={0.7}>
                <View style = {{flexDirection: 'column', rowGap: 8}}>
                    <Text style = {styles.h3_text}>Inteligentsia Coffe</Text>
                    <Text style = {styles.h3_opactity}>8-24pm - Restaurants & cafes</Text>
                </View>
                <View style = {{flexDirection: 'row', columnGap: 5, alignItems: 'center'}}>
                    <Text style = {styles.h3_text}>$10.95</Text>
                    <ArrowRight  size = {20} style = {{opacity: 0.7}}/>
                </View>
                </TouchableOpacity>
            </View>
            <View style = {styles.box}>
                <Text style ={[styles.h3_opactity, {fontSize: 14}]}>Yesterday</Text>
                <TouchableOpacity style = {styles.category} activeOpacity={0.7}>
                <View style = {{flexDirection: 'column', rowGap: 8}}>
                    <Text style = {styles.h3_text}>Inteligentsia Coffe</Text>
                    <Text style = {styles.h3_opactity}>8-24pm - Restaurants & cafes</Text>
                </View>
                <View style = {{flexDirection: 'row', columnGap: 5, alignItems: 'center'}}>
                    <Text style = {styles.h3_text}>$10.95</Text>
                    <ArrowRight  size = {20} style = {{opacity: 0.7}}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.category} activeOpacity={0.7}>
                <View style = {{flexDirection: 'column', rowGap: 8}}>
                    <Text style = {styles.h3_text}>Inteligentsia Coffe</Text>
                    <Text style = {styles.h3_opactity}>8-24pm - Restaurants & cafes</Text>
                </View>
                <View style = {{flexDirection: 'row', columnGap: 5, alignItems: 'center'}}>
                    <Text style = {styles.h3_text}>$10.95</Text>
                    <ArrowRight  size = {20} style = {{opacity: 0.7}}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.category} activeOpacity={0.7}>
                <View style = {{flexDirection: 'column', rowGap: 8}}>
                    <Text style = {styles.h3_text}>Inteligentsia Coffe</Text>
                    <Text style = {styles.h3_opactity}>8-24pm - Restaurants & cafes</Text>
                </View>
                <View style = {{flexDirection: 'row', columnGap: 5, alignItems: 'center'}}>
                    <Text style = {styles.h3_text}>$10.95</Text>
                    <ArrowRight  size = {20} style = {{opacity: 0.7}}/>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default transactions_his;