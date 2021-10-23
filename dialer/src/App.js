import React, { useState } from 'react';
import {View, StyleSheet, Text, Pressable, Image} from 'react-native';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';


const styles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,
        backgroundColor: 'rgb(79,166,49)',
    },
    numbers: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    keyboard:{
        flex:4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    keyboard_row:{
        flex: 1,
        flexDirection: 'row'
    },
    key:{
        borderColor: 'gray',
        borderWidth: 1,
        alignItems: 'center',
        width: '33%',
        // height: '25%',
        justifyContent: 'center'
    },
    key_number:{
        fontSize: 30,
        color: 'black'
    },
    key_letter:{
        lineHeight: 15,
        fontSize:15,
        color: 'gray'
    },
    call: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 'auto',
        backgroundColor: 'white'
    },
    empty:{
        marginLeft:'auto',
        marginRight: 'auto',
        backfaceVisibility: 'hidden',
    },
    dial:{
        marginRight: 'auto',
        marginLeft:'auto',
        width: 50,
        height: 50,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    backspace:{
        marginRight: 'auto',
        alignItems: 'center',
        justifyContent:'center',
        width: 50,
        height: 50,
    }
});

export default function App() {
    const [getNumber, setNumber] = useState('');

    function addNumber(numberToAdd){
        return () => setNumber(getNumber => getNumber + numberToAdd);
    }

    function makeCall(number) {
        return RNImmediatePhoneCall.immediatePhoneCall(number);
        console.log('dialing');
    }

    return (
        <>
            <View style={styles.header}>
                <Text style={{fontSize:20}}>Phone</Text>
            </View>
            <View style={styles.numbers}>
                <Text style={{color: 'black', fontSize: 60, fontWeight: 'bold'}}>
                    {getNumber}
                </Text>
            </View>
            <View style={styles.keyboard}>
                <View style={styles.keyboard_row}>
                    <Pressable style={styles.key} onPress={addNumber('1')}>
                        <Text style={styles.key_number}>1</Text>
                        <Text style={styles.key_letter}>o_o</Text>
                    </Pressable>
                    <Pressable style={styles.key} onPress={addNumber('2')}>
                        <Text style={styles.key_number}>2</Text>
                        <Text style={styles.key_letter}>ABC</Text>
                    </Pressable>
                    <Pressable style={styles.key} onPress={addNumber('3')}>
                        <Text style={styles.key_number}>3</Text>
                        <Text style={styles.key_letter}>DEF</Text>
                    </Pressable>
                </View>
                <View style={styles.keyboard_row}>
                    <Pressable style={styles.key} onPress={addNumber('4')}>
                        <Text style={styles.key_number}>4</Text>
                        <Text style={styles.key_letter}>GHI</Text>
                    </Pressable>
                    <Pressable style={styles.key} onPress={addNumber('5')}>
                        <Text style={styles.key_number}>5</Text>
                        <Text style={styles.key_letter}>JKL</Text>
                    </Pressable>
                    <Pressable style={styles.key} onPress={addNumber('6')}>
                        <Text style={styles.key_number}>6</Text>
                        <Text style={styles.key_letter}>MNO</Text>
                    </Pressable>
                </View>
                <View style={styles.keyboard_row}>
                    <Pressable style={styles.key} onPress={addNumber('7')}>
                        <Text style={styles.key_number}>7</Text>
                        <Text style={styles.key_letter}>PRQS</Text>
                    </Pressable>
                    <Pressable style={styles.key} onPress={addNumber('8')}>
                        <Text style={styles.key_number}>8</Text>
                        <Text style={styles.key_letter}>TUV</Text>
                    </Pressable>
                    <Pressable style={styles.key} onPress={addNumber('9')}>
                        <Text style={styles.key_number}>9</Text>
                        <Text style={styles.key_letter}>XWYZ</Text>
                    </Pressable>
                </View>
                <View style={styles.keyboard_row}>
                    <Pressable style={styles.key} onPress={addNumber('*')}>
                        <Text style={styles.key_number}>*</Text>
                    </Pressable>
                    <Pressable style={styles.key} onLongPress={getNumber.length === 0 ? addNumber('+') : addNumber('0')}
                    onPress={addNumber('0')}>
                        <Text style={styles.key_number}>0</Text>
                        <Text style={styles.key_letter}>+</Text>
                    </Pressable>
                    <Pressable style={styles.key} onPress={addNumber('#')}>
                        <Text style={styles.key_number}>#</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.call}>
                <View style={styles.empty}/>
                <Pressable style={styles.dial} onPress={() => RNImmediatePhoneCall.immediatePhoneCall(getNumber)}>
                    <Image style={{width:50,height:50}} source={require('./assets/phone-call.png')}/>
                </Pressable>
                <View style={styles.backspace}>
                    {getNumber.length >= 1 &&
                        <Pressable onPress={() => setNumber(getNumber => getNumber.slice(0, -1))} onLongPress={() => setNumber('')}>
                            <Image style={{width:50,height:50}} source={require('./assets/backspace.png')}/>
                        </Pressable>
                    }
                </View>
            </View>
        </>
    );
}
