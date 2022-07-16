import React,
{
  useState,
} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,

  Dimensions,
  Animated,
  TouchableWithoutFeedback,
  Alert,
  ActivityIndicator,

} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../constants';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RadioButton } from 'react-native-paper';
import { Hstack, KeyboardavoidingWrapper } from '../../components';
import fetchService from '../../services/fetchService';


const Styledtextinput = (props) => {
  const [text, onChangeText] = React.useState("");
  // https://godconnect.online/api/UserMgmtAPI/ProfileCheck
  return (
    <View>

      <Text
        style={{
          fontSize: 15,
          fontWeight: '500',
          fontFamily: 'Comfortaa',
          color: '#edf2f4',
          marginTop: 10,
        }}>
        {props.title}
      </Text>
      <View style={{
        flexDirection: 'row',
        width: '100%',
        // height: 40,
        marginHorizontal: 5,
        borderBottomWidth: 1,
        borderColor: colors.inputs,
        alignItems: 'center',
        marginTop: -10,
      }}>

        {!props.MaterialCommunityIcons ? <FontAwesome name={props.icon} size={20} color={colors.inputs} style={{
          marginBottom: -10
        }} /> :
          <MaterialCommunityIcons name={props.icon} size={20} color={colors.inputs} style={{
            marginBottom: -10
          }} />}
        <TextInput
          style={{
            marginLeft: 5,
            fontWeight: '400',
            fontSize: 15,
            marginBottom: -10,
            color: '#caf0f8',
            flex: 1,
          }}
          // onChangeText={props.onChangeText}
          value={text}
          placeholder={props.lable}
          placeholderTextColor={colors.inputs}
          autoCapitalize="none"
          {...props}
        // onEndEditing={() => {
        //   if (input) onChangeText(input);
        //   onChangeText("");
        // }}
        />
      </View>
      {props.error ? (
        <Text
          style={{
            color: 'red',
            fontSize: 13.5,
            marginBottom: -10,
            marginLeft: 11,
          }}>
          {props.error}
        </Text>
      ) : (
        <Text
          style={{
            color: 'red',
            fontSize: 13.5,
            marginBottom: -10,
            marginLeft: 11,
          }}></Text>
      )}
    </View>
  )
}

