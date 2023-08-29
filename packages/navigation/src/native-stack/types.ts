import type {ParamListBase, StackNavigationState, StackRouterOptions, DefaultNavigatorOptions} from '@react-navigation/native';
import type {NativeStackNavigationOptions, NativeStackNavigationEventMap } from '@react-navigation/native-stack'

export type NativeStackNavigatorProps = DefaultNavigatorOptions<
  ParamListBase,
  StackNavigationState<ParamListBase>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap
> &
  StackRouterOptions &
  NativeStackNavigationConfig;

// eslint-disable-next-line @typescript-eslint/ban-types -- those fuckers don't export this useless type. If they export it in the future, please import it from native-stack and remove it from here. Yes it is intended to be empty. https://github.com/react-navigation/react-navigation/blob/main/packages/native-stack/src/types.tsx
export type NativeStackNavigationConfig = {};
