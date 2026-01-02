import { StatusBar } from 'expo-status-bar';
import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  children: ReactNode;
  backgroundColor?: string;
  StatusBarStyle?: 'auto' | 'inverted' | 'light' | 'dark';
};

const Wrapper = (props: Props) => {
  const { children, backgroundColor = 'white', StatusBarStyle = 'dark' } = props;
  const insets = useSafeAreaInsets();

  return (
    <View className='flex-1'>
      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
          backgroundColor,
        }}
      >
        <StatusBar style={StatusBarStyle} />
        {children}
      </View>
    </View>
  );
};

export default Wrapper;
