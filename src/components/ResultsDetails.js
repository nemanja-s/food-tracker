import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ResultsDetails = ({ result }) => {
    const { image_url, rating, review_count } = result;
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{rating} Stars, {review_count} Reviews</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 125,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'
    }
});

export default ResultsDetails;