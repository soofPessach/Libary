export interface Library {
  id: string;
  name: string;
  location: string;
  address: string;
  phone: string;
  establishedYear: number;
  operatingHours: string;
}

export const librariesData: Library[] = [
  {
    id: "lib1",
    name: "Central Library",
    location: "Downtown",
    address: "123 Main Street, City Center",
    phone: "+1-555-0101",
    establishedYear: 1985,
    operatingHours: "9AM - 8PM"
  },
  {
    id: "lib2",
    name: "Westside Library",
    location: "West District",
    address: "456 Oak Avenue, West Side",
    phone: "+1-555-0102",
    establishedYear: 1998,
    operatingHours: "10AM - 7PM"
  },
  {
    id: "lib3",
    name: "Eastside Library",
    location: "East District",
    address: "789 Elm Street, East Side",
    phone: "+1-555-0103",
    establishedYear: 2005,
    operatingHours: "8AM - 9PM"
  },
  {
    id: "lib4",
    name: "North Library",
    location: "North Zone",
    address: "321 Pine Road, North Zone",
    phone: "+1-555-0104",
    establishedYear: 2010,
    operatingHours: "9AM - 6PM"
  },
  {
    id: "lib5",
    name: "South Library",
    location: "South Zone",
    address: "654 Maple Lane, South Zone",
    phone: "+1-555-0105",
    establishedYear: 2015,
    operatingHours: "10AM - 8PM"
  }
];
