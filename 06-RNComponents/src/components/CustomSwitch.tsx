import React, { useState } from 'react'
import { Switch } from 'react-native-gesture-handler'

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{false: 'gray', true: 'purple'}}
      thumbColor={isEnabled ? 'white' : 'f4f3f4'}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  )
}
