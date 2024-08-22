import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CalculatorScreen() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleInput = (value) => {
        setInput(input + value);
    };


    const handleClear = () => {
        setInput("");
        setResult("");
    };

    const handleCalculate = () => {
        try {
            setResult(eval(input));
        } catch (error) {
            setResult("Error");
        }
    };

    const renderButton = (label, isOperator = false, isGray = false) => (
        <TouchableOpacity
            style={[
                styles.button,
                isOperator ? styles.operatorButton : {},
                isGray ? styles.grayButton : {},
                label === '0' ? styles.buttonZero : {},
            ]}
            onPress={() =>
                label === 'AC'
                    ? handleClear()
                    : label === '='
                        ? handleCalculate()
                        : handleInput(label === '÷' ? '/' : label === '×' ? '*' : label)
            }
        >
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.display}>
                <Text style={styles.inputText}>{input}</Text>
                <Text style={styles.resultText}>{result}</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.row}>
                    {renderButton('AC', false, true)}
                    {renderButton('+/-', false, true)}
                    {renderButton('%', false, true)}
                    {renderButton('÷', true)}
                </View>
                <View style={styles.row}>
                    {renderButton('7')}
                    {renderButton('8')}
                    {renderButton('9')}
                    {renderButton('×', true)}
                </View>
                <View style={styles.row}>
                    {renderButton('4')}
                    {renderButton('5')}
                    {renderButton('6')}
                    {renderButton('-', true)}
                </View>
                <View style={styles.row}>
                    {renderButton('1')}
                    {renderButton('2')}
                    {renderButton('3')}
                    {renderButton('+', true)}
                </View>
                <View style={styles.row}>
                    {renderButton('0')}
                    {renderButton(',')}
                    {renderButton('=', true)}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'flex-end',
    },
    display: {
        backgroundColor: '#000',
        padding: 20,
    },
    inputText: {
        fontSize: 40,
        color: '#fff',
        textAlign: 'right',
    },
    resultText: {
        fontSize: 50,
        color: '#fff',
        textAlign: 'right',
    },
    buttonsContainer: {
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    button: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonZero: {
        width: 180,
    },
    buttonText: {
        fontSize: 30,
        color: '#fff',
    },
    grayButton: {
        backgroundColor: '#a5a5a5',
    },
    operatorButton: {
        backgroundColor: '#f09a36',
    },
});
