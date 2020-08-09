import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';



function GiveClasses() {
    const { goBack } = useNavigation();

    function handleNavigateBack() {
        goBack();
    }

    return <View style={styles.container}>
        <ImageBackground 
            resizeMode="contain" 
            source={giveClassesBgImage} 
            style={styles.content}
        >
            <Text style={styles.title}>
                Quer ser um proffy?
            </Text>
            <Text style={styles.description}>
                Para comecar, cadastre-se na nossa plataforma web.
            </Text>
        </ImageBackground>

        <RectButton 
            style={styles.okButton}
            onPress={handleNavigateBack}
        >
            <Text style={styles.okButtonText}>
                Tudo bem
            </Text>
        </RectButton>
    </View>
}

export default GiveClasses;