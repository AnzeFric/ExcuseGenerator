import Ionicons from "@expo/vector-icons/build/Ionicons";

export type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

export interface Excuse {
  title: string;
  icon: IoniconName;
  isFree: boolean;
  excuses: Array<string>;
}
