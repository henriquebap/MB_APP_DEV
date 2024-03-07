import {useState, useCallback} from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text} from 'react-native';
    const MyRefreshControl = () => {
        const [isRefreshing, setIsRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setIsRefreshing(true);
        setTimeout(() => {
        setIsRefreshing(false);
        }, 2000);
    }, []);
    return (
    <ScrollView
        refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
    }>
    <Text>Pull down to see RefreshControl indicator</Text>
</ScrollView>
    );
};
export default MyRefreshControl;