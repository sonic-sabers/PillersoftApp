import React,
{
	Component,
	useState,
	useEffect,
	useRef,
	cloneElement
} from 'react';
import {
	StyleSheet,
	Button,
	Image,
	Text,
	TouchableOpacity,
	View,
	TextInput,
	ScrollView,
	KeyboardAvoidingView,
	SafeAreaView,
	ImageBackground,
	FlatList,
	ViewPropTypes,
	Switch,
	Dimensions,
	ActivityIndicator,
	Keyboard,
	TouchableWithoutFeedback,


} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Hstack, KeyboardavoidingWrapper, Rewardcarousel } from '../../components';
import { colors } from '../../constants';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Searchcomponent = ({ item }) => {
	return (
		<View
			style={{
				backgroundColor: colors.white,
				shadowColor: "#000",
				shadowOffset: {
					width: 0,
					height: 8,
				},
				shadowOpacity: 0.44,
				shadowRadius: 10.32,
				elevation: 16,
				padding: 10,
				borderRadius: 10,
				margin: 5,
				// height: 100,
				marginHorizontal: 15,
			}}
		>
			<Text
				style={{
					fontSize: 15,
					fontWeight: '400',
					fontFamily: 'Roboto',
					color: '#000',
					margin: 10,
				}}
				onPress={() => getItem(item)}>
				{item.id}
				{'.'}
				{item.title.toUpperCase()}
			</Text>
		</View>
	)
}

const Searchbutton = (props) => {
	// const [text, onChangeText] = React.useState("");
	return (
		<View style={{
			margin: 12,
		}}>

			<View style={{
				flexDirection: 'row',
				alignItems: 'center',
				// justifyContent: 'center',

				borderWidth: 1.5,
				paddingHorizontal: 10,
				borderRadius: 25,
				borderColor: colors.primary,
				height: 45,
				paddingRight: 15,
			}}>
				<TextInput
					style={{
						flex: 1,
						fontWeight: '400',
						fontSize: 15,
						color: '#999',
					}}
					autoCapitalize="none"
					// onChangeText={onChangeText}
					// value={text}
					placeholderTextColor={colors.lightblack}
					placeholder='Search'
					{...props}
				/>
				{/* value */}
				{props.value ?
					<TouchableOpacity
						onPress={() => props.setSearch('')}
					>
						<Entypo name='cross' size={22} color={colors.lightblack} />
					</TouchableOpacity>
					:
					<AntDesign name='search1' size={22} color={colors.lightblack} />
				}
			</View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-evenly',
					marginTop: 10,

				}}>
				<TouchableOpacity>
					<Hstack centered>
						<AntDesign name='filter' size={15} color={colors.lightblack} />
						<Text
							style={{
								fontSize: 13,
								fontWeight: '600',
								fontFamily: 'Roboto',
								marginLeft: 5,
								color: colors.lightblack
							}}>
							Filter
						</Text>
					</Hstack>
				</TouchableOpacity>
				<TouchableOpacity>
					<Hstack centered>
						<FontAwesome
							name='sort-amount-desc' size={15} color={colors.lightblack} />
						<Text
							style={{
								fontSize: 13,
								fontWeight: '600',
								fontFamily: 'Roboto',
								color: colors.lightblack,
								marginLeft: 5,
							}}>
							Sort
						</Text>
					</Hstack>
				</TouchableOpacity>
			</View>
		</View>
	)
}




const getItem = (item) => {
	// Function for click on an item
	alert('Id : ' + item.id + ' Title : ' + item.title);
};


export default function Searchscreen() {
	const [search, setSearch] = useState('');
	const [filteredDataSource, setFilteredDataSource] = useState([]);
	const [masterDataSource, setMasterDataSource] = useState([]);
	const [Loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true)
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((responseJson) => {
				setFilteredDataSource(responseJson);
				setMasterDataSource(responseJson);
				setLoading(false)
			})
			.catch((error) => {
				console.error(error);
				// alert(error);
				// setLoading(false)
			});
	}, []);

	const searchFilterFunction = (text) => {
		// Check if searched text is not blank
		if (text) {
			// Inserted text is not blank
			// Filter the masterDataSource
			// Update FilteredDataSource
			const newData = masterDataSource.filter(
				function (item) {
					const itemData = item.title
						? item.title.toUpperCase()
						: ''.toUpperCase();
					const textData = text.toUpperCase();
					return itemData.indexOf(textData) > -1;
				});
			setFilteredDataSource(newData);
			setSearch(text);
		} else {
			// Inserted text is blank
			// Update FilteredDataSource with masterDataSource
			setFilteredDataSource(masterDataSource);
			setSearch(text);
		}
	};

	const ItemView = ({ item }) => {
		return (
			// Flat List Item
			<Text
				style={{
					fontSize: 15,
					fontWeight: '400',
					fontFamily: 'Roboto',
					color: '#000',
					margin: 10,
				}}
				onPress={() => getItem(item)}>
				{item.id}
				{'.'}
				{item.title.toUpperCase()}
			</Text>
		);
	};

	const ItemSeparatorView = () => {
		return (
			// Flat List Item Separator
			<View
				style={{
					height: 0.5,
					width: '100%',
					backgroundColor: '#C8C8C8',
				}}
			/>
		);
	};

	return (
		<KeyboardAvoidingView style={{ flex: 1 }}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} >
				<>
					<View
						scrollEnabled={false}
						style={{
							paddingTop: 10,
							backgroundColor: colors.white
						}}>


						<Searchbutton
							onChangeText={(text) => searchFilterFunction(text)}
							value={search}
							underlineColorAndroid="transparent"
							autoFocus
							autoCapitalize='sentences'
							caretHidden
							contextMenuHidden
							returnKeyType={search}
							selectTextOnFocus
							search
							setSearch={setSearch}
						// onEndEditing={searchFilterFunction('')}
						/>

						{/* <TextInput
				style={styles.textInputStyle}
				onChangeText={(text) => searchFilterFunction(text)}
				value={search}
				underlineColorAndroid="transparent"
				placeholder="Search Here"
			/> */}
						{!(Loading) ?
							<FlatList
								// initialNumToRender={4}
								data={filteredDataSource}
								keyExtractor={(item, index) => index.toString()}
								ItemSeparatorComponent={ItemSeparatorView}
								renderItem={Searchcomponent}
								keyboardDismissMode='onDrag'
								decelerationRate='normal'
								keyboardShouldPersistTaps='handled'
								pagingEnabled
								initialNumToRender={10}
								maxToRenderPerBatch={10}
								removeClippedSubviews={true}
							/> :
							<ActivityIndicator
								animating
								color={colors.primary}
							/>
						}
						{/* {Array.from(Array(10).keys()).map((i) => (
				<View
					key={i}
				>
					<Searchcomponent />
				</View>
			))} */}

						<View style={{ paddingBottom: 80 }} />

					</View>
				</>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
	},
	itemStyle: {
		padding: 10,
	},
	textInputStyle: {
		height: 40,
		borderWidth: 1,
		paddingLeft: 20,
		margin: 5,
		borderColor: '#009688',
		backgroundColor: '#FFFFFF',
	},
});