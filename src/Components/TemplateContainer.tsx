import { useState } from "react";

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

const TemplateContainer = () => {
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
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="DRM vendor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vmx">VMX</SelectItem>
                      <SelectItem value="clear">Clear</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input disabled type="text" placeholder="Pökkun: Multicast" />
                  <Input disabled type="text" placeholder="Media Type: H.264" />
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
                    handleButtonClick("Template 1 Setting List Item")
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
      <div className="flex flex-col justify-center items-center gap-2">
        {listItem.map((listItem, index) => (
          <div className="text-lg bg-white p-2 border-solid border-2 rounded-lg hover:bg-[#00AEF3]/[.2]">
            <p key={index}>{listItem}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateContainer;
