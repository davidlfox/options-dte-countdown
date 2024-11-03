export interface NewsEvent {
  date: string; // format: 'MM/DD/YYYY'
  title: string;
}

// hard-coded list of news events for now
const newsEvents: NewsEvent[] = [
  { date: '11/5/2024', title: 'Presidential Election' },
  { date: "11/1/2024", title: "Unemployment Rate" },
  { date: "12/6/2024", title: "Unemployment Rate" },
  { date: "1/3/2025", title: "Unemployment Rate" },
  { date: "2/7/2025", title: "Unemployment Rate" },
  { date: "3/7/2025", title: "Unemployment Rate" },
  { date: "4/4/2025", title: "Unemployment Rate" },
  { date: "5/2/2025", title: "Unemployment Rate" },
  { date: "6/6/2025", title: "Unemployment Rate" },
  { date: "7/4/2025", title: "Unemployment Rate" },
  { date: "8/1/2025", title: "Unemployment Rate" },
  { date: "9/5/2025", title: "Unemployment Rate" },
  { date: "10/3/2025", title: "Unemployment Rate" },
  { date: "11/7/2025", title: "Unemployment Rate" },
  { date: "12/5/2025", title: "Unemployment Rate" },
  { date: '11/7/2024', title: 'Federal Interest Rate Decision' },
  { date: '12/18/2024', title: 'Federal Interest Rate Decision*' },
  { date: "1/29/2025", title: "Federal Interest Rate Decision" },
  { date: "3/19/2025", title: "Federal Interest Rate Decision*" },
  { date: "5/7/2025", title: "Federal Interest Rate Decision" },
  { date: "6/18/2025", title: "Federal Interest Rate Decision*" },
  { date: "7/30/2025", title: "Federal Interest Rate Decision" },
  { date: "9/17/2025", title: "Federal Interest Rate Decision*" },
  { date: "10/29/2025", title: "Federal Interest Rate Decision" },
  { date: "12/10/2025", title: "Federal Interest Rate Decision*" },
  { date: "11/13/2024", title: "Consumer Price Index" },
  { date: "12/11/2024", title: "Consumer Price Index" },
  { date: "1/15/2025", title: "Consumer Price Index" },
  { date: "2/12/2025", title: "Consumer Price Index" },
  { date: "3/12/2025", title: "Consumer Price Index" },
  { date: "4/10/2025", title: "Consumer Price Index" },
  { date: "5/13/2025", title: "Consumer Price Index" },
  { date: "6/11/2025", title: "Consumer Price Index" },
  { date: "7/15/2025", title: "Consumer Price Index" },
  { date: "8/12/2025", title: "Consumer Price Index" },
  { date: "9/11/2025", title: "Consumer Price Index" },
  { date: "10/15/2025", title: "Consumer Price Index" },
  { date: "11/13/2025", title: "Consumer Price Index" },
  { date: "12/10/2025", title: "Consumer Price Index" },
  // add more events as needed
];

export const fetchNewsEvents = (): NewsEvent[] => {
  return newsEvents;
};
