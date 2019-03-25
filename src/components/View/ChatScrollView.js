import React from "react";
import ChatScroll from "./ChatScroll"
import AutoSizer from "react-virtualized-auto-sizer"
import { View } from "react-native";

export default React.forwardRef((props, ref) =>
  <View style={{ flex: 1 }}>
    <AutoSizer>
      {({ height, width }) =>
        <ChatScroll height={height} width={width} {...props} ref={ref} />
      }
    </AutoSizer>
  </View>
)