import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Feed from '../screens/Feed';
import UserDetail from '../screens/UserDetail';
import About from '../screens/About';
import Contact from '../screens/Contact';
import Schedule from '../screens/Schedule';
import Stages from '../screens/Stages';

const DrawerIcon = ({ navigate }) => {
  if (Platform.OS === 'ios') {
    return null;
  }

  return (
    <Icon
      name="md-menu"
      size={28}
      color="black"
      onPress={() => navigate('DrawerOpen')}
      style={{ paddingLeft: 20 }}
    />
  );
}

export const Menu1 = StackNavigator({
  Screen1: {
    screen: About,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <DrawerIcon {...navigation} />,
    }),
  },
  
});

export const Menu2 = StackNavigator({
  Screen1: {
    screen: Contact,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <DrawerIcon {...navigation} />,
    }),
  },
  
});

export const Menu3 = StackNavigator({
  Screen1: {
    screen: Schedule,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <DrawerIcon {...navigation} />,
    }),
  },
  
});

export const Menu4 = StackNavigator({
  Screen1: {
    screen: Stages,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <DrawerIcon {...navigation} />,
    }),
  },
  
});

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <DrawerIcon {...navigation} />,
      title: 'Feed',
    }),
  },
  Details: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.full_name.toUpperCase()}`,
    }),
  },
});

export const Drawer = DrawerNavigator({
  Ranking: {
    screen: FeedStack,
    navigationOptions: {
      drawer: {
        label: 'Home',
      },
    },
  },
  About: {
    screen: Menu1,
    navigationOptions: {
      drawer: {
        label: 'About',
      },
    },
  },
  Contact: {
    screen: Menu2,
    navigationOptions: {
      drawer: {
        label: 'Contact',
      },
    },
  },
  Schedule: {
    screen: Menu3,
    navigationOptions: {
      drawer: {
        label: 'Schedule',
      },
    },
  },
  Stages: {
    screen: Menu4,
    navigationOptions: {
      drawer: {
        label: 'Stages',
      },
    },
  }
});

export const Root = StackNavigator({
  ranking: {
    screen: Drawer,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
