import { type ApiData } from '../../../types/types';
export async function LoadData(): Promise<ApiData> {
  try {
    const url: string = `https://okx.com/api/v5/market/tickers?instType=SPOT`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiData = await response.json();
    console.log('API data loaded successfully:', data);
    return data;
  } catch (error) {
    console.error('Error loading API data:', error);
    throw error;
  }
}
LoadData();
