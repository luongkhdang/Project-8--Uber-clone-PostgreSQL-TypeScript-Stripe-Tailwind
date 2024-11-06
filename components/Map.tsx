import { View, Text } from "react-native";
import React from "react";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const Map = () => {
  //const region = {};
  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      className="w-full h-full rounded-2xl"
      tintColor="black"
      mapType="mutedStandard"
      showsPointsOfInteraction={false}
      // initialRegion={region}
      showsUsers={true}
      userInterfaceStylle="light"
    >
      <Text>Map</Text>
    </MapView>
  );
};

export default Map;
