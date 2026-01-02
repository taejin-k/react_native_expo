import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name='index'
        options={{
          tabBarLabel: ({ focused }) => (
            <Text className={`${focused ? 'text-black' : 'text-gray-500'} text-sm`}>홈</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons name='home' focused={focused} size={24} color={focused ? 'black' : 'gray'} />
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          tabBarLabel: ({ focused }) => (
            <Text className={`${focused ? 'text-black' : 'text-gray-500'} text-sm`}>검색</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons name='search' focused={focused} size={24} color={focused ? 'black' : 'gray'} />
          ),
        }}
      />
      <Tabs.Screen
        name='add'
        options={{
          tabBarLabel: ({ focused }) => (
            <Text className={`${focused ? 'text-black' : 'text-gray-500'} text-sm`}>추가</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons name='add' focused={focused} size={24} color={focused ? 'black' : 'gray'} />
          ),
        }}
      />
      <Tabs.Screen
        name='activity'
        options={{
          tabBarLabel: ({ focused }) => (
            <Text className={`${focused ? 'text-black' : 'text-gray-500'} text-sm`}>활동</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons name='heart-outline' focused={focused} size={24} color={focused ? 'black' : 'gray'} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarLabel: ({ focused }) => (
            <Text className={`${focused ? 'text-black' : 'text-gray-500'} text-sm`}>프로필</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons name='person-outline' focused={focused} size={24} color={focused ? 'black' : 'gray'} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
