import { Button, Text, View } from "native-base";
import React from "react";
import { Alert, NativeModules } from "react-native";
import { calculateDistance } from "../../libs/calculator";

const { MobileDeviceManager } = NativeModules;

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAppLocked: false,
      current_latitude: 23.0248071,
      current_longitude: 72.6164094
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

  checkLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          const { latitude, longitude } = coords;
          const { current_latitude, current_longitude } = this.state;

          const distance = calculateDistance(
            current_latitude,
            current_longitude,
            latitude,
            longitude
          );

          const meter = distance * 1000;
          if (meter <= 100) {
            resolve(true);
          } else {
            reject("You must be inside campus.");
          }
        },
        () => {
          reject("Invalid Location.");
        },
        {
          enableHighAccuracy: true
        }
      );
    });
  };

  lockApp = () => {
    this.checkLocation()
      .then(() => {
        MobileDeviceManager.lockApp();
      })
      .catch(error => {
        Alert.alert("Error", error);
      });
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
