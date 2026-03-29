import { Tabs } from "expo-router";

const TableLayout = () => (
  <Tabs screenOptions={{ headerShown: false }}>
    <Tabs.Screen name="index" options={{ title: "Home" }} />
    <Tabs.Screen name="subscriptions" options={{ title: "Subscriptions" }} />
    <Tabs.Screen name="insights" options={{ title: "Insights" }} />
    <Tabs.Screen name="settings" options={{ title: "Settings" }} />
  </Tabs>
);

export default TableLayout;
