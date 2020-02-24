import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
    const [ term, setTerm ] = useState('');
    const [ searchApi, results, errorMessage ] = useResults();

    const filterResultsByPrice = price => results.filter(result => result.price === price);

    return (
        <View style={styles.background}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results.</Text>
            <ResultsList results={filterResultsByPrice('$')} title="Cost Effective"/>
            <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
            <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
        </View>
    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#fff'
    }
});

export default SearchScreen;