validateEmail = (email) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (emailRegex.test(email)) {
    return true;
  } else {
    return false;
  }
}
export default function Signupscreen({ navigation }) {
  const [Loading, setLoading] = React.useState("");
  const [checked, setChecked] = React.useState('');
  const [hidePass, setHidePass] = React.useState(true);
  const [hidecnfPass, setcnfHidePass] = React.useState(true);
  const [EmailId, setEmailId] = useState('')
  const [UserName, setUserName] = useState('')
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [PWord, setPWord] = useState('')
  const [cnfPWord, setcnfPWord] = useState('')
  const [CountryCode, setCountryCode] = useState('')
  const [ContactNumber, setContactNumber] = useState('')
  const [ZipCode, setZipCode] = useState('')
  const [Gender, setGender] = useState('')
  const [error, setError] = useState('');

  const handleSignup = async () => {
    if (FirstName === '') {
      Alert.alert('Error!', 'Please enter Details', [{ text: 'Okay' }]);
      return;
    }
    if (LastName === '') {
      Alert.alert('Error!', 'Please enter LastName', [{ text: 'Okay' }]);
      return;
    }
    if (UserName === '') {
      Alert.alert('Error!', 'Please enter UserName', [{ text: 'Okay' }]);
      return;
    }
    if (EmailId === '') {
      Alert.alert('Error!', 'Please enter Email', [{ text: 'Okay' }]);
      return;
    }
    if (PWord === '') {
      Alert.alert('Error!', 'Please enter Password', [{ text: 'Okay' }]);
      return;
    }
    if (cnfPWord === '') {
      Alert.alert('Error!', 'Please enter Confirm Password', [{ text: 'Okay' }]);
      return;
    }
    if (PWord != cnfPWord) {
      Alert.alert('Error!', 'Password and Confirm password must be same', [{ text: 'Okay' }]);
      return;
    }
    if (CountryCode === '') {
      Alert.alert('Error!', 'Please enter CountryCode ', [{ text: 'Okay' }]);
      return;
    }
    if (ContactNumber === '') {
      Alert.alert('Error!', 'Please enter ContactNumber', [{ text: 'Okay' }]);
      return;
    }
    if (ZipCode === '') {
      Alert.alert('Error!', 'Please enter ZipCode', [{ text: 'Okay' }]);
      return;
    }
    if (Gender === '') {
      Alert.alert('Error!', 'Please enter Gender', [{ text: 'Okay' }]);
      return;
    }
    setLoading(true);
    const response = await fetchService.register(
      EmailId,
      UserName,
      FirstName,
      LastName,
      PWord,
      CountryCode,
      ContactNumber,
      ZipCode,
      Gender,
    );
    setLoading(false);
    console.log(response);
    {
      response.msg &&
        Alert.alert('Error!', response.msg, [{ text: 'Okay' }]);

    }
    if (response.status) {
      let userData = response.data ? response.data : {};
      {
        console.log(userData);
        // userData.token = userData.access_token;
      }
      // console.log('user', userData);
      navigation.replace('Homescreen', {
        EmailId: EmailId,
      });
      // navigation.navigate('Appscreen');
    } else {
      setError(response.message);
    }
  };

  let dimensions = Dimensions.get('window');
  let imageHeight = dimensions.height;
  return (
    <KeyboardavoidingWrapper>

      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          padding: 10,
        }}>
        {Loading && <View
          style={[{
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            end: 0,
            flex: 1,
            backgroundColor: '#00000070',
            zIndex: 400,
            height: '100%',
            // height: 100,
            marginBottom: -30

          }]} />}
        <Octicons name='arrow-left'
          onPress={() =>
            navigation.navigate('Onboardingscreen', {
              status: 'back',
            })}
          // navigation.navigate('Onboardingscreen')}

          size={30} color={colors.white} />
        <Text
          style={{
            fontSize: 40,
            fontWeight: '700',
            fontFamily: 'Comfortaa',
            color: colors.white,
            marginTop: 15,
          }}
        >
          Hello!
        </Text>
        {error && <Text
          style={{
            fontSize: 40,
            fontWeight: '700',
            fontFamily: 'Comfortaa',
            color: 'red',
            marginTop: 15,
          }}
        >
          error
        </Text>}
        <Text
          style={{
            fontSize: 25,
            fontWeight: '600',
            fontFamily: 'Comfortaa',
            color: colors.white,
            marginTop: -5,
            marginBottom: 15
          }}
        >
          Register Here
        </Text>
        <Styledtextinput
          // style={styles.textinput}
          onChangeText={setFirstName}
          value={FirstName}
          placeholder='First Name'
          placeholderTextColor={colors.inputs}
          autoCapitalize="none"
          title='First Name'
          icon='user'
        />
        <Styledtextinput
          // style={styles.textinput}
          onChangeText={setLastName}
          value={LastName}
          placeholder='Last Name'
          placeholderTextColor={colors.inputs}
          autoCapitalize="none"
          title='Last Name'
          icon='user'
        />
        <Styledtextinput
          // style={styles.textinput}
          onChangeText={setUserName}
          value={UserName}
          placeholder='User Name'
          placeholderTextColor={colors.inputs}
          autoCapitalize="none"
          title='UserName'
          icon='user'
        />
        <Styledtextinput
          onChangeText={setEmailId}
          value={EmailId}
          placeholder='Email'
          placeholderTextColor={colors.inputs}
          autoCapitalize="none"
          title='Enter your email'
          icon='email'
          keyboardType='email-address'
          MaterialCommunityIcons

        />
        <Hstack centered between styles={[{
          // marginTop: 15,
          // backgroundColor: '#99999990',
          // borderRadius: 10,
          // paddingHorizontal: 15,
        }]}>
          <Styledtextinput
            onChangeText={setPWord}
            value={PWord}
            placeholder='Enter Password'
            placeholderTextColor={colors.inputs}
            autoCapitalize="none"
            title='Enter your Password'
            icon='lock'
            keyboardType='password'
            secureTextEntry={hidePass ? true : false}
            style={{
              width: '80%',
              marginLeft: 5,
              fontWeight: '400',
              fontSize: 15,
              marginBottom: -10,
              color: '#caf0f8',

            }}

          />
          <FontAwesome5
            name={hidePass ? 'eye-slash' : 'eye'}
            size={20}
            // style={{ alignSelf: 'flex-end' }}
            color="#caf0f8"
            onPress={() => setHidePass(!hidePass)}
          />
        </Hstack>
        <Hstack centered between styles={[{

        }]}>
          <Styledtextinput
            onChangeText={setcnfPWord}
            value={cnfPWord}
            placeholder='Confirm Password'
            placeholderTextColor={colors.inputs}
            autoCapitalize="none"
            title='Enter Confirm Password'
            icon='lock'
            keyboardType='password'
            secureTextEntry={hidecnfPass ? true : false}
            style={{
              width: '80%',
              marginLeft: 5,
              fontWeight: '400',
              fontSize: 15,
              marginBottom: -10,
              color: '#caf0f8',

            }}
          />
          <FontAwesome5
            name={hidecnfPass ? 'eye-slash' : 'eye'}
            size={20}
            color="#caf0f8"
            onPress={() => setcnfHidePass(!hidecnfPass)}
          />
        </Hstack>

        <Styledtextinput
          onChangeText={setCountryCode}
          value={CountryCode}
          placeholder='Code'
          placeholderTextColor={colors.inputs}
          autoCapitalize="none"
          title='Enter CountryCode'
          icon='earth'
          keyboardType='numeric'
          MaterialCommunityIcons
          maxLength={4}
        />
        <Styledtextinput
          onChangeText={setContactNumber}
          value={ContactNumber}
          placeholder='Contact Number'
          placeholderTextColor={colors.inputs}
          autoCapitalize="none"
          title='Enter Your Contact Number'
          icon='contacts-outline'
          keyboardType='numeric'
          MaterialCommunityIcons
          maxLength={10}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: '400',
            fontFamily: 'Comfortaa',
            color: '#faedcd',
            marginTop: 10,
          }}>
          Select Gender
        </Text>
        <Hstack >
          <Hstack centered>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '400',
                fontFamily: 'Comfortaa',
                color: '#faedcd'
              }}>
              Male
            </Text>
            <RadioButton
              uncheckedColor='#ffbd00'
              value="Male"
              status={Gender === 'Male' ? 'checked' : 'unchecked'}
              onPress={() => setGender('Male')}
            />
          </Hstack>
          <Hstack centered>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '400',
                fontFamily: 'Comfortaa',
                color: '#faedcd'
              }}>
              Female
            </Text>
            <RadioButton
              uncheckedColor='#ffbd00'
              value="Female"
              status={Gender === 'Female' ? 'checked' : 'unchecked'}
              onPress={() => setGender('Female')}
            />
          </Hstack >

        </Hstack>
        <Styledtextinput
          onChangeText={setZipCode}
          value={ZipCode}
          placeholder='ZipCode'
          placeholderTextColor={colors.inputs}
          autoCapitalize="none"
          title='Enter Your ZipCode'
          icon='sign-real-estate'
          keyboardType='numeric'
          MaterialCommunityIcons
          maxLength={6}
        />
        <TouchableOpacity
          onPress={() => {
            Loading ? null :
              handleSignup()
          }}

          style={{
            backgroundColor: '#faedcd',
            padding: 15,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
            height: 60
          }}>
          {Loading ?
            <ActivityIndicator />
            : <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                fontFamily: 'Comfortaa',
                color: '#ff5400'
              }}>
              Press to signup

            </Text>}
        </TouchableOpacity>

      </View >
    </KeyboardavoidingWrapper>
  )
}

const styles = StyleSheet.create({
  textinput: {
    fontWeight: '600',
    fontSize: 20,
    marginTop: 15,
    color: '#caf0f8',
    backgroundColor: '#99999990',
    borderRadius: 10,
    padding: 10,
    paddingLeft: 15,
  },
})