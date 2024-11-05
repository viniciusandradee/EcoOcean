import React from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';

import styles from '@/Styles/VolunteerStyle/rankStyles';
import globalStyles from '@/Styles/variables';

const Rank = ({ navigation }: any) => {
    const rankings = [
        { username: 'Vinicius', points: 50000 },
        { username: 'Leonardo', points: 20000 },
        { username: 'Marco', points: 10000 },
        { username: 'Samara', points: 5000 },
        { username: 'Vinicius', points: 3000 },
    ];

    return (
        <ImageBackground
            source={require('../../../assets/Images/Backgrounds/HomeBackground.png')}
            style={globalStyles.backgroudImage}
        >
            <ScrollView contentContainerStyle={styles.container}>

                <View style={styles.header}>
                    <Image source={require("../../../assets/Images/Logo.png")} style={styles.logo} />
                </View>
                <View style={styles.rankInfo}>
                    <Image source={require("../../../assets/Images/Trophy.png")} style={styles.trophyIcon} />
                    <Text style={styles.title}>Ranking</Text>
                </View>
                {rankings.map((rank, index) => (
                    <View key={index} style={styles.rankContainer}>
                        <Image source={require('../../../assets/Images/ProfilePic.png')} style={styles.profilePic} />
                        <Text style={styles.username}>{rank.username}</Text>
                        <View style={styles.pointsContainer}>
                            <Image source={require('../../../assets/Images/PointsIcon.png')} style={styles.pointsIcon} />
                            <Text style={styles.points}>{rank.points}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </ImageBackground>
    );
};

export default Rank;
