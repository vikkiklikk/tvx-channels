import ListTableRow from "./ListTableRow";
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
      <TableBody></TableBody>
    </Table>
  );
};

export default ListTable;
