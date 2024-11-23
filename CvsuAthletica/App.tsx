import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import backgroundImage from './assets/img/bg.jpg'; // Your background image
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc"; // Import the Google icon

export default function App() {
  return (
    <ImageBackground
      source={backgroundImage}
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
          
          {/* Login with Google Button */}
          <TouchableOpacity style={styles.googleLoginButton}>
            <View style={styles.iconTextContainer}>
            <FcGoogle style={styles.icon} />
            <Text style={styles.googleLoginButtonText}>Login with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <MdEmail style={styles.emailIcon} />
          <Text style={styles.footerText}>csgmain@cvsu.edu.ph</Text>
        </View>
        <View style={styles.footerItem}>
          <MdEmail style={styles.emailIcon} />
          <Text style={styles.footerText}>cvsu.cspear.sc@cvsu.edu.ph</Text>
        </View>
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    color: '#FFD700',
    fontSize: 30,
    fontWeight: 'bold',
  },
  formContainer: {
    width: '85%',
    maxWidth: 320,
    backgroundColor: 'rgba(128, 0, 0, 0.8)',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 8,
    paddingHorizontal: 10,
    color: '#fff',
  },
  forgotPassword: {
    color: '#FFD700',
    alignSelf: 'flex-end',
    marginVertical: 5,
  },
  loginButton: {
    backgroundColor: '#8B4513',
    borderRadius: 5,
    paddingVertical: 12,
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
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row', // Aligns items horizontally
    justifyContent: 'center',
  },
  iconTextContainer: {
    flexDirection: 'row', // Ensures icon and text are in a row
    alignItems: 'center', // Align items vertically
  },
  icon: {
    fontSize: 20, // Adjust icon size
    marginRight: 8, // Space between icon and text
  },
  googleLoginButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  footer: {
    flexDirection: 'row', // Align items horizontally in a row
    justifyContent: 'center', // Center the items
    alignItems: 'center', // Align items vertically
    paddingVertical: 10,
    backgroundColor: '#330000',
  },
  footerItem: {
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center', // Align items vertically
    marginHorizontal: 10, // Space between the email entries
  },
  emailIcon: {
    fontSize: 18, // Size of the email icon
    color: '#fff', // Color of the icon
    marginRight: 8, // Space between icon and text
  },
  footerText: {
    color: '#fff',
    fontSize: 12,
  },
});
