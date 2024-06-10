import React, { useState } from "react";

import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import ListTableRow from "./ListTableRow";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const TemplateContainer = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [submittedData, setSubmittedData] = useState<
    Array<{ input: string; drm: string; res: string }>
  >([]);
  const [drmValue, setDrmValue] = useState<string>("");
  const [resValue, setResValue] = useState<string>("");

  const drmHandleSelect = (value: string) => {
    setDrmValue(value);
  };

  const resHandleSelect = (value: string) => {
    setResValue(value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setSubmittedData((prevData) => [
      ...prevData,
      { input: inputValue, drm: drmValue, res: resValue },
    ]);
    setInputValue("");
    setDrmValue("");
  };
  const [listItem, setListItem] = useState<string[]>([]);

  const handleButtonClick = (text: string) => {
    setListItem([...listItem, text]);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center gap-5 mt-10 mb-10">
        <Dialog>
          <DialogTrigger>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Multicast</CardTitle>
                <CardDescription>Configuration</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-start">
                <p>
                  <strong>DRM:</strong> VMX/Clear
                </p>
                <p>
                  <strong>Pökkun:</strong> multicast
                </p>
                <p>
                  <strong>Media Type:</strong> H.264
                </p>
                <p>
                  <strong>Location:</strong> 0.0.0.0.0
                </p>
                <p>
                  <strong>Resolution:</strong> SD/HD
                </p>
                <p>
                  <strong>epgID:</strong> e.g. 1234
                </p>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Multicast</DialogTitle>
              <DialogDescription>
                <p className="pb-5">
                  Configure your settings and press apply to save
                </p>
                <div className="flex flex-col gap-2 w-[16rem]">
                  <Select onValueChange={drmHandleSelect}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="DRM vendor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="VMX">VMX</SelectItem>
                      <SelectItem value="Clear">Clear</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input disabled type="text" placeholder="Pökkun: Multicast" />
                  <Input disabled type="text" placeholder="Media Type: H.264" />
                  <Input
                    type="string"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Location e.g. 100.00.00.100:5000"
                    required
                  />
                  <Select onValueChange={resHandleSelect}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Resolution" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SD">SD</SelectItem>
                      <SelectItem value="HD">HD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>
                <Button onClick={handleSubmit} className="bg-[#00AEF3]">
                  Apply settings to channel
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <Card>
              <CardHeader>
                <CardTitle>H.265 OTT</CardTitle>
                <CardDescription>Configuration</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-start">
                <p>
                  <strong>DRM:</strong> VMX/Clear
                </p>
                <p>
                  <strong>Pökkun:</strong> HLS
                </p>
                <p>
                  <strong>Media Type:</strong> H.265
                </p>
                <p>
                  <strong>Ticket Type:</strong> HLS_CHANNEL
                </p>
                <p>
                  <strong>Location:</strong> 0.0.0.0.0
                </p>
                <p>
                  <strong>Resolution:</strong> SD/HD
                </p>
                <p>
                  <strong>epgID:</strong> e.g. 1234
                </p>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>H.265 OTT</DialogTitle>
              <DialogDescription>
                <p className="pb-5">
                  Configure your settings and press apply to save
                </p>
                <div className="flex flex-col gap-2 w-[16rem]">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="DRM vendor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vmx">VMX</SelectItem>
                      <SelectItem value="clear">Clear</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input disabled type="text" placeholder="Pökkun: HLS" />
                  <Input disabled type="text" placeholder="Media Type: H.265" />
                  <Input
                    disabled
                    type="text"
                    placeholder="Ticket Type: HLS_CHANNEL"
                  />
                  <Input
                    type="string"
                    placeholder="Location e.g. 100.00.00.100:5000"
                  />
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Resolution" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sd">SD</SelectItem>
                      <SelectItem value="hd">HD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>
                <Button
                  onClick={() =>
                    handleButtonClick("Template 2 Setting List Item")
                  }
                  className="bg-[#00AEF3]"
                >
                  Apply settings to channel
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <Card>
              <CardHeader>
                <CardTitle>H.264 OTT</CardTitle>
                <CardDescription>Configuration</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-start">
                <p>
                  <strong>DRM:</strong> VMX, WV, CPIX, FP
                </p>
                <p>
                  <strong>Pökkun:</strong> HLS/Dash
                </p>
                <p>
                  <strong>Media Type:</strong> H.264
                </p>
                <p>
                  <strong>Ticket Type:</strong> H.264
                </p>
                <p>
                  <strong>Location:</strong> 0.0.0.0.0
                </p>
                <p>
                  <strong>Resolution:</strong> SD/HD
                </p>
                <p>
                  <strong>epgID:</strong> e.g. 1234
                </p>
                <p>
                  <strong>DRM Content ID:</strong> sjosim264
                </p>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>H.264 OTT</DialogTitle>
              <DialogDescription>
                <p className="pb-5">
                  Configure your settings and press apply to save
                </p>
                <div className="flex flex-col gap-2 w-[16rem]">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="DRM vendor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vmx">VMX</SelectItem>
                      <SelectItem value="cpix">CPIX</SelectItem>
                      <SelectItem value="widevine">WV</SelectItem>
                      <SelectItem value="fp">FP</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Pökkun" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hls">HLS</SelectItem>
                      <SelectItem value="dash">Dash</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input disabled type="text" placeholder="Media Type: H.264" />
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Ticket Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="LIVE_H264_DASH_WV">
                        LIVE_H264_DASH_WV
                      </SelectItem>
                      <SelectItem value="HLS_CHANNEL">HLS_CHANNEL</SelectItem>
                      <SelectItem value="LIVE_H264_HLS_FP">
                        LIVE_H264_HLS_FP
                      </SelectItem>
                      <SelectItem value="LIVE_H264_DASH_WV">
                        LIVE_H264_DASH_WV
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    type="string"
                    placeholder="Location e.g. 100.00.00.100:5000"
                  />
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Resolution" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sd">SD</SelectItem>
                      <SelectItem value="hd">HD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>
                <Button
                  onClick={() =>
                    handleButtonClick("Template 3 Setting List Item")
                  }
                  className="bg-[#00AEF3]"
                >
                  Apply settings to channel
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-col justify-center relative">
        {submittedData.length > 0 && (
          <Table className="bg-white">
            <TableCaption>List of configurations.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Template</TableHead>
                <TableHead>DRM</TableHead>
                <TableHead>Pökkun</TableHead>
                <TableHead>Media Type</TableHead>
                <TableHead>Ticket Type</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Resolution</TableHead>
                <TableHead>DRM ID</TableHead>
                <TableHead>epgID</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submittedData.map((data, index) => (
                <div key={index}>
                  <ListTableRow
                    drmValue={data.drm}
                    inputValue={data.input}
                    resValue={data.res}
                  />
                </div>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default TemplateContainer;
