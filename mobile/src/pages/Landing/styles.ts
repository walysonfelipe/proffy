import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40,

    },
    banner: {
      width: '100%',
      resizeMode: 'contain'
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#FFF',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 30,
    },
    titleBold: {
        fontFamily:'Poppins_600SemiBold',
     
    },
    buttonsContainer: {
       flexDirection: 'row',
       margin: 9,
       justifyContent: 'space-between',
    },

    button: {
     height: 130,
     width: '47%',
     backgroundColor:'#333',
     borderRadius: 8,
     padding: 14,
     justifyContent: 'space-between'
    },

    buttonPrimary: {
        backgroundColor: '#9871f5',
    },


    buttonSecondary: {
        backgroundColor: '#04d361',
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 20,
    },
    totalConnections: {
     fontFamily: 'Poppins_400Regular',
     color: '#d4c2ff',
     fontSize: 10,
     lineHeight: 20,
     maxWidth: 140,
     marginTop: 13,
    },

});

export default styles;