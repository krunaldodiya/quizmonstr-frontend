import {
  Content,
  Text,
  View,
  List,
  ListItem,
  Left,
  Body,
  Thumbnail,
  Separator,
  Button
} from "native-base";
import React from "react";
import styles from "./styles";
import theme from "../../libs/theme";

const ContentBody = props => {
  const { quiz } = props.navigation.state.params;

  return (
    <Content style={styles.termsBody}>
      <List>
        <ListItem avatar>
          <Left>
            <Thumbnail
              source={{
                uri:
                  "https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png"
              }}
            />
          </Left>
          <Body>
            <Text
              style={{
                fontSize: 16,
                color: "#000",
                fontFamily: theme.fonts.TitilliumWebSemiBold
              }}
            >
              {quiz.host.name}
            </Text>
            <Text
              note
              style={{
                marginTop: 2,
                fontSize: 12,
                color: "gray",
                fontFamily: theme.fonts.TitilliumWebRegular
              }}
            >
              {quiz.created_at}
            </Text>
            <Text
              note
              style={{
                marginTop: 5,
                fontSize: 14,
                color: "green",
                fontFamily: theme.fonts.TitilliumWebRegular
              }}
            >
              Host Quiz & Earn Points
            </Text>
          </Body>
        </ListItem>
      </List>

      <Separator bordered>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text
              style={{
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 14,
                color: "gray"
              }}
            >
              Time Remained
            </Text>
          </View>
        </View>
      </Separator>

      <ListItem>
        <Text
          style={{ fontFamily: theme.fonts.TitilliumWebRegular, fontSize: 14 }}
        >
          {quiz.time_remained}
        </Text>
      </ListItem>

      <Separator bordered>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text
              style={{
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 14,
                color: "gray"
              }}
            >
              Category
            </Text>
          </View>
        </View>
      </Separator>

      <ListItem>
        <Text
          style={{ fontFamily: theme.fonts.TitilliumWebRegular, fontSize: 14 }}
        >
          {quiz.category.name}
        </Text>
      </ListItem>

      <Separator bordered>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text
              style={{
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 14,
                color: "gray"
              }}
            >
              Questions
            </Text>
          </View>
          <View style={{ marginRight: 20 }}>
            <Text
              style={{
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 14,
                color: "green"
              }}
            >
              List of Questions
            </Text>
          </View>
        </View>
      </Separator>

      <ListItem>
        <Text
          style={{ fontFamily: theme.fonts.TitilliumWebRegular, fontSize: 14 }}
        >
          <Text
            style={{
              fontFamily: theme.fonts.TitilliumWebSemiBold,
              fontSize: 14
            }}
          >
            {quiz.answerable_questions}
          </Text>{" "}
          questions out of{" "}
          <Text
            style={{
              fontFamily: theme.fonts.TitilliumWebSemiBold,
              fontSize: 14
            }}
          >
            {quiz.total_questions}
          </Text>{" "}
          questions will be asked.
        </Text>
      </ListItem>

      <Separator bordered>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text
              style={{
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 14,
                color: "gray"
              }}
            >
              Winners
            </Text>
          </View>
          <View style={{ marginRight: 20 }}>
            <Text
              style={{
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 14,
                color: "green"
              }}
            >
              List of Participants
            </Text>
          </View>
        </View>
      </Separator>

      <ListItem>
        <Text
          style={{ fontFamily: theme.fonts.TitilliumWebRegular, fontSize: 14 }}
        >
          <Text
            style={{
              fontFamily: theme.fonts.TitilliumWebSemiBold,
              fontSize: 14
            }}
          >
            {quiz.total_winners}
          </Text>{" "}
          winners will be selected out of{" "}
          <Text
            style={{
              fontFamily: theme.fonts.TitilliumWebSemiBold,
              fontSize: 14
            }}
          >
            {quiz.total_participants}
          </Text>{" "}
          participants based on accuracy and timing.
        </Text>
      </ListItem>

      <View style={{ alignSelf: "center", marginTop: 20 }}>
        <Button small rounded>
          <Text>JOIN QUIZ</Text>
        </Button>
      </View>
    </Content>
  );
};

export default ContentBody;
