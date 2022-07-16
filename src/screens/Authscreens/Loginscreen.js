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
  KeyboardAvoidingView,

  TouchableWithoutFeedback,
  Alert,
  ActivityIndicator,
  Keyboard

} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../constants';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Hstack, KeyboardavoidingWrapper } from '../../components';
import fetchService from '../../services/fetchService';
import { Formik } from 'formik';
import * as Yup from 'yup';

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
          value={text}
          placeholder={props.lable}
          placeholderTextColor={colors.inputs}
          autoCapitalize="none"
          {...props}
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


export default function Loginscreen() {
  const [EmailId, setEmailId] = useState('');
  const [PWord, setPWord] = useState('')
  const navigation = useNavigation();
  const [Loading, setLoading] = React.useState("");
  const [hidePass, setHidePass] = React.useState(true);
  const FCMToken = 'Its an user token';
  const UserInfo = {
    EmailId: '',
    PWord: '',
  };
  const validationSchema = Yup.object({
    EmailId: Yup.string().email('Invalid email!').required('Email is required!'),
    PWord: Yup.string()
      .trim()
      .min(8, 'Password is too short!')
      .required('Password is required!'),
  });
  const handlesLogin = async () => {
    setLoading(true);
    const response = await fetchService.login(EmailId, PWord, FCMToken);
    setLoading(false);
    console.log(response);
    if (response.status) {
      let userData = response.data ? response.data : {};
      { }
      console.log('user', userData);
      navigation.navigate('Homescreen', {
        EmailId: EmailId,
      });
    } else {
      // setError(response.message);
      console.log('Error', response.message);
    }
    console.log('response', response);
  };

  // const handleLogin = async () => {
  //   if (EmailId === '') {
  //     Alert.alert('Error!', 'Please enter Email', [{ text: 'Okay' }]);
  //     return;
  //   }
  //   if (PWord === '') {
  //     Alert.alert('Error!', 'Please enter Password', [{ text: 'Okay' }]);
  //     return;
  //   }
  //   setLoading(true);
  //   const response = await fetchService.login(EmailId, PWord, FCMToken);
  //   setLoading(false);
  //   console.log(response);
  //   if (response.status) {
  //     let userData = response.data ? response.data : {};
  //     { }
  //     console.log('user', userData);
  //     Alert.alert('Succesfully Logged In!!!');
  //     // navigation.navigate('Appscreen');
  //   } else {
  //     setError(response.message);
  //   }
  // };
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        <View
          style={{
            backgroundColor: colors.background,
            padding: 10,
            flex: 1,
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
            size={30} color={colors.white} />
          <View style={{
            flex: 1,
            justifyContent: 'center'
          }}>
            <Formik
              initialValues={UserInfo}
              onSubmit={(values, formikActions) => {
                setTimeout(() => {
                  console.log(values);
                  formikActions.resetForm();
                  formikActions.setSubmitting(false);
                  handlesLogin();
                }, 500);
              }}
              validationSchema={validationSchema}>
              {({
                values,
                errors,
                touched,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => {
                {
                }
                const { EmailId, PWord } = values;
                return (
                  <>
                    <Styledtextinput
                      // onChangeText={setEmailId}
                      value={EmailId}
                      placeholder='Email'
                      placeholderTextColor={colors.inputs}
                      autoCapitalize="none"
                      title='Enter your email'
                      icon='email'
                      keyboardType='email-address'
                      MaterialCommunityIcons
                      error={touched.EmailId && errors.EmailId}
                      onChangeText={handleChange('EmailId')}
                      onBlur={handleBlur('EmailId')}
                    />
                    <Hstack centered between styles={[{
                    }]}>
                      <Styledtextinput
                        // onChangeText={setPWord}
                        value={PWord}
                        placeholder='Enter Password'
                        placeholderTextColor={colors.inputs}
                        autoCapitalize="none"
                        title='Enter your Password'
                        icon='lock'
                        keyboardType='password'
                        error={touched.PWord && errors.PWord}
                        onChangeText={handleChange('PWord')}
                        onBlur={handleBlur('PWord')}
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
                        color="#caf0f8"
                        onPress={() => setHidePass(!hidePass)}
                      />
                    </Hstack>
                    <TouchableOpacity
                      // onPress={() => {
                      //   Loading ? null :
                      //     handleLogin()
                      // }}
                      submitting={isSubmitting}
                      onPress={handleSubmit}
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
                          Press to Login
                        </Text>}
                    </TouchableOpacity>
                  </>
                );
              }}
            </Formik>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    // </KeyboardavoidingWrapper>
  )
}

const styles = StyleSheet.create({})