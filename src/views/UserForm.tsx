import { Button } from "@rneui/themed";
import React, { useState } from "react";
import { Text, TextInput, StyleSheet } from "react-native";
import { ActionType } from "../actionsType";
import { useUserContext } from "../context/UsersContext";

export default function({route, navigation}) {
    const [user, setUser] = useState(route.params ? route.params : {});
    const { dispatch } = useUserContext();
   
    function handlerUser() {
        dispatch({
            type: user.id ? ActionType.UPDATE_USER : ActionType.CREATE_USER,
            payload: user
        });

        navigation.navigate('UserList');
    }

    return (
        <>
            <Text>Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Informe o Nome"
                onChangeText={name => setUser({...user, name})}
                value={user.name}
            />
            <Text>E-Mail</Text>
            <TextInput
                style={styles.input}
                placeholder="Informe o E-mail"
                 onChangeText={email => setUser({...user, email})}
                value={user.email}
            />
            <Text>URL do Avatar</Text>
            <TextInput
                style={styles.input}
                placeholder="URL avatar"
                 onChangeText={avatar => setUser({...user, avatar})}
                value={user.avatar}
            />

            <Button radius={"sm"} onPress={handlerUser} title='Salvar' type="solid" />
        </>
    )
}

const styles = StyleSheet.create({
    form: {
        padding: 15
    },
    input: {
        height: 40,
        marginTop: 12,
        marginBottom: 12,
        borderWidth: 1,
        padding: 10,
    },
});