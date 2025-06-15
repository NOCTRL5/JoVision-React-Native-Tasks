import {FlatList, View, StyleSheet} from "react-native";
import Task28Comp  from '../Components/Task28Comp';

export default function Task28() {
    const images_list = [
        require('../Resources/0.jpg'),
        require('../Resources/1.jpg'),
        require('../Resources/2.jpg'),
        require('../Resources/3.png'),
        require('../Resources/4.jpg'),
        require('../Resources/5.jpg'),
        require('../Resources/6.jpg'),
        require('../Resources/7.jpg'),
        require('../Resources/8.jpg'),
        require('../Resources/9.jpg'),
        require('../Resources/10.jpg'),
        require('../Resources/11.gif')
    ]
    
    function renderer({ item, index }) {
        return <Task28Comp
            path={item}
            idx={index}
        />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={images_list}
                renderItem={renderer}
                keyExtractor={(_, index) => index.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 20,
    },
    listContent: {
      paddingHorizontal: 10,
    },
  });