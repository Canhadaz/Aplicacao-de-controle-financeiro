import { ScrollView, StyleSheet, View } from 'react-native';

import Monthly_expenses from '@/components/Monthly_expenses';
import Monthly_income from '@/components/monthly_income';

const Reports = () => {
    return(
        <ScrollView showsVerticalScrollIndicator ={false}>
        <View style = {styles.container}>
            <Monthly_income/>
            <Monthly_expenses/>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        //alignItems: 'center',
        padding: 15,
        backgroundColor: '#f1f0f6',
        rowGap: 20
    }
})

export default Reports;