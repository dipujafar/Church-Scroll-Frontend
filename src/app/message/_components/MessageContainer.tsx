import { Input } from "@/components/ui/input";

import Image from "next/image";
import { CircleOff, Paperclip, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import userImg from "@/assets/image/user2.png";
import user2Img from "@/assets/image/user1.png";
import user3Img from "@/assets/image/user2.png";
import OwnerMsgCard from "./OwnerMsgCard";
import ReceiverMsgCard from "./ReceiverMsgCard";
import UserCard from "./UserCard";

const MessageContainer = () => {
  return (
    <div className="lg:mx-auto ">
      <div className="relative z-10 flex flex-col rounded-xl rounded-t-xl border-t-8 border-t-primary-orange  px-10 py-8 lg:flex-row">
        {/* left */}
        <div className="border-opacity-[40%] pr-2 lg:w-[30%] lg:border-r-2 lg:border-gray-300">
          <div className="border-t-black flex items-end gap-x-5 border-b border-opacity-[40%] py-4 text-black">
            <h4 className="text-2xl font-bold">Messages</h4>
            <p className="font-kumbh-sans  pb-1 font-semibold">12</p>
          </div>

          <div className="mx-auto mb-10 mt-4 w-[95%]">
            <Input
              placeholder="Search messages"
              className="w-full rounded-xl border  bg-transparent px-2 py-6 "
              type="text"
            />

            {/* users list - TODO: Use dynamic data */}
            <div className="scroll-hide mt-8 max-h-[100vh] space-y-8 overflow-auto">
              {Array.from({ length: 8 }).map((_, idx) => (
                <UserCard
                  key={idx}
                  user={{
                    img: user3Img,
                    name: "Elmer Laverty",
                    latestMsg: "omg, this is amazing 🔥",
                  }}
                  active={idx === 1 ? true : false}
                />
              ))}
            </div>
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col justify-between lg:flex-grow lg:px-8">
          <div className="-t-black flex items-center justify-between border-b border-opacity-[40%] pb-1">
            <div className="flex items-center gap-x-5">
              <div className="w-[22%]">
                <Image
                  src={userImg}
                  alt="user image"
                  className="aspect-square w-full rounded-full"
                />
              </div>

              <div className="lg:flex-grow">
                <h3 className="text-xl font-semibold text-black">
                  Elmer Laverty
                </h3>

                <div className="mt-1 flex items-center gap-x-2">
                  {/* Active/Online Indicator */}
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <p className="text-black border-t-black">Online</p>
                </div>
              </div>
            </div>

            <button className="flex items-center gap-x-2">
              <CircleOff size={20} color="#d55758" />
              <p className="text-xl text-black">Block</p>
            </button>
          </div>

          <div className="max-h-full space-y-8 overflow-hidden pt-8">
            <div className="flex items-start gap-x-4">
              <Image
                src={userImg}
                alt="user's image"
                className="h-[50px] w-[50px] rounded-full"
              />
              <div className="max-w-[50%] space-y-3 overflow-hidden">
                <ReceiverMsgCard message={"omg, this is amazing"} />
                <ReceiverMsgCard message={"Lorem ipsum dolor sit amet"} />
                <ReceiverMsgCard
                  message={
                    "omg, thi perspiciatis consectetur mollitia laboriosam itaque enim officia aut nemo quibusdam?"
                  }
                />
              </div>
            </div>

            <div className="flex flex-row-reverse items-start gap-x-4">
              <Image
                src={user2Img}
                alt="user's image"
                className="h-[50px] w-[50px] rounded-full"
              />
              <div className="flex max-w-[50%] flex-col items-end space-y-3">
                <OwnerMsgCard message={"How are you?"} />
                <OwnerMsgCard
                  message={
                    "Lorem ipsum dolor sit... I'll be there in 2 mins ⏰ "
                  }
                />
              </div>
            </div>

            <div className="flex items-start gap-x-4">
              <Image
                src={userImg}
                alt="user's image"
                className="h-[50px] w-[50px] rounded-full"
              />
              <div className="max-w-[50%] space-y-3">
                <ReceiverMsgCard message={"omg, this is amazing"} />
                <ReceiverMsgCard message={"Lorem ipsum dolor sit amet"} />
                <ReceiverMsgCard
                  message={
                    "omg, thi perspiciatis consectetur mollitia laboriosam itaque enim officia aut nemo quibusdam?"
                  }
                />
              </div>
            </div>

            <div className="flex flex-row-reverse items-start gap-x-4">
              <Image
                src={user2Img}
                alt="user's image"
                className="h-[50px] w-[50px] rounded-full"
              />
              <div className="flex max-w-[50%] flex-col items-end space-y-3">
                <OwnerMsgCard message={"How are you?"} />
                <OwnerMsgCard
                  message={
                    "Lorem ipsum dolor sit... I'll be there in 2 mins ⏰ "
                  }
                />
              </div>
            </div>

            <div className="flex items-start gap-x-4">
              <Image
                src={userImg}
                alt="user's image"
                className="h-[50px] w-[50px] rounded-full"
              />
              <div className="max-w-[50%] space-y-3">
                <ReceiverMsgCard message={"Lorem ipsum dolor sit amet"} />
                <ReceiverMsgCard message={"omg, this is amazing"} />
              </div>
            </div>
          </div>

          <div className="mt-10 flex w-full items-center gap-x-6">
            <Button
              variant="outline"
              type="button"
              className="w-fit h-fit flex flex-col items-center justify-center text-gray-600 hover:text-gray-800 border-none shadow-none bg-transparent p-0 "
            >
              <input type="file" id="fileInput" className="hidden" />
              <label
                htmlFor="fileInput"
                className="cursor-pointer flex flex-col items-center"
              >
                <Paperclip></Paperclip>
              </label>
            </Button>
            <div className="flex w-full items-stretch gap-x-4 relative">
              <Input
                placeholder="Type a message"
                type="text"
                className="w-full border-2 border-black/50 bg-transparent px-4 py-6 rounded-3xl"
              />
              <Send
                size={20}
                color="#d55758"
                className="cursor-pointer absolute right-4 top-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageContainer;
