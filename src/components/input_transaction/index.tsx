import { Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native';

import { faArrowLeft, faCalendar, faDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Link } from 'expo-router';
import { useState } from 'react';
import getStyles from './styles';

const Input_transactions = () => {
    const { width } = useWindowDimensions();
    const styles = getStyles(width);
    
    type TransactionType = 'Spend'|'Income'|'Transfer';
    
    const [selectedButton, setSelectedButton] = useState<TransactionType>('Spend');
    const [stateDescription, setDescription] = useState(false);

    const transactionTexts = {
        Spend: {
            Title: 'Enter Spent Amount:',background: '#feebea',
            input_1: 'Paid To',input_2: 'Category',
            input_3: 'Payment',input_4: 'Spend',
        },
        Income: {
            Title: 'Enter Income Amount:',background: '#e7fdeb',
            input_1: 'Received From',input_2: 'Category',
            input_3: 'Payment',input_4: 'Income',
        },
        Transfer:{
            Title: 'Enter Transfered Amount:',background: '#e6f3fc',   
            input_1: 'To Account',input_2: 'From Account',
            input_3: 'Notes',input_4: 'Attach Receipt Bill', 
        },
    };

    const selectedTexts = transactionTexts[selectedButton];

    return (
        <View style = {styles.container}>
                <View style = {[styles.search_header, {columnGap: 20}]}>
                    <Link href={'/(tabs)/transactions'}>
                        <FontAwesomeIcon icon={faArrowLeft} size={25}/>
                    </Link>
                    <Text style = {styles.h1_text}>Add Transaction</Text>
                </View> 
            <View style = {styles.box}>
                <View style = {[styles.search_header, {justifyContent: 'space-between'}]}>
                    <TouchableOpacity 
                        style = {[styles.button, selectedButton == 'Spend' && styles.button_selected]} 
                        onPress={() => setSelectedButton('Spend')} 
                        activeOpacity={0.7}>
                        {selectedButton == 'Spend' ? 
                        <Text style = {styles.h3_text_button}>Spend</Text> : 
                        <Text style = {styles.h3_text}>Spend</Text>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style = {[styles.button, selectedButton == 'Income' && styles.button_selected]} 
                        onPress={() => setSelectedButton('Income')} 
                        activeOpacity={0.7}>
                        {selectedButton == 'Income' ? 
                        <Text style = {styles.h3_text_button}>Income</Text> : 
                        <Text style = {styles.h3_text}>Income</Text>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style = {[styles.button, selectedButton == 'Transfer' && styles.button_selected]}  
                        onPress={() => setSelectedButton('Transfer')} 
                        activeOpacity={0.7}>
                        {selectedButton == 'Transfer' ? 
                        <Text style = {styles.h3_text_button}>Transfer</Text> : 
                        <Text style = {styles.h3_text}>Transfer</Text>
                        }
                    </TouchableOpacity>
                </View>
                <View style = {[styles.enter_amount, {backgroundColor: selectedTexts.background}]}>
                    <Text style = {[styles.h2_text]}>{selectedTexts.Title}</Text>
                    <View style = {[styles.row_amount,{borderBottomWidth: 2,borderColor: '#00000080'},]}>
                        <FontAwesomeIcon icon={faDollar} size={25} style={{alignSelf: 'center'}}/>
                        <TextInput placeholder='0.00' style = {[styles.h1_opactity, {width: '9aaaaaaaa0%'}]} maxLength={10}></TextInput>
                    </View>
                    <View style = {[styles.row_amount, {justifyContent: 'center',columnGap: 5}]}>
                        <FontAwesomeIcon icon={faCalendar}/>
                        <Text style = {{fontSize: 13, fontWeight: 600}}>Today, 08:13am</Text>
                    </View>
                </View>
                
                <View style = {styles.input_bar}>
                    <TextInput placeholder={selectedTexts.input_1} 
                    placeholderTextColor={'black'} 
                    style = {{fontSize: 16, fontWeight: 500}}>
                    </TextInput>
                </View>
                <View style = {styles.input_bar}>
                    <TextInput placeholder={selectedTexts.input_2} 
                    placeholderTextColor={'black'} 
                    style = {{fontSize: 16, fontWeight: 500}}>
                    </TextInput>
                </View>
                <View style = {styles.input_bar}>
                    <TextInput placeholder={selectedTexts.input_3} 
                    placeholderTextColor={'black'} 
                    style = {{fontSize: 16, fontWeight: 500}}>
                    </TextInput>
                </View>
                <View style = {styles.input_bar}>
                    <TextInput placeholder={selectedTexts.input_4} 
                    placeholderTextColor={'black'} 
                    style = {{fontSize: 16, fontWeight: 500}}>
                    </TextInput>
                </View>
                
                <TouchableOpacity onPress={() => setDescription(!stateDescription)} activeOpacity={0.7} 
                    style = {[styles.description_box, stateDescription == true && styles.description_box_true]}>
                    <TextInput placeholder='Description' 
                    style = {{fontSize: 16, fontWeight: 500}} 
                    placeholderTextColor={'black'}>
                    </TextInput>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Input_transactions;