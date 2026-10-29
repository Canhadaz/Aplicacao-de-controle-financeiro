import { Text, useWindowDimensions, View } from 'react-native';

import { Link } from 'expo-router';
import { Plus } from 'react-native-feather';
import getStyles from './styles';

const add_transaction = () => {
    const { width } = useWindowDimensions();
    const styles = getStyles(width);
    
    return (
        <View style = {styles.container}>
            <Link href={'/nova_transacao'} >
            <View style = {styles.transactionButton}>
                <View style = {styles.circle}>
                <Plus size={15} color='white'/>
                </View>
                <Text style = {styles.h3_text}>Add Transaction</Text>
            </View>
            </Link>
        </View>
    )
}

export default add_transaction;