import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import SearchBar from '../../components/SearchBar';
import TrackPlayer from 'react-native-track-player';


var track = {
        url: 'http://192.168.1.138.3000', // Load media from the network
        title: 'Enemy',
        artist: 'Imagine Dragons',
        album: 'Arcane',
        genre: 'Pop, Rock',
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        artwork: 'https://m.media-amazon.com/images/I/61Oh91ND0OL._SS500_.jpg', // Load artwork from the network
        duration: 213 // Duration in seconds
    };

TrackPlayer.updateOptions({
    stopWithApp: false,
    capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
    compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
    ],
});

function HomeScreen({navigation}) {

    const [message, setMessage] = useState('Suggestions : ');
    
    const setUpTrackPlayer = async () => {
        try {
            await TrackPlayer.setupPlayer();
            await TrackPlayer.add(track);
            console.log('Tracks added');
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        setUpTrackPlayer();

        return () => TrackPlayer.destroy();
    }, []);

    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}>
            <SafeAreaView style={{flex: 1}}>
                <SearchBar 
                    onEndEditing={ () => { TrackPlayer.play(); }}/>
                <Text
                    style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'center' }}>{message}</Text>
                
                
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({

    
});