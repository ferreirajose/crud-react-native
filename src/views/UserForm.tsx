import { Button, Icon } from "@rneui/themed";
import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

export default function({route, navigation}) {
    const [user, setUser] = useState(route.params ? route.params : {});

    return (
        <View style={styles.form}>
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

            <Button radius={"sm"} title='Salvar' type="solid" />
        </View>
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