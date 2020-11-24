import React from "react";
import { Text, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const Header = ({ fontSize }) => (
    Header.propTypes = {
        fontSize: PropTypes.number
    },
    
    Header.defaultProps = {
        fontSize: 55
    },
    
    <View style={{ flexDirection: "row" }}>
    <Text style={[styles.header, { fontSize }, { color: "#E64C3C" }]}>c</Text>
    <Text style={[styles.header, { fontSize }, { color: "#E57E31" }]}>o</Text>
    <Text style={[styles.header, { fontSize }, { color: "#F1C431" }]}>l</Text>
    <Text style={[styles.header, { fontSize }, { color: "#68CC73" }]}>o</Text>
    <Text style={[styles.header, { fontSize }, { color: "#3998DB" }]}>r</Text>
    <Text style={[styles.header, { fontSize }]}>blinder</Text>
    </View>
    );

    const styles = StyleSheet.create({
    header: {
    marginTop: 80,
    color: "#ecf0f1",
    fontFamily: "dogbyte"
    }
});

export { Header };