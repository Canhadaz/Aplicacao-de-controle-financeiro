import { ScrollView, StyleSheet, View } from 'react-native';

import Add_transaction from '@/components/add_transaction';
import Budget_usage from '@/components/budget_usage';

const Reports = () => {
    return(
        <ScrollView showsVerticalScrollIndicator ={false}>
        <View style = {styles.container}>
            <Add_transaction/>
            <Budget_usage/>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
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