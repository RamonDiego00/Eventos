import {StyleSheet} from 'react-native'
import { COLORS, FONTS } from '../../screens/theme'

export const styles = StyleSheet.create({
    container: {
        width:'100%',
        marginBottom: 36,
    },
    button:{
        height:48,
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize: 14,
        fontFamily:FONTS.BOLD
    },
    icon:{
        marginRight:12
    }
})