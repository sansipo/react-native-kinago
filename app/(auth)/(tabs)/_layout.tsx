import { Tabs } from "expo-router";

const TableLayout = () => (
  <Tabs screenOptions={{ headerShown: false }}>
    <Tabs.Screen name="index" options={{ title: "Home" }} />
  </Tabs>
);

export default TableLayout;
