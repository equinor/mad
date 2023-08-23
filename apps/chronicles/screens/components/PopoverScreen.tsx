/* eslint-disable react/no-unescaped-entities */
import {
	Button,
	EDSStyleSheet,
	Popover,
	Spacer,
	Typography,
	useStyles,
} from "@equinor/mad-components";
import { useRef, useState } from "react";
import { ScrollView, View } from "react-native";

export const PopoverScreen = () => {
	const buttonRef = useRef<View>(null);
	const [open, setOpen] = useState(false);
	const style = useStyles(themeStyles);
	return (
		<ScrollView
			contentInsetAdjustmentBehavior="automatic"
			contentContainerStyle={style.contentContainer}
		>
			<Typography>
				The popover component displays modally on top of your content and positions itself
				automatically based on constraints around the anchor element so you won't have to
				worry about it being positioned badly.
			</Typography>
			<Spacer amount="large" />
			<Button
				title="Trigger popover"
				ref={buttonRef}
				onPress={() => {
					setOpen(!open);
				}}
			/>
			<Popover
				open={open}
				anchorEl={buttonRef}
				onClose={() => setOpen(false)}
				placement="top"
			>
				<Typography>This is a popover</Typography>
			</Popover>
		</ScrollView>
	);
};

const themeStyles = EDSStyleSheet.create(theme => ({
	contentContainer: {
		paddingHorizontal: theme.spacing.container.paddingHorizontal,
		paddingVertical: theme.spacing.container.paddingVertical,
	},
}));
