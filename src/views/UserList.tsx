import { JSX, useContext } from 'react';
import { FlatList, Alert} from "react-native";
import { ListItem,
Avatar,
Button } from '@rneui/themed';
import { User, UserContextType, UserItemProps } from "../types/user.type";
import { ScreenPropsNav } from '../types/props-navigation';
import UserContext from '../context/UsersContext';

export default function(props: ScreenPropsNav) {

    const { state } = useContext(UserContext);
    function confirmUserDeletion(user: User) {
        Alert.alert('Excluir Usuario', 'Deseja excluir o Usuario', [
            {
                text: 'Sim',
                onPress() {
                    console.log('delete' + user.id)
                }
            },
            {
                text: 'Não'
            }
        ]);
    }

    function getUserItem({ item }: UserItemProps): JSX.Element {
        return (
            <ListItem.Swipeable
                bottomDivider
                key={item.id}
                onPress={() => props.navigation.navigate('UserForm', item)}
                leftContent={
                    <Button 
                        title="Editar"
                        type="outline"
                        buttonStyle={{ minHeight: '100%'}}
                        onPress={() => props.navigation.navigate('UserForm', item)}
                    />
                }
                rightContent={
                    <Button 
                        title="Deletar"
                        type="solid"
                        color="error"
                        buttonStyle={{ minHeight: '100%'}}
                        onPress={() => confirmUserDeletion(item)}
                    />
                }>
                <Avatar source={{uri: item.avatar}}></Avatar>
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
                </ListItem.Content>

            </ListItem.Swipeable>
        )
    }

    return (
        <FlatList 
            keyExtractor={(item) => item.id.toString()} // ✅ CORRIGIDO // keyExtractor={MOCK_USERS => MOCK_USERS.id.toString()}
            data={state.MOCK_USERS}
            renderItem={getUserItem} />
    )
}