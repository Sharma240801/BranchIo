import React, { useEffect } from "react";
import { View, Button, Alert } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

const Home = () => {
  useEffect(() => {
    GoogleSignin.configure({
      // webClientId: "202768508531-le198em8c1u9m08e70uu0g3lqc9cd14d.apps.googleusercontent.com", // Replace with your Web Client ID
     webClientId: "522477386283-a99k9v36jhb7jk5jogahld6ai1f3sou3.apps.googleusercontent.com"
    });
  }, []);

  
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      
      if(userInfo){
        console.log("User Info:", JSON.stringify(userInfo));
        Alert.alert("Signed in!", JSON.stringify(userInfo, null, 2));

      }
      
    } catch (error) {
      console.log("Google Sign-In Error:", error);
    }
  };

  return (
    <View>
      <Button title="Sign in with Google" onPress={signIn} />
    </View>
  );
};

export default Home;
