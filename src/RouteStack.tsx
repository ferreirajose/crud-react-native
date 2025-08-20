import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import UserList from './views/UserList';
import UserForm from './views/UserForm';
import { Button, Icon } from  '@rneui/themed';

const Stack = createStackNavigator();

export function RouteStack() {
  return (
    <Stack.Navigator 
      initialRouteName='UserList'>
        <Stack.Screen 
          name="UserList"
          key={1}
          component={UserList} 
          options={({ navigation }) => ({
          title: 'Lista de Usuarios',
          headerRight: () => (
            <Button 
              type="outline"
              title="+" 
              size='lg'
              onPress={() => navigation.navigate('UserForm')}
            />
          ),
        })}
        />
        <Stack.Screen 
          name="UserForm"
          key={2}
          options={
            {title: 'Formulário de Usuários'}
          }
          component={UserForm} />
    </Stack.Navigator>
  );
}

const UserListOptions = ({ navigation }) => {
    return {
        title: 'Lista de Usuarios',
        headerRight: () => (
            <Button 
                type="clear"
                onPress={() => navigation.navigate('UserList')}
                icon={<Icon name="add" size={25} color="white" />} />
        )
    }
}

const screenOptions = {
  headerStyle: {
    backgroundColor: "#F4511E"
  },
  headerTintColor: '#FFF',
  headerTitleStyle: {
    fontWeight: 400
  }
}