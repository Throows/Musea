import * as React from 'react';
import { View, Text } from 'react-native';

export default function MyMusicScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#121212' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>MyMusicScreen</Text>
        </View>
    );
}