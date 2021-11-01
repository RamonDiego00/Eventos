import { Text, StyleSheet, View } from 'react-native'
import { COLORS } from '../../screens/theme'

export const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
    },
    avatar:{
        borderWidth:4,
        borderColor:COLORS.BLACK_SECONDARY
    }
})
