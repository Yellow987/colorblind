import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import { Header } from '../../components'

export default class Home extends Component {
 render() {
   return (
     <View style={styles.container}>
         <Header />
     </View>
   );
 }
}

// notice the deleted styles - they are imported from the styles.js!