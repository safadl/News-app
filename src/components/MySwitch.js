import * as React from 'react';
import { Switch } from 'react-native-paper';

const MySwitch = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return(
  <Switch 
  value={isSwitchOn} 
  onValueChange={onToggleSwitch}
  activeText={'Dark'}
    inActiveText={'Light'} 
  />

  )
};

export default MySwitch;