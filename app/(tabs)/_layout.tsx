import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import React from "react";

const TabLayout = () => {
  const router = useRouter();

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              focused={focused}
              size={24}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="search"
              focused={focused}
              size={24}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="add"
              focused={focused}
              size={24}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="heart-outline"
              focused={focused}
              size={24}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person-outline"
              focused={focused}
              size={24}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
