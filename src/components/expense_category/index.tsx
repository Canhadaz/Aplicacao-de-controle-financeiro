import { Text, useWindowDimensions, View } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';

import getStyles from './styles';

const expense_category = () => {
    const dados = [
        {value: 600, color: '#d8a343', text: 'Food'},
        {value: 300, color: '#268a60', text: 'Transportation'},
        {value: 400, color: '#45519e', text: 'Habitation'},
        {value: 800, color: '#a2c3bb', text: 'Leisure'},
    ];
    
    let total: number = 0
    for (const valor of dados){
        total += valor.value
    }

    const { width } = useWindowDimensions();
    const styles = getStyles(width);

    return (
        <View style = {styles.container}>
            <View style = {styles.box}>
                <Text style = {styles.h3_text}>Expense by Category</Text>
                <View style = {{alignItems: 'center'}}>
                <PieChart
                    data = {dados}
                    donut
                    radius={100}
                    innerRadius={70}
                    showText={false}
                    focusOnPress={false}
                    centerLabelComponent={() => {
                        return (
                            <View style = {{alignItems: 'center'}}>
                                <Text style = {styles.h1_text}>
                                    ${total.toFixed(2)}
                                </Text>
                            </View>
                        );
                    }}
                    />
                </View>
                {dados.map((item, index) => (
                <View key = {index} style={styles.legenda}>
                    <View style = {{flexDirection: 'row', alignItems: 'center', columnGap: 8}}>
                        <View style={{
                            width: 12,
                            height: 12,
                            borderRadius: 6,
                            backgroundColor: item.color,
                        }}/>
                        <Text style = {[styles.h3_opactity]}>{item.text}</Text>
                    </View>
                        <Text style = {styles.h3_text}>$ {item.value.toFixed(2)}</Text>
                </View>
                ))}
            </View>
        </View>
    )
}

export default expense_category;