import React, {Component} from 'react';
import {StyleSheet,View,TouchableOpacity,Dimensions,Text,Image,ScrollView} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGTH = Dimensions.get('window').height;

export default class MenuDrawer extends React.Component{

    navLink(nav,text){
        return(
            <TouchableOpacity style={{height:50}} onPress={() => {this.props.navigation.navigate(nav)} }>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.topLink}>
                        <View style={styles.profile}>
                            <View style={styles.imgView}>
                                <Image style={styles.img} source={require('../images/lion.jpg')}/>
                            </View>
                            <View style={styles.profileText}> 
                                <Text style={styles.name}>Pretty Lion</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottomLink}>
                        {this.navLink('Home','Home')}
                        {this.navLink('Links','Links')}
                        {this.navLink('Settings','Settings')}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red'
    },
    topLink:{
        height:200,
        backgroundColor:'black'
    },
    profileText:{
        flex:6,
        flexDirection:'column',
        justifyContent:'center'
    },
    name:{
        fontSize:20,
        color:'white',
        paddingBottom:5,
        textAlign:'left'
    },
    bottomLink:{
        flex:1,
        backgroundColor:'white',
        paddingTop:10,
        paddingBottom:350
    },
    link:{
        flex:1,
        fontSize:20,
        padding:6,
        paddingLeft:14,
        margin:5,
        textAlign:'left'
    },
    profile:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingTop:25,
        borderBottomWidth:1,
        borderBottomColor:'#777777'
    },
    imgView:{
        flex:3,
        paddingRight:20,
        paddingLeft:20
    },
    img:{
        height:70,
        width:70,
        borderRadius:50
    }
});