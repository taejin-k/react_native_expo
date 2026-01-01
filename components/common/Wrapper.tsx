import React, { ReactNode } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  children: ReactNode;
  backgroundColor?: string;
};

const Wrapper = (props: Props) => {
  const { children, backgroundColor } = props;
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1">
      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
          backgroundColor,
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default Wrapper;
