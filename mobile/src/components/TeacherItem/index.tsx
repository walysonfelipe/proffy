import React from 'react';
import { View, Image, Text } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';



 function TeacherItem() {
     return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                 style={styles.avatar}
                 source={{ uri: 'https://github.com/walysonfelipe.png'}} />
            
            
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Walyson Felipe</Text>
                    <Text style={styles.subject}>Fisica</Text>
                </View>
            </View>

            <Text style={styles.bio}>
            Project made to connect teachers to students,made in Next Level Week #2 @Rocketseat
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'  '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton style={styles.favoriteButton}>
                        <Image source={heartOutlineIcon}/>
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>

     )
     
 }

export default TeacherItem;

