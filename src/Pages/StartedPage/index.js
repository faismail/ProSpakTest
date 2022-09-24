import React, { useState, useEffect, } from 'react';
import { StyleSheet, TouchableOpacity, Image, ActivityIndicator, LogBox } from 'react-native';
import { Card, CardItem, Container, Text, Form, View, Textarea, Picker, Col, Icon, Button} from 'native-base';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { prospark } from '../../Assets/Images/index';

const StartedPage = ({ navigation }) => {

    LogBox.ignoreLogs([
        "ViewPropTypes has been removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
        "ColorPropType will be removed",
    ])

  return (
    <Container style={styles.container}>
        <Col style={{  justifyContent:'center', alignSelf:'center',  }}>  
                <TouchableOpacity onPress={()=>navigation.replace('Form')}>
                    <Image style={styles.logoStyle} source={prospark} />
                </TouchableOpacity>     
        </Col>
    </Container>
  );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor:'white',
        justifyContent: 'center',
    },

    logoStyle: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: RFPercentage(30),
        height: RFPercentage(30),
        },
});

export default StartedPage;