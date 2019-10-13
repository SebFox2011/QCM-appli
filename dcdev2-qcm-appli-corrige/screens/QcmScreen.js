import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import AnswerItem from '../components/AnswerItem';
import Icon from '../components/PlatformIcon';
import styles from '../constants/Styles';

class QcmScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    title: 'QCM - ' + navigation.getParam('title')
  });

  constructor(props) {
    super(props);
    this.state = {
      subject: null,
      questionIndex: 0
    };
  }

  componentDidMount() {
    this.fetchSubject();
  }

  fetchSubject() {
    fetch(process.env.API_URL + '/subjects/' + this.props.navigation.getParam('id'))
      .then(response => response.json())
      .then(subject => this.setState({ subject: subject }))
      .catch(err => console.log(err))
    ;
  }

  /**
   * Cette fonction va modifier "subject" dans le state pour ajouter une clé "isChecked"
   * sur la question à l'index "index"
   * @param index Index de la question
   */
  checkAnswer(index) {
    const { subject, questionIndex } = this.state;
    let newSubject = Object.assign({}, subject); // Pour éviter de modifier le state directement (immutability)
    newSubject.questions[questionIndex].answers[index].isChecked = !newSubject.questions[questionIndex].answers[index].isChecked;
    this.setState({ subject: newSubject });
  }

  onFinished() {
    // Calcul du score
    let score = 0;
    for (let question of this.state.subject.questions) {
      let correct = true;
      for (let answer of question.answers) {
        if ((answer.isChecked && !answer.isCorrect) || (!answer.isChecked && answer.isCorrect)) {
          correct = false;
        }
      }
      if (correct) {
        score++;
      }
    }

    this.props.navigation.navigate('QcmResult', { score: score, total:  this.state.subject.questions.length});
  }

  render() {
    const {subject, questionIndex} = this.state;

    if (subject === null) {
      return <Text>Chargement des questions...</Text>
    }

    const question = subject.questions[questionIndex];

    const listAnswers = question.answers.map((answer, index) => <AnswerItem key={index} answer={answer} checked={question.answers[index] ? question.answers[index].isChecked : false} valueChange={() => this.checkAnswer(index)}/>)
    const previous = questionIndex === 0 ? null : (
      <TouchableOpacity onPress={() => this.setState({ questionIndex: questionIndex - 1 })}>
        <Icon name='arrow-dropleft' size={40}/>
      </TouchableOpacity>
    );
    const next = questionIndex === subject.questions.length - 1 ? (
      <TouchableOpacity style={styles.btn} onPress={() => this.onFinished()}>
        <Text>Terminer</Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity style={styles.btn} onPress={() => this.setState({ questionIndex: questionIndex + 1 })}>
        <Text>Valider</Text>
      </TouchableOpacity>
    );

    return (
      <View>
        <Text>Question {questionIndex + 1}</Text>
        <Text>{question.title}</Text>
        {listAnswers}
        <View>
          {previous}
          {next}
        </View>
      </View>
    );
  }
}

export default QcmScreen;
