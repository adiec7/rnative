import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar} from 'react-native';

const isAndroid = Platform.OS == 'android';
export default function App() {
  return (
    <>
    <SafeAreaView style={{flex: 1}}>
    <View style={{padding: 16, backgroundColor: 'green',marginTop: StatusBar.currentHeight}}>
      <Text>Search</Text>
    </View>
    <View style= {{flex: 1,padding:16, backgroundColor: 'aqua'}}>
      <Text>List</Text>
    </View >
    </SafeAreaView>
    <ExpoStatusBar style='auto'></ExpoStatusBar>
    </>
  );
}

const styles = StyleSheet.create({
 
});
