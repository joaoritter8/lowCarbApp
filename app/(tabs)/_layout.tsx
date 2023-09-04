import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { Text } from 'react-native'
import Colors from '../../constants/Colors';
import { View } from '../../components/Themed';
import { COLORS, FONT } from '../../constants';
import { Ionicons } from '@expo/vector-icons';


/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: { backgroundColor: colorScheme === 'light' ? COLORS.white : COLORS.blackLight, height: 90 }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Feed',
          headerShown: false,
          tabBarLabel(props: { focused: boolean, children: string }) {
            return <Text style={{ color: props.focused ? (colorScheme === 'light' ? COLORS.greenDark : COLORS.grayDark) : (colorScheme == 'light' ? COLORS.white : COLORS.blackLight), fontFamily: FONT.medium }}>{props.children}</Text>
          },
          tabBarIcon: ({ focused }) =>
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={focused ? (colorScheme === 'light' ? COLORS.greenDark : COLORS.grayDark) : (colorScheme == 'light' ? COLORS.greenLight : COLORS.black)}
              size={28}
            />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerShown: false,
          tabBarLabel(props: { focused: boolean, children: string }) {
            return <Text style={{ color: props.focused ? (colorScheme === 'light' ? COLORS.greenDark : COLORS.grayDark) : (colorScheme == 'light' ? COLORS.white : COLORS.blackLight), fontFamily: FONT.medium }}>{props.children}</Text>
          },
          tabBarIcon: ({ focused }) =>
            <Ionicons
              name={focused ? "search" : "search-outline"}
              color={focused ? (colorScheme === 'light' ? COLORS.greenDark : COLORS.grayDark) : (colorScheme == 'light' ? COLORS.greenLight : COLORS.black)}
              size={30}
            />


        }}
      />

      <Tabs.Screen
        name="liked"
        options={{
          title: 'Favorites',
          headerShown: false,
          tabBarLabel(props: { focused: boolean, children: string }) {
            return <Text style={{ color: props.focused ? (colorScheme === 'light' ? COLORS.greenDark : COLORS.grayDark) : (colorScheme == 'light' ? COLORS.white : COLORS.blackLight), fontFamily: FONT.medium }}>{props.children}</Text>
          },
          tabBarIcon: ({ focused }) => <TabBarIcon name={focused ? "heart" : "heart-o"} color={focused ? (colorScheme === 'light' ? COLORS.greenDark : COLORS.grayDark) : (colorScheme == 'light' ? COLORS.greenLight : COLORS.black)} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarLabel(props: { focused: boolean, children: string }) {
            return <Text style={{ color: props.focused ? (colorScheme === 'light' ? COLORS.greenDark : COLORS.grayDark) : (colorScheme == 'light' ? COLORS.white : COLORS.blackLight), fontFamily: FONT.medium }}>{props.children}</Text>
          },
          tabBarIcon: ({ focused }) => <TabBarIcon name={focused ? "user" : "user-o"} color={focused ? (colorScheme === 'light' ? COLORS.greenDark : COLORS.grayDark) : (colorScheme == 'light' ? COLORS.greenLight : COLORS.black)} />,
        }}
      />
    </Tabs>
  );
}
