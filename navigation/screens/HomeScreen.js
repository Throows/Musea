import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import SearchBar from '../../components/SearchBar';
import { Audio } from 'expo-av';

var track = {
        url: 'http://192.168.1.139:3000/music/enemy.mp3', // Load media from the network
        title: 'Enemy',
        artist: 'Imagine Dragons',
        album: 'Arcane',
        genre: 'Pop, Rock',
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        artwork: 'https://m.media-amazon.com/images/I/61Oh91ND0OL._SS500_.jpg', // Load artwork from the network
        duration: 213 // Duration in seconds
    };


const sound = new Audio.Sound();


function HomeScreen({navigation}) {

    const [message, setMessage] = useState('Suggestions : ');
    

    async function playSound(url, duration) {
        try {
            await sound.loadAsync({ uri: url }, {shouldPlay: true});
            await sound.playAsync();
            console.log('Sound Playing');
            setTimeout(() => {
                sound.unloadAsync();
            }, 199800);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}>
            <SafeAreaView style={{flex: 1}}>
                <SearchBar 
                    onEndEditing={ () => { setMessage(`Playing : ${track.title}`);
                    playSound(track.url, track.duration); }}/>
                <Text
                    style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'center' }}>{message}</Text>
                
                
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({

    
});