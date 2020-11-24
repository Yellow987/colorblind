import React, { Component } from "react";
import { View } from "react-native";
import { Header } from "../../components";
import styles from "./styles";

export default class Game extends Component {
    state = {
        points: 0,
        timeLeft: 15,
    };

    componentWillMount() {
        this.interval = setInterval(() => {
          this.setState(state => ({ timeLeft: state.timeLeft - 1 }));
        }, 1000);
      }
     
      componentWillUnmount() {
        clearInterval(this.interval);
      }
    
    render() {
    return (
        <View style={styles.container}>
        <Header />
        </View>
    );
    }
}