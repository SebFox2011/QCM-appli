import React, {Component} from 'react';
import {View, FlatList} from "react-native";
import styles from "../constants/Styles";
import SubjectItem from "../components/SubjectItem";

class QcmListScreen extends Component {

  static navigationOptions = {
    title: 'QCM',
  };

  constructor(props) {
    super(props);
    this.state = {
      subjects: []
    };
  }

  componentDidMount() {
    this.fetchSubjects();
    this.props.navigation.addListener('didFocus', payload => {
      if (payload.action.params && payload.action.params.refreshSubjects) {
        this.fetchSubjects();
      }
    });
  }

  fetchSubjects() {
    fetch(process.env.API_URL + '/subjects')
      .then(response => response.json())
      .then(subjects => this.setState({ subjects: subjects }))
      .catch(err => console.log(err))
    ;
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.subjects}
          renderItem={({ item }) => <SubjectItem subject={item} onPress={() => this.props.navigation.navigate('Qcm', { id: item._id, title: item.title })} />}
          keyExtractor={item => item._id}
          style={styles.flatList}
        />
      </View>
    );
  }
}

export default QcmListScreen;
