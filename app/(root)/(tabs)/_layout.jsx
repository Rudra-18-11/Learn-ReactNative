
import { NativeTabs } from 'expo-router/native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs >
      {/* Home Tab */}
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>
          Home
        </NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf="house.fill"
          md="home"
        />
      </NativeTabs.Trigger>

      {/* Search Tab */}
      <NativeTabs.Trigger name="search">
        <NativeTabs.Trigger.Icon
          sf="magnifyingglass"
          md="search"
        />
        <NativeTabs.Trigger.Label>
          Search
        </NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      {/* Saved Tab */}
      <NativeTabs.Trigger name="saved">
        <NativeTabs.Trigger.Icon
          sf="heart.fill"
          md="favorite"
        />
        <NativeTabs.Trigger.Label>
          Saved
        </NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      {/* Profile Tab */}
      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Icon
          sf="person"
          md="person"
        />
        <NativeTabs.Trigger.Label>
          Profile
        </NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
