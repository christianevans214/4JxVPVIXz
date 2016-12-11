'use strict';

var React = require('react-native');

var ListView = require('./components/ListView');
var MapView = require('./components/MapView');
var ScrollView = require('./components/ScrollView');
var SliderIOS = require('./components/SliderIOS');
var SwitchIOS = require('./components/SwitchIOS');


var {
  Image,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var reactNative = React.createClass({
    render: function() {
        return (
          <View>
            <View style={[styles.view1]}>
                <Text 
                	style={[styles.view1Navbar3]}>
                	My dfjklsdfsd App
                </Text>
            </View>
          </View>
        );
    }
})


var styles = StyleSheet.create({
      view1:{
      }, 
      view2:{
      }, 
      view1Navbar3:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 6,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 26,
          marginBottom: 0,
          fontSize: 17,
          textAlign: 'center',
          backgroundColor: '#919191',
          width: 375,
      }, 
})

AppRegistry.registerComponent('reactNative', () => reactNative);

