declare namespace I {
  export interface Character {
    id: number;
    name: string;
    thumbnail: { path: string; extension: string };
    series: {
      items: { name: string }[];
    };
    events: {
      items: { name: string }[];
    };
  }
}
