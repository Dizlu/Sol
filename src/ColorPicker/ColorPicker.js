import React from 'react'
import { View, Text } from 'react-native'
import { TriangleColorPicker, toHsv } from 'react-native-color-picker'

export default class ColorPicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = { color: toHsv('green') };
    this.onColorChange = this.onColorChange.bind(this)
  }

  onColorChange(color) {
    this.setState({ color })
  }

  render() {
    return (
      <View style={{flex: 1, width: '100%',  backgroundColor: '#212021'}}>
        <Text style={{color: 'white', textAlign: 'center', paddingTop: 50, fontSize: 30}}>Pick your color</Text>
        <TriangleColorPicker
          oldColor='purple'
          color={this.state.color}
          onColorChange={this.onColorChange}
          onColorSelected={color => alert(`Color selected: ${color}`)}
          onOldColorSelected={color => alert(`Old color selected: ${color}`)}
          style={{flex: 1}}
        />
      </View>
    );
  }

}