/* eslint-disable @typescript-eslint/no-unused-vars -- This file is a mock implementation for use on web and the props are therefore unused */

import { OCRCameraProps } from "./OCRCamera";

// Prevents the react-native-vision-camera package from crashing on web
export const OCRCamera = ({ circleOnClick, onSelectTag, onClose }: OCRCameraProps) => null;
