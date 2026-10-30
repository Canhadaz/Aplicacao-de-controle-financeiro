import { ScrollView, StyleSheet, View } from 'react-native';

import Search_bar from '@/components/search_bar';
import Transactions_his from '@/components/transactions_his';

const Transacoes = () => {
    return(
        <ScrollView showsVerticalScrollIndicator = {false}>
        <View style = {styles.container}>
            <Search_bar/>
            <Transactions_his/>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        //alignItems: 'center',
        padding: 15,
        backgroundColor: '#f1f0f6',
        rowGap: 20
    }
})

export default Transacoes;