import { ScrollView, StyleSheet, View } from 'react-native';

import Add_transaction from '@/components/add_transaction';
import Search_bar from '@/components/search_bar';
import Transactions_his from '@/components/transactions_his';

const Transactions = () => {
    return(
        <ScrollView showsVerticalScrollIndicator = {false}>
        <View style = {styles.container}>
            <Search_bar/>
            <Add_transaction/>
            <Transactions_his/>
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

export default Transactions;