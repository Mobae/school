import * as React from "react";
import { FAB, Portal, Provider } from "react-native-paper";

const AttendancePage = () => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? "plus" : "plus"}
          actions={[
            {
              icon: "account-plus",
              label: "Add",
              onPress: () => console.log("Pressed add"),
            },
            {
              icon: "account-edit",
              label: "Edit",
              onPress: () => console.log("Pressed edit"),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  );
};

export default AttendancePage;
