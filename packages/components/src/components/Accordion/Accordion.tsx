import React, { useMemo, createContext } from "react";
import { View, ViewProps } from "react-native";

export type AccordionContextType = {
	/**
	 * Indicates that the contexed item is the first item in the Accordion
	 */
	isFirstItem: boolean;
	/**
	 * Indicates that the contexed item is the last item in the Accordion
	 */
	isLastItem: boolean;
};

export const AccordionContext = createContext<AccordionContextType>({
	isFirstItem: true,
	isLastItem: true,
});

export type AccordionProps = {};

export const Accordion = ({ children, ...rest }: AccordionProps & ViewProps) => {
	const validChildrenIndexes = useMemo(() => {
		const validChildren = React.Children.toArray(children).filter(child =>
			React.isValidElement(child),
		);
		return validChildren.map((_, index) => index);
	}, [children]);
	return (
		<View {...rest}>
			{React.Children.map(children, (child, index) => (
				<AccordionContext.Provider
					value={{
						isFirstItem: index === validChildrenIndexes.at(0),
						isLastItem: index === validChildrenIndexes.at(-1),
					}}
				>
					{child}
				</AccordionContext.Provider>
			))}
		</View>
	);
};
