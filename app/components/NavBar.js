// imports do sistema
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Card, Header, Icon } from "react-native-elements";

// nossos imports
import colors from "../config/colors";
import SwipeCard from "../components/SwipeCard";
import SwipeButtons from "../components/SwipeButtons";

function NavBar(props) {
  return (
    <Header
      containerStyle={styles.navArea}
      leftComponent={
        <Icon name="bars" type="font-awesome" color={colors.ezlight} />
      }
      centerComponent={{
        text: "ADOPT",
        style: {
          color: "#fff",
          fontWeight: "bold",
          fontSize: 30,
        },
      }}
      rightComponent={
        <Icon name="paw" type="font-awesome" color={colors.ezlight} />
      }
    />
  );
}

const styles = StyleSheet.create({
  navArea: {
    paddingTop: -30,
    height: "10%",
    backgroundColor: colors.primary,
  },
});

export default NavBar;
