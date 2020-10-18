import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.desc}>Sign up to continue</Text>
      </View>

      <View style={styles.formView}>
        <View style={styles.formContent}>
          <Text style={styles.label}>Email </Text>
          <TextInput style={styles.input} />

          <Text style={styles.label}> Password </Text>
          <TextInput secureTextEntry={true} style={styles.input} />
        </View>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.teksBtn}> Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.teksHaveAccount}>
          <Text style={styles.keterangan}>
            Already have an account?
            <Text style={styles.teksSignIn}> Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    padding: 10,
  },
  header: {
    padding: 20,
    top: 50,
  },
  title: {
    fontWeight: '700',
    fontSize: 30,
    fontFamily: 'Montserrat',
  },
  desc: {
    fontSize: 12,
  },
  form: {
    borderRadius: 5,
    height: 536,
    width: 366,
    alignSelf: 'center',
    borderWidth: 0.1,
    padding: 30,
    top: 50,
  },
  label: {
    marginTop: 20,
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.2,
  },
  btn: {
    backgroundColor: '#F77866',
    borderRadius: 6,
    height: 50,
    top: 50,
  },

  teksBtn: {
    color: 'white',
    fontSize: 14,
    top: 15,
    fontWeight: '600',
    fontFamily: 'Montserrat',
    textAlign: 'center',
  },
  teksHaveAccount: {
    top: 70,
    alignSelf: 'center',
  },
  teksSignIn: {
    color: '#F77866',
    fontFamily: 'Montserrat',
  },
});

export default Login;
