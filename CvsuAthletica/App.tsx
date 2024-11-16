import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground
      source={{ uri: 'bg_img_url' }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>CVSU ATHLETICA</Text>
        </View>
        
        <View style={styles.formContainer}>
          <TextInput 
            style={styles.input}
            placeholder="example@gmail.com"
            placeholderTextColor="#fff"
          />
          <TextInput 
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#fff"
            secureTextEntry={true}
          />
          
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
          
          <Text style={styles.orText}>Or With</Text>
          
          <TouchableOpacity style={styles.googleLoginButton}>
            <Text style={styles.googleLoginButtonText}>Login with CvSU Email</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>csgmain@cvsu.edu.ph</Text>
        <Text style={styles.footerText}>cvsu.cspear.sc@cvsu.edu.ph</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay to make form pop
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    color: '#FFD700', // Gold color
    fontSize: 30,
    fontWeight: 'bold',
  },
  formContainer: {
    backgroundColor: 'rgba(128, 0, 0, 0.8)', // Dark red form background
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
    color: '#fff',
  },
  forgotPassword: {
    color: '#FFD700',
    alignSelf: 'flex-end',
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: '#8B4513', // Brown button color
    borderRadius: 5,
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    color: '#fff',
    marginVertical: 10,
  },
  googleLoginButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  googleLoginButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#330000',
  },
  footerText: {
    color: '#fff',
    fontSize: 12,
  },
});
