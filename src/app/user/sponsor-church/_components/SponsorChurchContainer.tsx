import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const tableHeaderData = ["Tnx ID", "Date", "church Name", "Amount"];

const sponsorData = [
  {
    tnx: "#abc123",
    date: "11 Oct 2024",
    churchName: "Hope Community",
    amount: "50",
  },
  {
    tnx: "#abc124",
    date: "12 Oct 2024",
    churchName: "Faith Assembly",
    amount: "75",
  },
  {
    tnx: "#abc125",
    date: "13 Oct 2024",
    churchName: "Grace Church",
    amount: "100",
  },
  {
    tnx: "#abc126",
    date: "14 Oct 2024",
    churchName: "Joyful Hearts",
    amount: "20",
  },
  {
    tnx: "#abc127",
    date: "15 Oct 2024",
    churchName: "New Beginnings",
    amount: "40",
  },
  {
    tnx: "#abc128",
    date: "16 Oct 2024",
    churchName: "Trinity Fellowship",
    amount: "60",
  },
  {
    tnx: "#abc129",
    date: "17 Oct 2024",
    churchName: "Peace Chapel",
    amount: "80",
  },
  {
    tnx: "#abc130",
    date: "18 Oct 2024",
    churchName: "Community of Hope",
    amount: "30",
  },
  { tnx: "#abc131", date: "19 Oct 2024", churchName: "The Vine", amount: "55" },
  {
    tnx: "#abc132",
    date: "20 Oct 2024",
    churchName: "Living Waters",
    amount: "90",
  },
];

const SponsorChurchContainer = () => {
  return (
    <Table className="bg-gray-50 rounded p-2">
      <TableCaption>A list of your recent sponsor by Kocham.</TableCaption>
      <TableHeader className="bg-primary-color">
        <TableRow className="text-lg">
          {tableHeaderData.map((header) => (
            <TableHead key={header} className="truncate">
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {sponsorData.map((sponsor) => (
          <TableRow
            key={sponsor.tnx}
            className="text-lg font-medium hover:bg-gray-200 duration-500"
          >
            <TableCell className="truncate">{sponsor.tnx}</TableCell>
            <TableCell className="truncate">{sponsor.date}</TableCell>
            <TableCell className="truncate">{sponsor.churchName}</TableCell>
            <TableCell className="truncate">${sponsor.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SponsorChurchContainer;
