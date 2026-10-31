import { Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native';

import { faCalendar, faSearch, faSliders } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import getStyles from './styles';

const search_bar = () => {
    const { width } = useWindowDimensions();
    const styles = getStyles(width);
    
    return (
        <View style = {styles.container}>
            <View style = {styles.box}>
                {/* <View style = {styles.search_header}>
                    <X size={25}/>
                    <Text style = {styles.h3_text}>Search transactions</Text>
                    <Upload size={23}/>
                </View> */}
                <View style = {styles.input_row}>
                    <FontAwesomeIcon icon = {faSearch} size={22}/>
                    <TextInput placeholder = 'Search'></TextInput>
                </View>
                <View style = {styles.filter_section}>
                    <TouchableOpacity style = {styles.circle} activeOpacity={0.7}>
                        <FontAwesomeIcon icon={faSliders}/>
                        <Text style = {[styles.h3_opactity, {opacity: 1}]}>Filters</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.circle} activeOpacity={0.7}>
                        <FontAwesomeIcon icon={faCalendar}/>
                        <Text style = {[styles.h3_opactity, {opacity: 1}]}>Date</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default search_bar;