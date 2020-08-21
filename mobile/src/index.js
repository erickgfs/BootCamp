import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api';

export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            console.log(response.data);
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject() {
        const response = api.post('projects',{
            title:`Novo projeto ${Date.now()}`,
            owner:"erick giovanni"
        });

        setProjects([...projects, response.data]);
    }

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

            <SafeAreaView style={style.container}>
                <FlatList
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project }) => (
                        <Text style={style.projects} key={project.id}>{project.title}</Text>
                    )}
                />
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={style.button}
                    onPress={handleAddProject}>
                    <Text
                        style={style.buttonText}>
                        Adicionar projeto
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
            {/* <View style={style.container}>
                {projects.map(response => <Text style={style.projects} key={response.id}>{response.title}</Text>)}
            </View> */}
        </>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7159c1",
        // justifyContent: "center",
        // alignItems: "center",
    },
    // title: {
    //     color: "#fff",
    //     fontSize: 32,
    //     fontWeight: "bold"
    // },
    projects: {
        color: "#fff",
        fontSize: 30,
    },
    button: {
        backgroundColor: "#fff",
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16
    },
})