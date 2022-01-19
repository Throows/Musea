import * as React from 'react';
import { View, Text } from 'react-native';

export default function ResearchScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#121212' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>ResearchScreen</Text>
        </View>
    );
}