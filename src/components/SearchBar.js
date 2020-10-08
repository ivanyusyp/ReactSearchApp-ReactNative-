import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.backgroundStyle}>
			<Feather
				name="search"
				size={35}
				style={{
					marginHorizontal: 15,
					alignSelf: "center",
				}}
			/>
			<TextInput
				autoCapitalize='none'
				autoCorrect={false}
				style={styles.inputStyle}
				placeholder="Search"
				value={term}
				onChangeText={onTermChange}
				onEndEditing={onTermSubmit}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	backgroundStyle: {
		marginTop: 15,
		backgroundColor: '#c9c2bb',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: 'row',
	},
	inputStyle: {
		fontSize: 18,
		flex: 1
	},
});

export default SearchBar;