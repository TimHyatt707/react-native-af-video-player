import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons'

const backgroundColor = 'transparent'

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    backgroundColor,
    justifyContent: 'center'
  }
})

const ToggleIcon = (props) => {
  const {
    paddingLeft,
    paddingRight,
    isOn,
    iconOn,
    iconOff,
    theme,
    size
  } = props

  const padding = {
    paddingLeft: paddingLeft ? 10 : 0,
    paddingRight: paddingRight ? 5 : 0
  }

  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity
        onPress={() => props.onPress()}
      >
        {props.name === 'volume' && !isOn
          && <Icons
            style={padding}
            name={iconOff}
            color={theme}
            size={size}
          />}
        {props.name === 'volume' && isOn && <Image source={require('../images/drawable-hdpi/icn_education_sound.png')} />}
        {props.name !== 'volume' 
          && <Icons 
            style={padding}
            name={isOn ? iconOn : iconOff}
            color={theme}
            size={size}
          />}
      </TouchableOpacity>
    </View>
  )
}

ToggleIcon.propTypes = {
  onPress: PropTypes.func,
  isOn: PropTypes.bool,
  name: PropTypes.string,
  iconOff: PropTypes.string.isRequired,
  iconOn: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  size: PropTypes.number,
  paddingRight: PropTypes.bool,
  paddingLeft: PropTypes.bool
}

ToggleIcon.defaultProps = {
  onPress: undefined,
  isOn: false,
  size: 25,
  paddingRight: false,
  paddingLeft: false
}

export { ToggleIcon }
