import {StyleSheet} from 'react-native'
import { COLORS, FONTS } from '../../screens/theme'

export const styles = StyleSheet.create({
    container: {
        width:'100%',
        marginBottom: 36,
    },
    message:{
        fontSize:15,
        fontFamily:FONTS.REGULAR,
        color:COLORS.WHITE,
        marginBottom: 12
    },
    footer:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
    },
    UserName:{
        fontSize:15,
        fontFamily:FONTS.REGULAR,
        color:COLORS.WHITE,
        marginLeft:16
    }
})