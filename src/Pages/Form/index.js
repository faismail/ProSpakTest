import React, { useState, useEffect } from 'react';
import { StyleSheet, Image ,TextInput, Alert, LogBox , ScrollView, ActivityIndicator, TouchableOpacity} from 'react-native';
import { Card, CardItem, Container, Text, View, Title, Picker, Col, Icon, Item} from 'native-base';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import axios from 'axios';
import { API_URL} from '../../config';
import { Shoes, Shirt, Sun_Glasses, Bag, Aircon, Headband, Cap, Phone, Pants, Slipper } from '../../Assets/Images/index';


const Form = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [Products, setProducts] = useState([]);
    // const isFocused = useIsFocused();

    const getProducts = async () =>  {
        setIsLoading(true);
        axios.get
        (   
            API_URL,
        {
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
        }
    })
    .then(res => {
            console.log(res.data)
            setProducts(res.data)
            setIsLoading(false);
    })
    .catch(function(error) {
        console.log(error.message)
      });
    }

    const ProductImage = (id) => {
        let product_image = {
          '1': Shirt,
          '2': Shoes,
          '3': Sun_Glasses,
          '4': Slipper,
          '5': Cap,
          '6': Bag,
          '7': Pants,
          '8': Phone,
          '9': Aircon,
          '10': Headband
        }
        return product_image[id]
      }

    useEffect(() => {
        getProducts()
        
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        LogBox.ignoreLogs(['responder.scrollResponderScrollTo is not a function.']);
    }, []);

    return (
        <Container style={styles.container}>
             { isLoading == true ?
                <ActivityIndicator size="large" color="black" style={{ flex:1,justifyContent:'center',  }}></ActivityIndicator>
                :
            <ScrollView scrollEnabled={true}>

            <Col style={{ flex:1, justifyContent:'center', alignItems:'center', marginTop:'10%', marginBottom:50   }}>  
               
                <Text  style={styles.productText}>
                    Feature Products
                </Text>
               
                {Products.length ? (
                    Products.map((value) => (

                        <Col key={value.id} style={styles.productList}> 

                            <Col style={{width:'30%', height:'100%', alignSelf:'center', alignItems:'center', justifyContent: 'center',  }}>
                                <Image style={styles.imageProduct} key={value.id} source={ProductImage(value.id)} />
                            </Col>

                            <Col style={{width:'40%', height:'100%',  justifyContent: 'center', marginLeft:10  }}>
                                
                                <Text  style={styles.nameText}>
                                    {value.name}
                                </Text>
                                <Text  style={styles.descriptionText }>
                                    This is {value.description}
                                </Text>
                                <Text  style={styles.nameText}>
                                   ${value.price}
                                </Text>
                                <Text  style={styles.descriptionText }>
                                        Quantity ({value.quantity})
                                </Text>

                            </Col>
                            
                            <Col style={{width:'30%', height:'100%',  alignItems:'center', justifyContent: 'center',  }}>
                                
                                <TouchableOpacity style={styles.Icon}>
                                    <Text  style={styles.addText }>
                                        Wishlist
                                    </Text>
                                    <Icon
                                    type="FontAwesome5"
                                    name="heart"
                                    style={{
                                    width: RFValue(30),
                                    height: RFValue(30),
                                    textAlign:'center',
                                    color: "grey",
                                    // backgroundColor:'red',
                                    marginTop:10
                                    }}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.Icon}>
                                    <Text  style={styles.addText }>
                                          Cart
                                    </Text>
                                    <Icon
                                    type="FontAwesome5"
                                    name="shopping-cart"
                                    style={{
                                    width: RFValue(30),
                                    height: RFValue(30),
                                    textAlign:'center',
                                    // resizeMode: "cover",
                                    // position: "absolute",
                                    color: "black",
                                    marginTop:10
                                    }}
                                    />
                                </TouchableOpacity>
                               
                            </Col>

                        </Col>
                    ))
                )
                 : 
                (
                    <View
                        style={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: RFPercentage(90),
                        }}
                    >
                        <Text style={styles.nameText}>
                            There is no product
                        </Text>
                    </View>
                )}
            </Col>
            </ScrollView>
            }
        </Container>
      );
}

const styles = StyleSheet.create ({

    container: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        // backgroundColor:'#F2F2F2',
        justifyContent: 'center',
    },
    
    productText: {
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        alignSelf:'flex-start',
        fontSize: RFValue(22, 680),
        color: 'black',
        marginVertical:20,
        marginLeft:30
    },

    imageProduct: {
        width: RFPercentage(12),
        height: RFPercentage(12),
        marginLeft:20
        },

    productList: {
        width: RFPercentage(45),
        height: RFPercentage(20),
        flexDirection:'row',
        borderRadius:10,
        backgroundColor: '#fff',
        shadowColor:'black',
        justifyContent:'center',
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity:  0.15,
        shadowRadius: 10,
        elevation: 25,
        marginVertical: '2%',
    },

    nameText: {
        fontFamily: 'Avenir Next',
        fontWeight:'500',
        fontSize: RFValue(20, 680),
        color: 'black',
        textAlign: 'left'
    },

    descriptionText: {
        fontFamily: 'Avenir Next',
        fontSize: RFValue(14, 680),
        color: 'black',
        textAlign: 'left'
    },


    addText: {
        fontFamily: 'Avenir Next',
        fontSize: RFValue(10, 680),
        color: 'black',
        textAlign: 'left'
    },

    Icon: {
        width: RFPercentage(10),
        height: RFPercentage(5),
        flexDirection:'row',
        borderRadius:8,
        backgroundColor: '#fff',
        shadowColor:'black',
        justifyContent:'center',
        alignItems:'center',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity:  0.15,
        shadowRadius: 5,
        elevation: 10,
        marginTop:15,
    },


});

export default Form
