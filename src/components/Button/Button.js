import React from "react";
import { TouchableOpacity, Text } from "react-native";
import colors from "../../utils/colors";

const defaultStyles = {
  backgroundColor: colors.tundora,
  fontColor: colors.white,
  paddingTop: 20,
  paddingBottom: 20,
  paddingLeft: 45,
  paddingRight: 45,
  width: "100%"
};

const inactiveStyles = {
  backgroundColor: colors.bermuda
};
const textStyles = {
  color: colors.white,
  fontWeight: "bold",
  textAlign: "center"
};

const getStyles = (styles, disabled) => {
  const allStylesDisabled = { ...defaultStyles, ...styles, ...inactiveStyles };
  const allStyles = { ...defaultStyles, ...styles };
  return disabled ? allStylesDisabled : allStyles;
};

export default function Button(props) {
  const allStyles = getStyles(props.style, props.disabled);

  return (
    <TouchableOpacity style={allStyles} {...props}>
      <Text style={textStyles}>{props.children}</Text>
    </TouchableOpacity>
  );
}
