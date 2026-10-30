import { ScrollView, StyleSheet, View } from 'react-native';

import Add_transaction from '@/components/add_transaction';
import Budget_usage from '@/components/budget_usage';
import Dashboard_button from '@/components/dashboard_button';
import Expense_category from '@/components/expense_category';
import Info_buttons from '@/components/info_buttons';

const Index = () => {
    return(
        <ScrollView showsVerticalScrollIndicator = {false}>
        <View style = {styles.container}>
            <Add_transaction/>
            <Dashboard_button/>
            <Info_buttons/>
            <Expense_category/>
            <Budget_usage/>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        //marginTop: 30,
        marginBottom: 30,
        flex: 1,
        flexDirection: 'column',
        //justifyContent: 'space-between',
        //alignItems: 'center',
        padding: 15,
        backgroundColor: '#f1f0f6',
        rowGap: 20,
    }
})

export default Index;