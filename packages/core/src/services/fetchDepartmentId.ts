import { authenticateSilently } from "./auth";

export async function fetchDepartmentId(scopes: string[]) {

    try {
      const auth = await authenticateSilently(scopes);
      const response = await fetch(
        'https://graph.microsoft.com/v1.0/me?$select=onPremisesExtensionAttributes',
        {
          headers: {
            Authorization: `Bearer ${auth?.accessToken}`,
          },
        }
      );
      const data = await response.json();
      const attribute = data.onPremisesExtensionAttributes.extensionAttribute8;
      const number = attribute.split(':')[2];
      return number;
    } catch (error) {
      console.error('Error fetching the number:', error);
    }
}