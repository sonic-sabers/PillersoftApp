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
  const [hidePass, setHidePass] = React.useState(true);
  const navigation = useNavigation();

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
          secureTextEntry={hidePass ? true : false}

          placeholder={props.lable}
          placeholderTextColor={colors.inputs}
          autoCapitalize="none"
          {...props}
        />
        {props.password &&
          <FontAwesome5
            name={hidePass ? 'eye-slash' : 'eye'}
            size={20}
            color="#caf0f8"
            onPress={() => setHidePass(!hidePass)}
          />}
      </View>
      <Hstack between>
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
        {props.password &&
          <TouchableOpacity
            onPress={() => Alert.alert('Navigating to Forget password screen')}
          >
            <Text
              style={{
                fontSize: 11,
                fontWeight: '700',
                fontFamily: 'Comfortaa',
                color: colors.white,
                marginTop: 5,
              }}
            >
              Forget Password
            </Text>
          </TouchableOpacity>
        }
      </Hstack>
    </View>
  )
}


export default function Loginscreen() {
  // const [EmailId, setEmailId] = useState('');
  const [Error, setError] = useState('')
  const navigation = useNavigation();
  const [Loading, setLoading] = React.useState("");
  const [hidePass, setHidePass] = React.useState(true);
  const FCMToken = 'Its an user token';
  const UserInfo = {
    EmailId: '',
    PWord: '',
  };

  // const hybridregex = /^\d{10}\t((?>[a-zA-Z\d!#$%&'*+\-\/=?^_`{|}~]+\x20*|""((?=[\x01-\x7f])[^""\\]|\\[\x01-\x7f])*""\x20*)*(?<angle><))?((?!\.)(?>\.?[a-zA-Z\d!#$%&'*+\-\/=?^_`{|}~]+)+|""((?=[\x01-\x7f])[^""\\]|\\[\x01-\x7f])*"")@(((?!-)[a-zA-Z\d\-]+(?<!-)\.)+[a-zA-Z]{2,}|\[(((?(?<!\[)\.)(25[0-5]|2[0-4]\d|[01]?\d?\d)){4}|[a-zA-Z\d\-]*[a-zA-Z\d]:((?=[\x01-\x7f])[^\\\[\]]|\\[\x01-\x7f])+)\])(?(angle)>))/
  const regex = /^(?:\d{10}|\w+@\w+\.\w{2,3})$/
  const validationSchema = Yup.object({
    EmailId:
      Yup.string()
        .trim()
        .matches(regex, 'This field must be phone number or Email')
        .required('Required!')
        .min(6, 'Minimum 6 characters is required'),

    // .email('Invalid email!')
    // .required('Email is required!'), number is not valid')

    // EmailId: Yup.string().when("isEmail", {
    //   is: '1',
    //   then: Yup.string()
    //     .required("phonenumber cannot be empty")
    //     .min(6, 'phonenumber must be at least 6 char')
    //     .max(11, 'phonenumber has max 10 char'),
    //   otherwise: Yup.string()
    //     .email("Please enter valid email")
    //     .required("email cannot be empty"),
    // }),
    PWord: Yup.string()
      .trim()
      .min(8, 'Password is too short!')
      .required('Password is required!'),
  });
  const handlesLogin = async (values) => {
    // console.log('values3', values)
    setLoading(true);
    const response = await fetchService.login(values.EmailId, values.PWord, FCMToken);
    setLoading(false);
    // console.log(response);
    if (response.status) {
      // let userData = response.data ? response.data : {};
      // { }
      // console.log('values3', values);
      navigation.replace('Homescreen', {
        EmailId: values.EmailId,
      });
    } else {
      setError(response.message);
      Alert.alert(response.msg)
      // console.log('Error', response.message);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        <View
          style={{
            backgroundColor: colors.primary,
            padding: 15,
            flex: 1,
            paddingRight: 20,
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

          <View style={{
            flex: 1,
            justifyContent: 'space-between',
            // backgroundColor: 'green',
            paddingBottom: 10,
          }}>
            <View>
              <TouchableOpacity 
               onPress={() =>
                navigation.navigate('Onboardingscreen', {
                  status: 'back',
                })}
                style={{
                backgroundColor: colors.white,
                height: 36,
                width: 36,
                borderRadius: 60,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Octicons name='arrow-left'
                 
                  size={27} color={colors.primary} />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: '700',
                  fontFamily: 'Comfortaa',
                  color: colors.white,
                  marginTop: 5,
                }}
              >
                Hi There!
              </Text>

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
                Log In Here
              </Text>
            </View>
            <View>
              <Formik
                initialValues={UserInfo}
                onSubmit={(values, formikActions) => {
                  // setTimeout(() => {
                  // console.log(values);
                  formikActions.resetForm();
                  formikActions.setSubmitting(false);
                  handlesLogin(values);
                  // }, 1);
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
                        placeholder='Email/Phone'
                        placeholderTextColor={colors.inputs}
                        autoCapitalize="none"
                        title='Enter your Email/Phone'
                        icon='email'
                        keyboardType='email-address'
                        MaterialCommunityIcons
                        error={touched.EmailId && errors.EmailId}
                        onChangeText={handleChange('EmailId')}
                        onBlur={handleBlur('EmailId')}

                      />
                      {/* <Hstack centered between styles={[{}]}> */}
                      <Styledtextinput
                        // onChangeText={setPWord}
                        value={PWord}
                        placeholder='Password'
                        placeholderTextColor={colors.inputs}
                        autoCapitalize="none"
                        title='Enter your Password'
                        icon='lock'
                        keyboardType='password'
                        error={touched.PWord && errors.PWord}
                        onChangeText={handleChange('PWord')}
                        onBlur={handleBlur('PWord')}
                        password
                      // secureTextEntry={hidePass ? true : false}
                      // style={{
                      //   width: '80%',
                      //   marginLeft: 10,
                      //   fontWeight: '400',
                      //   fontSize: 15,
                      //   marginBottom: -10,
                      //   color: '#caf0f8',

                      // }}
                      />
                      {/* <FontAwesome5
                          name={hidePass ? 'eye-slash' : 'eye'}
                          size={20}
                          color="#caf0f8"
                          onPress={() => setHidePass(!hidePass)}
                        /> */}
                      {/* </Hstack> */}
                      <TouchableOpacity
                        // onPress={() => {
                        //   Loading ? null :
                        //     handleLogin()
                        // }}
                        submitting={isSubmitting}
                        onPress={handleSubmit}
                        style={{
                          backgroundColor: '#FFFFFF',
                          padding: 15,
                          borderRadius: 15,
                          justifyContent: 'center',
                          alignItems: 'center',
                          // marginVertical: 20,
                          marginTop: 20,
                          height: 60,
                        }}>
                        {Loading ?
                          <ActivityIndicator />
                          : <Text
                            style={{
                              fontSize: 20,
                              fontWeight: '700',
                              fontFamily: 'Comfortaa',
                              color: colors.primary
                            }}>
                            Log In
                          </Text>}
                      </TouchableOpacity>
                    </>
                  );
                }}
              </Formik>
              <Hstack centered styles={{ marginVertical: 15, }}>
                <View
                  style={{
                    height: 2,
                    flex: 1,
                    backgroundColor: colors.white3,
                    borderRadius: 40
                  }} />
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: '700',
                    fontFamily: 'Comfortaa',
                    color: colors.white3,
                    marginHorizontal: 10,
                    marginTop: -5,

                  }}>
                  or
                </Text>
                <View
                  style={{
                    height: 2,
                    flex: 1,
                    borderRadius: 40,
                    backgroundColor: colors.white3
                  }} />
              </Hstack>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Signupscreen')
                }}
                style={{
                  backgroundColor: colors.primary,
                  padding: 15,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  // marginVertical: 20,
                  height: 60,
                  borderWidth: 1.5,
                  borderColor: colors.white
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '700',
                    fontFamily: 'Comfortaa',
                    color: colors.white
                  }}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    // </KeyboardavoidingWrapper>
  )
}

const styles = StyleSheet.create({})