import React, { Component } from 'react';
import {
AppRegistry,
StyleSheet,
Text,
View,
TextInput,
Button,
FlatList,
} from 'react-native';

export default class MeetupExample extends Component {

constructor(){
	super()
	this.state={
		TodoList:[
			{key:1, text:'Çöpü Çıkar'},
			{key:2, text:'Ders Çalış'},
			{key:3, text:'Kumandayı Bul'},
			{key:4, text:'Televizyonu aç'},
		],
		InsertedText:'Hahah',
	}
}

onClickAddButton(){
	myOldList= this.state.TodoList;
	myOldList.push({key:myOldList.length + 1,text:this.state.InsertedText})
	this.setState({TodoList:myOldList})
}

_todoListItem(entry){
	return(
		<View style={styles.listItemStyle}>
			<Text>{entry.item.text}</Text>
		</View>
	)
}

render() {

	return (
	<View style={styles.container}>
		
		<View style={styles.inputContainer}>
			<View style={styles.buttonContainer}>
				<Button onPress={this.onClickAddButton.bind(this)} title="Ekle" color="blue" />
			</View> 
			<View style={styles.textContainer}>
				<TextInput style={styles.textInputStyle} 
				value={this.state.InsertedText} 
				keyboardType='numeric' 
				placeholder='Isleminizi Girin' 
				onChangeText={(text)=>this.setState({InsertedText:text})}/>
			</View>
		</View>
		
		<View style={styles.listContainer}>
			<FlatList data={this.state.TodoList.reverse()} renderItem={this._todoListItem.bind(this)} />
		</View>
	</View>
	);

}
}


const styles = StyleSheet.create({
container: {
	flex: 1,
},
inputContainer:{
	flexDirection:'row-reverse'
},
textContainer:{
	flex:1,
},
buttonContainer:{
	padding:20,
},
textInputStyle:{
	margin:20

},
listContainer:{
	flex:1,
},
listItemStyle:{
	justifyContent:'center',
	height:50,
	padding:5,
	margin:5,
	borderRadius:5,
	backgroundColor:'gray'
}
});

AppRegistry.registerComponent('MeetupExample', () => MeetupExample);
