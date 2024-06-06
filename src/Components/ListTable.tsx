import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const ListTable = () => {
  return (
    <Table className="bg-white">
      <TableCaption className="mb-2">List of configurations.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Template</TableHead>
          <TableHead>DRM</TableHead>
          <TableHead>Pökkun</TableHead>
          <TableHead>Media Type</TableHead>
          <TableHead>Ticket Type</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Resolution</TableHead>
          <TableHead className="text-right">DRM ID</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Multicast</TableCell>
          <TableCell>DRM</TableCell>
          <TableCell>Multicast</TableCell>
          <TableCell>H.264</TableCell>
          <TableCell>None</TableCell>
          <TableCell>256.10.1.300:3000</TableCell>
          <TableCell>HD</TableCell>
          <TableCell className="text-right">None</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ListTable;
