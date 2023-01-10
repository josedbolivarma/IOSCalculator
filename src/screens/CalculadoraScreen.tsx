import React from 'react';
import { Text, View } from 'react-native';
import { ButtonCalc } from '../components';
import { styles } from '../theme';
import { useCalculadora } from '../hooks/useCalculadora';


export const CalculadoraScreen = () => {
   
  const {
    // Properties
    numero,
    numeroAnterior,
    // Methods
    armarNumero,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
    limpiar,
    positivoNegativo
  } = useCalculadora();

  return (
    <View style={ styles.calculadoraContainer }>
        {
            ( numeroAnterior !== '0' ) && (
                <Text style={ styles.resultadoPequeno }>{ numeroAnterior }</Text>
            )
        }
        
        <Text 
            style={ styles.resultado }
            numberOfLines={ 1 }
            adjustsFontSizeToFit      
        >
            { numero }
        </Text>

        {/* Buttons Row */}
        <View style={ styles.fila }>
            <ButtonCalc text="C" color="#9B9B9B" action={ limpiar } />
            <ButtonCalc text="+/-" color="#9B9B9B" action={ positivoNegativo } />
            <ButtonCalc text="del" color="#9B9B9B" action={ btnDelete } />
            <ButtonCalc text="/" color="#FF9427" action={ btnDividir } />
        </View>

        <View style={ styles.fila }>
            <ButtonCalc text="7" action={armarNumero} />
            <ButtonCalc text="8" action={armarNumero} />
            <ButtonCalc text="9"  action={armarNumero} />
            <ButtonCalc text="X" color="#FF9427" action={ btnMultiplicar } />
        </View>

        <View style={ styles.fila }>
            <ButtonCalc text="4" action={armarNumero} />
            <ButtonCalc text="5" action={armarNumero} />
            <ButtonCalc text="6" action={armarNumero} />
            <ButtonCalc text="-" color="#FF9427" action={ btnRestar } />
        </View>

        <View style={ styles.fila }>
            <ButtonCalc text="1" action={armarNumero} />
            <ButtonCalc text="2" action={armarNumero} />
            <ButtonCalc text="3" action={armarNumero} />
            <ButtonCalc text="+" color="#FF9427" action={ btnSumar } />
        </View>

        <View style={ styles.fila }>
            <ButtonCalc text="0" action={armarNumero} ancho />
            <ButtonCalc text="." action={armarNumero} />
            <ButtonCalc text="=" action={ calcular } />
        </View>

    </View>
  )
}
