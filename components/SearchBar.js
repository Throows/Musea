import React from 'react';
import { TextInput, StyleSheet} from 'react-native';

function SearchBar(props) {
    return (
        <TextInput
            style={styles.searchBar}
            placeholder="Search a song..."
            onEndEditing={props.onEndEditing}
        />
    );
}

export default SearchBar;

const styles = StyleSheet.create({
    searchBar: {
        padding: 10,
        margin: 20,
        height: 50,
        borderWidth: 2,
        borderRadius: 15,
    }
});