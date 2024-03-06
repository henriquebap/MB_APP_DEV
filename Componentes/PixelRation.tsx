import { PixelRatio, Image, ScrollView, Text, View, StyleSheet } from "react-native";

const size = 20;

const cat = {
    uri: 'https://ractnative.dev/docs/assets/p_cat1.png',
    width: size,
    height: size
};

const MYPixelRatio = () => {
    return (
        <ScrollView>
            <Text>
                Current pixel ration is: {PixelRatio.get()}
            </Text>
            <Text>Current font scale is: {PixelRatio.getFontScale()}</Text>
            <View>
                <Text>
                    On this device imagens with a layout of width of {PixelRatio.getPixelSizeForLayoutSize(size)}
                </Text>
                <Image source={cat} style={{
                    width: PixelRatio.getPixelSizeForLayoutSize(size),
                    height: PixelRatio.getPixelSizeForLayoutSize(size),
                    }}/>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
    justifyContent: 'center',
    alignItems: 'center',
    },
    });
    export default PixelRatio;