import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Picker} from "react-native";
import Icon from '../components/PlatformIcon';
import AnswerFormItem from "../components/AnswerFormItem";
import styles from '../constants/Styles';

const initialState = {
  title: '',
  isValid: false,
  answers: [],
  subjects: [],
  selectedSubject: null
};

class QuestionFormScreen extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    this.loadInitialData();
  }

  loadInitialData() {
    this.addAnswer();
    this.fetchSubjects();
  }

  fetchSubjects() {
    fetch(process.env.API_URL + '/subjects')
      .then(response => response.json())
      .then(subjects => this.setState({ subjects: subjects }))
      .catch(err => console.log(err))
    ;
  }

  addAnswer() {
    this.setState({ answers: [...this.state.answers, { title: '', isCorrect: false }] });
  }

  answerToggle(index) {
    let answers = [...this.state.answers]; // Pour éviter de modifier le state directement (immutability)
    answers[index].isCorrect = !answers[index].isCorrect;
    this.setState({ answers: answers });
  }

  answerTextChange(index, text) {
    let answers = [...this.state.answers]; // Pour éviter de modifier le state directement (immutability)
    answers[index].title = text;
    this.setState({ answers: answers });
  }

  sendQuestion() {
    fetch(process.env.API_URL + '/subjects/' + this.state.selectedSubject._id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        isValid: this.state.isValid,
        answers: this.state.answers
      })
    })
      .then(response => response.json())
      .then(subjects => {
        this.setState(initialState, () => this.loadInitialData());
        this.props.navigation.navigate('QcmStack', { refreshSubjects: true });
      })
      .catch(err => console.log(err))
    ;
  }

  render() {
    const answers = this.state.answers.map((answer, index) => <AnswerFormItem key={index} answer={answer} valueChange={() => this.answerToggle(index)} textChange={text => this.answerTextChange(index, text)}/>);
    const subjects = this.state.subjects.map((subject, index) => <Picker.Item key={index} label={subject.title} value={subject} />);

    return (
      <View style={styles.containerWithPaddingTop}>
        <Picker
          selectedValue={this.state.selectedSubject}
          onValueChange={subject => this.setState({ selectedSubject: subject })}>
          {subjects}
        </Picker>
        <TextInput style={styles.textInput} value={this.state.title} onChangeText={text => this.setState({ title: text })} placeholder='Titre de la question'/>
        {answers}
        <TouchableOpacity style={styles.btn} onPress={() => this.addAnswer()}>
          <Icon name='add-circle-outline'/>
          <Text>Ajouter une réponse</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => this.sendQuestion()}>
          <Icon name='checkmark'/>
          <Text>Proposer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default QuestionFormScreen;
