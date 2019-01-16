import { Text, View, Button } from "native-base";
import React from "react";
import { NativeModules } from "react-native";

const { MobileDeviceManager } = NativeModules;

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAppLocked: false
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      MobileDeviceManager.isAppLocked().then(isAppLocked => {
        this.setState({ isAppLocked });
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    MobileDeviceManager.unlockApp();
  }

  render() {
    const { isAppLocked } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            padding: 10,
            backgroundColor: "whitesmoke",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <View style={{ margin: 5, justifyContent: "center" }}>
            {!isAppLocked && <Text>Screen is UNLOCKED</Text>}
            {isAppLocked && <Text>Screen is LOCKED</Text>}
          </View>

          <View style={{ margin: 5 }}>
            {!isAppLocked && (
              <Button small rounded bordered danger>
                <Text
                  onPress={() => {
                    MobileDeviceManager.lockApp();
                  }}
                >
                  Lock
                </Text>
              </Button>
            )}

            {isAppLocked && (
              <Button small rounded bordered success>
                <Text
                  onPress={() => {
                    MobileDeviceManager.unlockApp();
                  }}
                >
                  Unlock
                </Text>
              </Button>
            )}
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
