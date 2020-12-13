import React from 'react';
import{View,Text, TextInput, TouchableOpacity} from 'react-native';
import{Header} from 'react-native-gesture-handler'
import db from '../config'
import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super()
        this.state={
            Title:'',
            Author:'',
            Story:'',
        }
    }
    submitStory = () => {
        db.collection("stories").add({
            title:this.state.Title,
            author:this.state.Author,
            Story:this.state.Story
        })
        this.setState({
            Title:'',
            Author:'',
            Story:'',
        })
    }
    render(){
        return(
            <View style={{ flex:1, jusgtifyContent:'Center', alignItems:'center'}}>
                <Text>Title of the Story</Text>
                <Text>Author of the story</Text>
                <Text>Write story - this will be multiple line input Text so add props multiline: {true}.</Text>
                <TextInput
                style = {styles.InputBox}
                placeholder = "Title"
                value = {this.state.title}/>

                <TextInput
                style = {styles.InputBox}
                placeholder = "Author"
                value = {this.state.Author}/>

                <TextInput
                style = {styles.inputBox}
                placeholder = "Story"
                value = {this.state.Story}/>

                <TouchableOpacity
                style={styles.submitButton}
                onPress={this.submitStory}>

                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                

                 </View>
        )
    }
}
