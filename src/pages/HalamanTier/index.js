import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React from 'react'
import { colors, fonts, windowWidth } from '../../utils'
import { Icon } from 'react-native-elements';



const MyListData = ({ no, img, nama, xp }) => {
    return (
        <View style={{
            marginVertical: 2,
            flexDirection: 'row',
            backgroundColor: colors.white,
            elevation: 1,
            borderWidth: 1,
            borderColor: colors.border,
            padding: 5,
            borderRadius: 10,
        }}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
            }}>
                <Text style={{
                    fontFamily: fonts.secondary[600],
                    fontSize: 20,
                }}>{no}</Text>
            </View>
            <View style={{
                backgroundColor: colors.white,
                borderRadius: 40,
                borderWidth: 2,
                borderColor: colors.white,
                position: 'relative',
                width: 55,
                height: 55
            }}>
                <Image style={{
                    width: 52,
                    height: 52,
                    borderRadius: 50,
                }} source={img} />

            </View>
            <View style={{
                justifyContent: 'center',
                padding: 10,
                flex: 1,
            }}>
                <Text style={{
                    fontFamily: fonts.secondary[600],
                    fontSize: 18,
                }}>{nama}</Text>
            </View>

            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
            }}>
                <Text style={{
                    fontFamily: fonts.secondary[200],
                    fontSize: 18,
                }}>{xp}</Text>
            </View>
        </View>
    )
}


const MyListDataOK = ({ no, img, nama, xp }) => {
    return (
        <View style={{
            marginVertical: 2,
            flexDirection: 'row',
            backgroundColor: colors.tertiary,
            elevation: 1,
            borderWidth: 1,
            borderColor: colors.border,
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 10,
        }}>

            <View style={{
                backgroundColor: colors.white,
                borderRadius: 40,
                borderWidth: 2,
                borderColor: colors.white,
                position: 'relative',
                width: 55,
                height: 55
            }}>
                <Image style={{
                    width: 52,
                    height: 52,
                    borderRadius: 50,
                }} source={img} />

            </View>
            <View style={{
                justifyContent: 'center',
                padding: 10,
                flex: 1,
            }}>
                <Text style={{
                    fontFamily: fonts.secondary[600],
                    fontSize: 18,
                    color: colors.white,
                }}>{nama}</Text>
            </View>

            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
            }}>
                <Text style={{
                    fontFamily: fonts.secondary[200],
                    color: colors.white,
                    fontSize: 18,
                }}>{xp}</Text>
            </View>
        </View>
    )
}


