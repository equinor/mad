import { useDynamicImport } from "docusaurus-plugin-react-docgen-typescript/dist/esm/hooks";

type ComponentPropsTableProps = {
    componentName: string;
};

export const ComponentPropsTable = ({ componentName }: ComponentPropsTableProps) => {
    const props = useDynamicImport(componentName);
    if (!props) return null;

    return (
        <table style={{ width: "100%" }}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default Value</th>
                    <th>Required</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(props).map(key => {
                    return (
                        <tr
                            key={key}
                            style={{ height: 100, overflow: "hidden", textOverflow: "ellipsis" }}
                        >
                            <td>
                                <code>{key}</code>
                            </td>
                            <td style={{ width: "20%" }}>
                                <p>{props[key].type?.name}</p>
                            </td>
                            <td>
                                {props[key].defaultValue && (
                                    <code>{props[key].defaultValue.value}</code>
                                )}
                            </td>
                            <td>{props[key].required ? "Yes" : "No"}</td>
                            <td>{props[key].description}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
