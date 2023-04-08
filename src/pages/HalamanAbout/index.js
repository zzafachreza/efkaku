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

const MySlideBox = ({ img, label }) => {
    return (
        <View style={{
            borderWidth: 1,
            width: windowWidth / 4,
            margin: 5,
            padding: 10,
            borderRadius: 10,
            borderColor: colors.zavalabs,
            elevation: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image source={img} style={{
                width: 80,
                height: 80,
                resizeMode: 'contain'
            }} />
            <Text style={{
                marginTop: 10,
                textAlign: 'center',
                fontFamily: fonts.secondary[600],
                fontSize: 16
            }}>{label}</Text>
        </View>
    )
}

export default function HalamanAbout({ navigation }) {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <ScrollView>
                <View style={{
                    flex: 1,
                    padding: 10,
                    backgroundColor: colors.white,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around'
                    }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon type='ionicon' color={colors.black} name='arrow-back-outline' size={25} />
                        </TouchableOpacity>


                        <Text style={{
                            flex: 1,
                            textAlign: 'center',
                            fontFamily: fonts.secondary[600],
                            fontSize: 25
                        }}>Dzikra Tier</Text>
                    </View>

                    <View style={{
                        // flex: 1,

                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 20,
                    }}>
                        <Image source={require('../../assets/bintang.png')} style={{
                            width: '100%',
                            resizeMode: 'contain'
                        }} />
                    </View>
                    <View style={{
                        flex: 0.5,
                        padding: 10,
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: 20
                        }}>Bagaimana Tier Bekerja?</Text>
                        <Text style={{
                            marginTop: 5,
                            fontFamily: fonts.secondary[400],
                            fontSize: 20
                        }}>Kumpulkan XP sebanyak banyaknya untuk dapat meraih posisi atas pada Tier. Keluarlah sebagai 10 teratas di akhir minggu dan kamu akan naik ke Tier yang lebih tinggi</Text>
                    </View>

                </View>
                <View style={{
                    flex: 1,
                    // backgroundColor: 'red',
                    backgroundColor: colors.white,
                    padding: 10,
                }}>
                    <View style={{
                        borderWidth: 1,
                        margin: 10,
                        borderRadius: 10,
                        borderColor: colors.border,
                        elevation: 1,
                        paddingVertical: 10,

                    }}>
                        <View style={{
                            marginVertical: 10,
                            marginHorizontal: 10,
                            flexDirection: 'row'
                        }}>
                            <View style={{
                                flex: 0.2,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontFamily: fonts.secondary[600],
                                    fontSize: 20
                                }}>10</Text>
                            </View>
                            <View style={{
                                flex: 0.3,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    width: 20,
                                    borderRadius: 10,
                                    height: 20,
                                    backgroundColor: colors.zavalabs
                                }}></View>
                            </View>
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    width: '100%',
                                    borderRadius: 10,
                                    height: 5,
                                    backgroundColor: colors.zavalabs
                                }}></View>
                            </View>
                            <View style={{
                                flex: 0.2,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingHorizontal: 10,
                            }}>
                                <View style={{
                                    width: '100%',
                                    borderRadius: 10,
                                    height: 5,
                                    backgroundColor: colors.zavalabs
                                }}></View>
                            </View>
                        </View>

                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Image source={require('../../assets/up.png')} style={{
                                width: '50%',
                                height: 20,
                                resizeMode: 'contain'
                            }} />
                        </View>

                        <View style={{
                            marginVertical: 10,
                            marginHorizontal: 10,
                            flexDirection: 'row'
                        }}>
                            <View style={{
                                flex: 0.2,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontFamily: fonts.secondary[600],
                                    fontSize: 20
                                }}>11</Text>
                            </View>
                            <View style={{
                                flex: 0.3,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    width: 20,
                                    borderRadius: 10,
                                    height: 20,
                                    backgroundColor: colors.zavalabs
                                }}></View>
                            </View>
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    width: '100%',
                                    borderRadius: 10,
                                    height: 5,
                                    backgroundColor: colors.zavalabs
                                }}></View>
                            </View>
                            <View style={{
                                flex: 0.2,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingHorizontal: 10,
                            }}>
                                <View style={{
                                    width: '100%',
                                    borderRadius: 10,
                                    height: 5,
                                    backgroundColor: colors.zavalabs
                                }}></View>
                            </View>
                        </View>
                        <View style={{
                            marginVertical: 10,
                            marginHorizontal: 10,
                            flexDirection: 'row'
                        }}>
                            <View style={{
                                flex: 0.1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingHorizontal: 10,
                            }}>
                                <View style={{
                                    width: '100%',
                                    borderRadius: 10,
                                    height: 5,
                                    backgroundColor: colors.zavalabs
                                }}></View>
                            </View>
                            <View style={{
                                flex: 0.3,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    width: 20,
                                    borderRadius: 10,
                                    height: 20,
                                    backgroundColor: colors.white
                                }}></View>
                            </View>
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    width: '100%',
                                    borderRadius: 10,
                                    height: 5,
                                    backgroundColor: colors.white
                                }}></View>
                            </View>
                            <View style={{
                                flex: 0.2,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingHorizontal: 10,
                            }}>
                                <View style={{
                                    width: '100%',
                                    borderRadius: 10,
                                    height: 5,
                                    backgroundColor: colors.white
                                }}></View>
                            </View>
                        </View>
                        <View style={{
                            marginVertical: 10,
                            marginHorizontal: 10,
                            flexDirection: 'row'
                        }}>
                            <View style={{
                                flex: 0.2,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontFamily: fonts.secondary[600],
                                    fontSize: 20
                                }}>20</Text>
                            </View>
                            <View style={{
                                flex: 0.3,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    width: 20,
                                    borderRadius: 10,
                                    height: 20,
                                    backgroundColor: colors.zavalabs
                                }}></View>
                            </View>
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    width: '100%',
                                    borderRadius: 10,
                                    height: 5,
                                    backgroundColor: colors.zavalabs
                                }}></View>
                            </View>
                            <View style={{
                                flex: 0.2,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingHorizontal: 10,
                            }}>
                                <View style={{
                                    width: '100%',
                                    borderRadius: 10,
                                    height: 5,
                                    backgroundColor: colors.zavalabs
                                }}></View>
                            </View>
                        </View>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Image source={require('../../assets/down.png')} style={{
                                width: '50%',
                                height: 20,
                                resizeMode: 'contain'
                            }} />
                        </View>

                        <View style={{
                            marginVertical: 10,
                            marginHorizontal: 10,
                            flexDirection: 'row'
                        }}>
                            <View style={{
                                flex: 0.2,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontFamily: fonts.secondary[600],
                                    fontSize: 20
                                }}>21</Text>
                            </View>
                            <View style={{
                                flex: 0.3,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    width: 20,
                                    borderRadius: 10,
                                    height: 20,
                                    backgroundColor: colors.zavalabs
                                }}></View>
                            </View>
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    width: '100%',
                                    borderRadius: 10,
                                    height: 5,
                                    backgroundColor: colors.zavalabs
                                }}></View>
                            </View>
                            <View style={{
                                flex: 0.2,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingHorizontal: 10,
                            }}>
                                <View style={{
                                    width: '100%',
                                    borderRadius: 10,
                                    height: 5,
                                    backgroundColor: colors.zavalabs
                                }}></View>
                            </View>
                        </View>
                    </View>


                </View>
                <View style={{
                    paddingHorizontal: 20,
                    backgroundColor: colors.white
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 20
                    }}>Semua Tier di Dzikra</Text>
                    <Text style={{
                        marginTop: 5,
                        fontFamily: fonts.secondary[400],
                        fontSize: 18
                    }}>Ada 8 Tier yang dimulai dari Tier Khuldi hingga Tier Firdaus</Text>
                </View>


                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{
                    paddingHorizontal: 10,
                    marginBottom: 20,
                }}>

                    <MySlideBox img={require('../../assets/c1.png')} label="Khuldi" />
                    <MySlideBox img={require('../../assets/c2.png')} label="Muqamal Amin" />
                    <MySlideBox img={require('../../assets/c3.png')} label="Darul Muqamah" />
                    <MySlideBox img={require('../../assets/c4.png')} label="Darussalam" />
                    <MySlideBox img={require('../../assets/c5.png')} label="Ma'wa" />
                    <MySlideBox img={require('../../assets/c6.png')} label="Na'im" />
                    <MySlideBox img={require('../../assets/c7.png')} label="'Adn" />
                    <MySlideBox img={require('../../assets/c8.png')} label="Firdaus" />
                    <View style={{
                        width: 20,
                    }} />
                </ScrollView>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({})