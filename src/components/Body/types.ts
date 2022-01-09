export interface DataFeedProps {
  data: {
    id: number;
    day: string;
    user: string;
    year: string;
    name: string;
    month: string;
    nation: string;
    feedImages: [];
    location: string;
  }[];
}