import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../config/Colors';
import {TouchableOpacity} from 'react-native';

function CheckBox({value, onValueChange}) {
  const [isCheck, setIsCheck] = useState(value);
  const changeTheValue = () => {
    onValueChange(!isCheck);
  };

  return (
    <TouchableOpacity onPress={changeTheValue}>
      {console.log('state:' + isCheck)}
      <Icon
        name={isCheck ? 'check-circle' : 'radio-button-unchecked'}
        size={25}
        color={Colors.black}
      />
    </TouchableOpacity>
  );
}

export default CheckBox;
