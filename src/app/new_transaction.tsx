import { StyleSheet, View } from 'react-native';

import Input_transactions from '@/components/input_transaction';
import Save_button from '@/components/save_button';

const new_transaction = () => {
    return(
        <View style = {styles.container}>
            <Input_transactions/>
            <Save_button/>
        </View>
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
        rowGap: 20,
    },
})

export default new_transaction;