import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/AppTheme';

interface Props {
    text: string;
    color?: "#2D2D2D" | "#FF9427" | "#9B9B9B";
    ancho?: boolean;
    action: ( numeroTexto: string ) => void; 
}

export const ButtonCalc = ({ text, color = "#2D2D2D", ancho = false, action }: Props ) => {
  return (
    <TouchableOpacity
        onPress={ () => action( text ) }
    >
    <View style={{
        ...styles.button, 
        backgroundColor: color,
        width: ( ancho ) ? 180 : 80
    }}>
        <Text style={{
            ...styles.buttonText,
            color: ( color === "#9B9B9B" ) ? "black" : "white"
        }}>{ text }</Text>
    </View>
    </TouchableOpacity>
  )
}
