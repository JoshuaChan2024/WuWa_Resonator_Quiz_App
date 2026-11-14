import React, {useState} from 'react';
import {StyleSheet, Text, ScrollView, View, Image, Button, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import {useFonts} from 'expo-font';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001e6b',
    },
    questionnumber: {
        fontSize: 30,
        fontFamily: 'LaguSansSemiBold',
        color: 'white',
        textShadowColor: 'black',
        textShadowRadius: 5.
    },
    questioncontainer: {
        flex: 1,
        backgroundColor: '#002ea1',
        padding: 20,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 30,
        alignItems: 'center',
        rowGap: 10,
    },
    image: {
        width: 300,
        height: 300,
        alignSelf: 'center',
    },
    header: {
        flex: 1,
        fontSize: 20,
        alignSelf: 'center',
        fontFamily: 'LaguSansSemiBold',
        color: 'white',
        textShadowColor: 'black',
        textShadowRadius: 5,
    },
    picker: {
        width: '100%',
        height: 60,
        color: 'white',
    },
    pickercontainer: {
        width: '100%',
        backgroundColor: '#195bff',
    },
    divider: {
        marginVertical: 10,
        alignSelf: 'center',
        width: '90%',
        borderBottomWidth: 5,
        borderBottomColor: '#0037ff',
        borderRadius: 67,
    },
})

