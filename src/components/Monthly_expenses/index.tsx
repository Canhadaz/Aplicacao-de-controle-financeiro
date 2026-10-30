import { Text, useWindowDimensions, View } from 'react-native';

import getStyles from './styles';

const Monthly_expenses = () => {
    
    const { width } = useWindowDimensions();
    const styles = getStyles(width)
        
    const values = [
            {value: 6600, month: 'Jan'},
            {value: 3200, month: 'Feb'},
            {value: 3930, month: 'Mar'},
            {value: 5800, month: 'Abr'},
            {value: 4900, month: 'May'},
            {value: 4950, month: 'Jun'},
            {value: 3700, month: 'Jul'},
            {value: 2650, month: 'Aug'},
            {value: 1900, month: 'Sep'},
            {value: 6500, month: 'Nov'},
            {value: 3900, month: 'Dec'},
        ];
        let counter: number = 0;
        let income_total: number = 0;
        let highest_income: number = 0;
        let lowest_income: number = 999999999;
        
        for (const value of values){
            counter += 1;
            income_total += value.value;
            highest_income < value.value ? highest_income = value.value : highest_income
            lowest_income > value.value ? lowest_income = value.value : lowest_income
        }
        
        const average_income: number = income_total / counter;

    counter = 0;

    return (
        <View style = {styles.container}>
            <View style = {styles.box}>
                <View style = {{
                    flexDirection: 'row', 
                    alignItems:'center', 
                    justifyContent:'space-between',
                    paddingHorizontal: 5}}>
                    <Text style = {styles.h1_text}>Monthly Expenses</Text>
                    <View style = {styles.circle}>
                    <Text style = {[styles.h3_text, {color: '#8e2a39'}]}>${income_total / 1000}K total</Text>
                    </View>
                </View>

                <View style = {{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',}}>
                    <View style = {styles.blocks}>
                        <Text style = {[styles.h3_text, {color: '#8e2a39'}]}>Average</Text>
                        <Text style = {styles.h2_text}>${average_income.toFixed(2)}</Text>
                    </View>
                    <View style = {styles.blocks}>
                        <Text style = {[styles.h3_text, {color: '#8e2a39'}]}>Highest</Text>
                        <Text style = {styles.h2_text}>${highest_income.toFixed(2)}</Text>
                    </View>
                    <View style = {styles.blocks}>
                        <Text style = {[styles.h3_text, {color: '#8e2a39'}]}>Lowest</Text>
                        <Text style = {styles.h2_text}>${lowest_income.toFixed(2)}</Text>
                    </View>
                </View>
                <View style = {{
                    flexDirection: 'row', 
                    backgroundColor: '#95959513', 
                    borderRadius: 10, 
                    padding: 5,
                    paddingBottom: 10}}>
                {values.map((item, index) => {
                
                let height = (item.value / highest_income) * 150
                let income = item.value / 1000
                return (
                    <View key={index} style = {{flexDirection: 'column-reverse', flex: 1, alignItems: 'center'}}>
                        <Text style = {styles.h3_opactity}>{item.month}</Text>
                        <View style = {[styles.column_value, {height: height}]}/>
                        <Text style = {[styles.h3_text, {fontSize: 11}]}>{income.toFixed(1)}K</Text>
                    </View>
                )})}
                </View>

            </View>
        </View>
    )
}

export default Monthly_expenses;
