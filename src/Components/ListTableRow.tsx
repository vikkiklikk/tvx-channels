import { TableCell, TableRow } from "./ui/table";

interface ListTableProps {
  drmValue: string;
  inputValue: string;
}

const ListTableRow: React.FC<ListTableProps> = ({ drmValue, inputValue }) => {
  return (
    <TableRow>
      <TableCell>Multicast</TableCell>
      <TableCell>{drmValue}</TableCell>
      <TableCell>Multicast</TableCell>
      <TableCell>H.264</TableCell>
      <TableCell>None</TableCell>
      <TableCell>{inputValue}</TableCell>
      <TableCell>HD</TableCell>
      <TableCell>None</TableCell>
    </TableRow>
  );
};

export default ListTableRow;
