import { render, RenderOptions } from "@testing-library/react-native";
import { ReactElement } from "react";
import { EDSProvider } from "./src/components/EDSProvider/EDSProvider";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <EDSProvider colorScheme="light" density="phone">
            {children}
        </EDSProvider>
    );
};

export const renderWithTheme = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
    render(ui, { wrapper: AllTheProviders, ...options });