export default function HalamanTier({ navigation }) {
    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <View style={{
                flex: 0.8,
                padding: 10,
                backgroundColor: colors.primary,
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around'
                }}>
                    <TouchableOpacity>
                        <Icon type='ionicon' color={colors.black} name='arrow-back-outline' size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        padding: 10,
                        width: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 30,
                        backgroundColor: colors.foourty
                    }}>
                        <Text style={{
                            color: colors.white,
                            fontFamily: fonts.secondary[600]
                        }}>Tier</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('HalamanGlobal')} style={{
                        padding: 10,
                        width: 100,
                        borderWidth: 1,
                        borderColor: colors.foourty,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 30,
                        backgroundColor: colors.primary
                    }}>
                        <Text style={{
                            color: colors.white,
                            fontFamily: fonts.secondary[600]
                        }}>Global</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('HalamanAbout')}>
                        <Icon type='ionicon' color={colors.black} name='help-circle-outline' size={25} />
                    </TouchableOpacity>
                </View>

                <View style={{
                    // flex: 1,

                    flex: 0.5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        color: colors.white,
                        fontSize: 20,
                        fontFamily: fonts.secondary[800]
                    }}>Tier Darul Moqomah</Text>
                    <Text style={{
                        color: colors.white,
                        fontSize: 14,
                        fontFamily: fonts.secondary[400]
                    }}>5 Hari</Text>
                </View>
            </View>
            <View style={{
                flex: 0.5,
                marginTop: -100,
                padding: 10,
                backgroundColor: colors.secondary,
                borderTopLeftRadius: windowWidth / 8,
                borderTopRightRadius: windowWidth / 8,
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    marginTop: -60
                }}>
                    <View>
                        <View style={{
                            backgroundColor: colors.white,
                            borderRadius: 40,
                            borderWidth: 2,
                            borderColor: colors.white,
                            position: 'relative',
                            width: 55,
                            height: 55
                        }}>
                            <Image style={{
                                width: 52,
                                height: 52,
                                borderRadius: 50,
                            }} source={require('../../assets/pp2.png')} />
                            <View style={{
                                position: 'absolute',
                                bottom: -15,
                                left: 10
                            }}>
                                <Image style={{
                                    width: 30,
                                    height: 30,
                                    resizeMode: 'contain'
                                }} source={require('../../assets/b3.png')} />
                            </View>
                        </View>

                        <View style={{
                            marginTop: 50,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                color: colors.white,
                                fontSize: 15,
                                fontFamily: fonts.secondary[600]
                            }}>Izwanul</Text>
                            <Text style={{
                                color: colors.white,
                                fontSize: 14,
                                fontFamily: fonts.secondary[400]
                            }}>1002 XP</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{
                            backgroundColor: colors.white,
                            borderRadius: 40,
                            padding: 3,
                            position: 'relative',
                            width: 80,
                            height: 80
                        }}>
                            <Image style={{
                                width: 74,
                                height: 74,
                                borderRadius: 50,
                            }} source={require('../../assets/pp1.png')} />
                            <View style={{
                                position: 'absolute',
                                bottom: -20,
                                left: 25
                            }}>
                                <Image style={{
                                    width: 30,
                                    height: 40,
                                    resizeMode: 'contain'
                                }} source={require('../../assets/b1.png')} />
                            </View>
                        </View>

                        <View style={{
                            marginTop: 30,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                color: colors.white,
                                fontSize: 15,
                                fontFamily: fonts.secondary[600]
                            }}>ID#D83921</Text>
                            <Text style={{
                                color: colors.white,
                                fontSize: 14,
                                fontFamily: fonts.secondary[400]
                            }}>2128 XP</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{
                            backgroundColor: colors.white,
                            borderRadius: 40,
                            borderWidth: 2,
                            borderColor: colors.white,
                            position: 'relative',
                            width: 55,
                            height: 55
                        }}>
                            <Image style={{
                                width: 52,
                                height: 52,
                                borderRadius: 50,
                            }} source={require('../../assets/pp3.png')} />
                            <View style={{
                                position: 'absolute',
                                bottom: -15,
                                left: 10
                            }}>
                                <Image style={{
                                    width: 30,
                                    height: 30,
                                    resizeMode: 'contain'
                                }} source={require('../../assets/b2.png')} />
                            </View>
                        </View>

                        <View style={{
                            marginTop: 50,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                color: colors.white,
                                fontSize: 15,
                                fontFamily: fonts.secondary[600]
                            }}>ID#128390</Text>
                            <Text style={{
                                color: colors.white,
                                fontSize: 14,
                                fontFamily: fonts.secondary[400]
                            }}>1890 XP</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{
                flex: 1,
                marginTop: -50,
                padding: 20,
                backgroundColor: colors.white,
                borderTopLeftRadius: windowWidth / 8,
                borderTopRightRadius: windowWidth / 8,
            }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <MyListData img={require('../../assets/pp4.png')} no={4} nama="Dian Seto" xp="980 XP" />
                    <MyListData img={require('../../assets/pp5.png')} no={5} nama="Rika Yanti" xp="903 XP" />
                    <MyListData img={require('../../assets/pp6.png')} no={6} nama="Ridwan Fajar Wid.." xp="890 XP" />
                    <MyListData img={require('../../assets/pp7.png')} no={7} nama="Habib Trizaka" xp="730 XP" />
                    <MyListDataOK img={require('../../assets/pp2.png')} no={3} nama="Peringkatmu #3" xp="1002 XP" />
                    <MyListData img={require('../../assets/pp8.png')} no={8} nama="Sandi Aulia" xp="710 XP" />
                    <MyListData img={require('../../assets/pp9.png')} no={9} nama="Kakang Rudianto" xp="650 XP" />
                    <MyListData img={require('../../assets/pp10.png')} no={10} nama="Robi Darwis" xp="601 XP" />
                </ScrollView>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({})