const QuizApp = () => {
    const [fontsLoaded] = useFonts({
        LaguSansSemiBold: require('./assets/fonts/Lagu-Sans-SemiBold.otf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    const [selectedResonator1, setSelectedResonator1] = useState('placeholder');
    const [selectedResonator2, setSelectedResonator2] = useState('placeholder');
    const [selectedResonator3, setSelectedResonator3] = useState('placeholder');
    const [selectedResonator4, setSelectedResonator4] = useState('placeholder');
    const [selectedResonator5, setSelectedResonator5] = useState('placeholder');
    const [selectedResonator6, setSelectedResonator6] = useState('placeholder');
    const [selectedResonator7, setSelectedResonator7] = useState('placeholder');
    const [selectedResonator8, setSelectedResonator8] = useState('placeholder');
    const [selectedResonator9, setSelectedResonator9] = useState('placeholder');
    const [selectedResonator10, setSelectedResonator10] = useState('placeholder');
    const checkAnswers = () => {
        let totalScore = 0;
        if (
            selectedResonator1 === 'placeholder' ||
            selectedResonator2 === 'placeholder' ||
            selectedResonator3 === 'placeholder' ||
            selectedResonator4 === 'placeholder' ||
            selectedResonator5 === 'placeholder'
        ) {
            Alert.alert('Incomplete Quiz', 'Please answer all questions!');
            return;
        }

        if (selectedResonator1 === 'aemeath') {
            totalScore ++;
        }

        if (selectedResonator2 === 'suoming') {
            totalScore ++;
        }

        if (selectedResonator3 === 'hsin') {
            totalScore ++;
        }

        if (selectedResonator4 === 'suisui') {
            totalScore ++;
        }

        if (selectedResonator5 === 'yangyangxl') {
            totalScore ++;
        }

        if (selectedResonator6 === 'phrolova') {
            totalScore ++;
        }

        if (selectedResonator7 === 'lily') {
            totalScore ++;
        }

        if (selectedResonator8 === 'denia') {
            totalScore ++;
        }

        if (selectedResonator9 === 'femalerover') {
            totalScore ++;
        }

        if (selectedResonator10 === 'mornye') {
            totalScore ++;
        }

        Alert.alert(
            'Quiz Results',
            `You have scored ${totalScore} /10!`,
        );
    };
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.header}>WuWa Resonator Quiz</Text>

                <View style={styles.questioncontainer}>
                    <Text style={styles.questionnumber}>Question 1</Text>
                    <Image style={styles.image} source={require('./images/aemeath.jpg')} />
                    <Text style={{fontFamily: 'LaguSansSemiBold', color: 'white', textShadowColor: 'black', textShadowRadius: 5}}><FontAwesome6 name="circle-question" size={15} color="#b5eeff"/> What Resonator is this?</Text>
                    <View style={styles.pickercontainer}>
                        <Picker selectedValue={selectedResonator1}
                                onValueChange={(value) => setSelectedResonator1(value)}
                                style={styles.picker}
                        >
                            <Picker.Item label='---SELECT OPTION---' value='placeholder'/>
                            <Picker.Item label='Aemeath' value='aemeath'/>
                            <Picker.Item label='Denia' value='denia'/>
                            <Picker.Item label='Hiyuki' value='hiyuki'/>
                        </Picker>
                    </View>
                </View>

                <View style={styles.divider} />

                <View style={styles.questioncontainer}>
                    <Text style={styles.questionnumber}>Question 2</Text>
                    <Image style={styles.image} source={require('./images/suoming.jpg')} />
                    <Text style={{fontFamily: 'LaguSansSemiBold', color: 'white', textShadowColor: 'black', textShadowRadius: 5}}><FontAwesome6 name="circle-question" size={15} color="#b5eeff"/> What Resonator is this?</Text>
                    <View style={styles.pickercontainer}>
                        <Picker selectedValue={selectedResonator2}
                                onValueChange={(value) => setSelectedResonator2(value)}
                                style={styles.picker}
                        >
                            <Picker.Item label='---SELECT OPTION---' value='placeholder'/>
                            <Picker.Item label='Hsin' value='hsin'/>
                            <Picker.Item label='Rover' value='rover'/>
                            <Picker.Item label='Suoming' value='suoming'/>
                        </Picker>
                    </View>
                </View>

                <View style={styles.divider} />

                <View style={styles.questioncontainer}>
                    <Text style={styles.questionnumber}>Question 3</Text>
                    <Image style={styles.image} source={require('./images/Hsin.jpg')} />
                    <Text style={{fontFamily: 'LaguSansSemiBold', color: 'white', textShadowColor: 'black', textShadowRadius: 5}}><FontAwesome6 name="circle-question" size={15} color="#b5eeff"/> What Resonator is this?</Text>
                    <View style={styles.pickercontainer}>
                        <Picker selectedValue={selectedResonator3}
                                onValueChange={(value) => setSelectedResonator3(value)}
                                style={styles.picker}
                        >
                            <Picker.Item label='---SELECT OPTION---' value='placeholder'/>
                            <Picker.Item label='Jinshi' value='jinshi'/>
                            <Picker.Item label='Hsin' value='hsin'/>
                            <Picker.Item label='Jue' value='jue'/>
                        </Picker>
                    </View>
                </View>

                <View style={styles.divider} />

                <View style={styles.questioncontainer}>
                    <Text style={styles.questionnumber}>Question 4</Text>
                    <Image style={styles.image} source={require('./images/suisui.jpg')} />
                    <Text style={{fontFamily: 'LaguSansSemiBold', color: 'white', textShadowColor: 'black', textShadowRadius: 5}}><FontAwesome6 name="circle-question" size={15} color="#b5eeff"/> What Resonator is this?</Text>
                    <View style={styles.pickercontainer}>
                        <Picker selectedValue={selectedResonator4}
                                onValueChange={(value) => setSelectedResonator4(value)}
                                style={styles.picker}
                        >
                            <Picker.Item label='---SELECT OPTION---' value='placeholder'/>
                            <Picker.Item label='Suisui' value='suisui'/>
                            <Picker.Item label='Cantarella' value='cantarella'/>
                            <Picker.Item label='Phrolova' value='phrolova'/>
                        </Picker>
                    </View>
                </View>

                <View style={styles.divider} />

                <View style={styles.questioncontainer}>
                    <Text style={styles.questionnumber}>Question 5</Text>
                    <Image style={styles.image} source={require('./images/yangyangxl.jpg')} />
                    <Text style={{fontFamily: 'LaguSansSemiBold', color: 'white', textShadowColor: 'black', textShadowRadius: 5}}><FontAwesome6 name="circle-question" size={15} color="#b5eeff"/> What Resonator is this?</Text>
                    <View style={styles.pickercontainer}>
                        <Picker selectedValue={selectedResonator5}
                                onValueChange={(value) => setSelectedResonator5(value)}
                                style={styles.picker}
                        >
                            <Picker.Item label='---SELECT OPTION---' value='placeholder'/>
                            <Picker.Item label='Yangyang' value='yangyang'/>
                            <Picker.Item label='Yangyang: Xuanling' value='yangyangxl'/>
                            <Picker.Item label='Qingxiao' value='qingxiao'/>
                        </Picker>
                    </View>
                </View>

                <View style={styles.divider} />

                <View style={styles.questioncontainer}>
                    <Text style={styles.questionnumber}>Question 6</Text>
                    <Image style={styles.image} source={require('./images/phrolova.jpg')} />
                    <Text style={{fontFamily: 'LaguSansSemiBold', color: 'white', textShadowColor: 'black', textShadowRadius: 5}}><FontAwesome6 name="circle-question" size={15} color="#b5eeff"/> What Resonator is this?</Text>
                    <View style={styles.pickercontainer}>
                        <Picker selectedValue={selectedResonator6}
                                onValueChange={(value) => setSelectedResonator6(value)}
                                style={styles.picker}
                        >
                            <Picker.Item label='---SELECT OPTION---' value='placeholder'/>
                            <Picker.Item label='Phrolova' value='phrolova'/>
                            <Picker.Item label='Scar' value='yangyangxl'/>
                            <Picker.Item label='Christoforo' value='qingxiao'/>
                        </Picker>
                    </View>
                </View>

                <View style={styles.divider} />

                <View style={styles.questioncontainer}>
                    <Text style={styles.questionnumber}>Question 7</Text>
                    <Image style={styles.image} source={require('./images/lily.jpg')} />
                    <Text style={{fontFamily: 'LaguSansSemiBold', color: 'white', textShadowColor: 'black', textShadowRadius: 5}}><FontAwesome6 name="circle-question" size={15} color="#b5eeff"/> What Resonator is this?</Text>
                    <View style={styles.pickercontainer}>
                        <Picker selectedValue={selectedResonator7}
                                onValueChange={(value) => setSelectedResonator7(value)}
                                style={styles.picker}
                        >
                            <Picker.Item label='---SELECT OPTION---' value='placeholder'/>
                            <Picker.Item label='Anna' value='anna'/>
                            <Picker.Item label='Lily' value='lily'/>
                            <Picker.Item label='Calcharo' value='qingxiao'/>
                        </Picker>
                    </View>
                </View>

                <View style={styles.divider} />

                <View style={styles.questioncontainer}>
                    <Text style={styles.questionnumber}>Question 8</Text>
                    <Image style={styles.image} source={require('./images/denia.jpg')} />
                    <Text style={{fontFamily: 'LaguSansSemiBold', color: 'white', textShadowColor: 'black', textShadowRadius: 5}}><FontAwesome6 name="circle-question" size={15} color="#b5eeff"/> What Resonator is this?</Text>
                    <View style={styles.pickercontainer}>
                        <Picker selectedValue={selectedResonator8}
                                onValueChange={(value) => setSelectedResonator8(value)}
                                style={styles.picker}
                        >
                            <Picker.Item label='---SELECT OPTION---' value='placeholder'/>
                            <Picker.Item label='Sigrikra' value='sigrikra'/>
                            <Picker.Item label='Lynae' value='lynae'/>
                            <Picker.Item label='Denia' value='denia'/>
                        </Picker>
                    </View>
                </View>

                <View style={styles.divider} />

                <View style={styles.questioncontainer}>
                    <Text style={styles.questionnumber}>Question 9</Text>
                    <Image style={styles.image} source={require('./images/femalerover.jpg')} />
                    <Text style={{fontFamily: 'LaguSansSemiBold', color: 'white', textShadowColor: 'black', textShadowRadius: 5}}><FontAwesome6 name="circle-question" size={15} color="#b5eeff"/> What Resonator is this?</Text>
                    <View style={styles.pickercontainer}>
                        <Picker selectedValue={selectedResonator9}
                                onValueChange={(value) => setSelectedResonator9(value)}
                                style={styles.picker}
                        >
                            <Picker.Item label='---SELECT OPTION---' value='placeholder'/>
                            <Picker.Item label='Female Rover' value='femalerover'/>
                            <Picker.Item label='Male Rover' value='malerover'/>
                            <Picker.Item label='Abby' value='abby'/>
                        </Picker>
                    </View>
                </View>

                <View style={styles.divider} />

                <View style={styles.questioncontainer}>
                    <Text style={styles.questionnumber}>Question 10</Text>
                    <Image style={styles.image} source={require('./images/mornye.jpg')} />
                    <Text style={{fontFamily: 'LaguSansSemiBold', color: 'white', textShadowColor: 'black', textShadowRadius: 5}}><FontAwesome6 name="circle-question" size={15} color="#b5eeff"/> What Resonator is this?</Text>
                    <View style={styles.pickercontainer}>
                        <Picker selectedValue={selectedResonator10}
                                onValueChange={(value) => setSelectedResonator10(value)}
                                style={styles.picker}
                        >
                            <Picker.Item label='---SELECT OPTION---' value='placeholder'/>
                            <Picker.Item label='Lynae' value='lynae'/>
                            <Picker.Item label='Mornye' value='mornye'/>
                            <Picker.Item label='Aemeath' value='aemeath'/>
                        </Picker>
                    </View>
                </View>

                <Button
                    title="Submit Quiz!"
                    onPress={checkAnswers}
                />
            </View>
        </ScrollView>
    )
};

export default QuizApp;