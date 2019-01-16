import { Button, Text, View } from "native-base";
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
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  lockApp = () => {
    MobileDeviceManager.lockApp();
  };

  unlockApp = () => {
    MobileDeviceManager.unlockApp().then(() => {
      clearInterval(this.interval);
    });
  };

  render() {
    const { isAppLocked } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            padding: 10,
            backgroundColor: isAppLocked ? "salmon" : "whitesmoke",
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
              <Button small rounded bordered primary>
                <Text onPress={() => this.lockApp()}>Lock</Text>
              </Button>
            )}

            {isAppLocked && (
              <Button small rounded bordered primary>
                <Text onPress={() => this.unlockApp()}>Unlock</Text>
              </Button>
            )}
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
