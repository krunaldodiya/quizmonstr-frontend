import { Content, Text, View } from "native-base";
import React from "react";
import styles from "./styles";

const ContentBody = props => {
  const { quiz } = props.navigation.state.params;

  return (
    <Content style={styles.termsBody}>
      <Text>time remained: {quiz.time_remained}</Text>
      <Text>created at: {quiz.created_at}</Text>
      <View style={{ marginBottom: 5 }} />
      <Text>participants: {quiz.total_participants}</Text>
      <Text>winners: {quiz.total_winners}</Text>
      <View style={{ marginBottom: 5 }} />
      <Text>questions to be read: {quiz.total_questions}</Text>
      <Text>questions to be asked: {quiz.answerable_questions}</Text>
      <View style={{ marginBottom: 5 }} />
      <Text>hosted by: {quiz.host.name}</Text>
      <View style={{ marginBottom: 5 }} />
      <Text>start preparation - start quiz</Text>
      <Text>join quiz</Text>
      <Text>list of participants</Text>
    </Content>
  );
};

export default ContentBody;
