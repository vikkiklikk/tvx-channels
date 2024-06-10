import { TableCell, TableRow } from "./ui/table";
import { MdEdit, MdDelete } from "react-icons/md";

interface ListTableProps {
  drmValue: string;
  inputValue: string;
  resValue: string;
  epgValue: string;
}

const ListTableRow: React.FC<ListTableProps> = ({
  drmValue,
  inputValue,
  resValue,
  epgValue,
}) => {
  return (
    <TableRow>
      <TableCell>Multicast</TableCell>
      <TableCell>{drmValue}</TableCell>
      <TableCell>Multicast</TableCell>
      <TableCell>H.264</TableCell>
      <TableCell>None</TableCell>
      <TableCell>{inputValue}</TableCell>
      <TableCell>{resValue}</TableCell>
      <TableCell>None</TableCell>
      <TableCell>{epgValue}</TableCell>
      <TableCell className="flex row gap-4">
        <MdEdit className="cursor-pointer hover:scale-110" size="18" />
        <MdDelete
          color="red"
          className="cursor-pointer hover:scale-110"
          size="18"
        />
      </TableCell>
    </TableRow>
  );
};

export default ListTableRow;
