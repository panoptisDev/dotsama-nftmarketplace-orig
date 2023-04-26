"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import { ArrowUpTrayIcon, XMarkIcon } from "@heroicons/react/24/solid";
import preview from "../../../public/assets/images/create/preview.png";
import Script from "next/script";

const Dropzone = ({ className }: any) => {
  const [files, setFiles] = useState<any[]>([]);
  const [rejected, setRejected] = useState<any[]>([]);
  const [liked, isLiked] = useState<boolean>(false);

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      if (acceptedFiles?.length) {
        setFiles((previousFiles) => [
          ...previousFiles,
          ...acceptedFiles.map((file) =>
            Object.assign(file, { preview: URL.createObjectURL(file) })
          ),
        ]);
      }

      if (rejectedFiles?.length) {
        setRejected((previousFiles) => [...previousFiles, ...rejectedFiles]);
      }
    },
    []
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxSize: 1024 * 1000,
    onDrop,
  });

  useEffect(() => {
    // Revoke the data uris to avoid memory leaks
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const removeFile = (name: string) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  const removeAll = () => {
    setFiles([]);
    setRejected([]);
  };

  const removeRejected = (name: string) => {
    setRejected((files) => files.filter(({ file }) => file.name !== name));
  };

  return (
    <>
      <Script src="https://kit.fontawesome.com/aa92af4b25.js" />
      <div className="flex flex-col md:flex-row gap-x-14">
        <div className="flex justify-center">
          <div
            {...getRootProps({
              className: className,
            })}
          >
            <h2 className="text-base text-black dark:text-white font-semibold mb-4">
              Upload File
            </h2>
            <input {...getInputProps()} />
            <div className="flex flex-col items-center gap-4  w-[80vw] xl:w-[50vw] justify-center border-2 rounded-xl border-dashed border-black dark:border-white h-[100%]">
              <ArrowUpTrayIcon className="w-5 h-5 fill-current" />
              {isDragActive ? (
                <p className="text-center">
                  PNG, JPG, GIF, WEBP or MP4. Max 100MB.
                </p>
              ) : (
                <p className="text-center">
                  PNG, JPG, GIF, WEBP or MP4. Max 100MB.
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          {files.length > 0 ? (
            <section className="mt-10">
              <h2 className="text-base text-center md:text-left text-black dark:text-white font-semibold mb-4">
                Preview NFT
              </h2>

              <ul className="grid grid-cols-1 ">
                {files.map((file) => (
                  <li
                    key={file.name}
                    className="relative aspect-auto w-56 rounded-2xl border-2 border-black dark:border-white"
                  >
                    <div className="p-4">
                      <Image
                        src={file.preview}
                        alt={file.name}
                        onLoad={() => {
                          URL.revokeObjectURL(file.preview);
                        }}
                        className="h-full w-96  object-contain rounded-md"
                      />
                      <div>
                        <div className="my-2">
                          <p className=" text-neutral-500 text-[14px] font-medium text-left">
                            Pink Ocean
                          </p>
                          <p className=" text-neutral-500 text-[14px] font-medium text-left">
                            0.08 ETH 1/20
                          </p>
                        </div>
                        <div className="flex justify-between items-center">
                          {" "}
                          <span className="text-purple-500 text-xs font-medium text-left">
                            Pinky Ocean
                          </span>
                          <span className="">
                            <div className="flex flex-row gap-x-2 justify-center items-center">
                              <span className="text-xs">21</span>
                              <span>
                                <i
                                  className={
                                    liked
                                      ? "fa-solid fa-heart cursor-pointer text-red-600"
                                      : "fa-regular fa-heart cursor-pointer"
                                  }
                                  onClick={() => isLiked(!liked)}
                                ></i>
                              </span>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* <button
                  type="button"
                  className="w-7 h-7 border border-secondary-400 bg-secondary-400 rounded-full flex justify-center items-center absolute -top-3 right-3 md:-right-3 hover:bg-white transition-colors"
                  onClick={() => removeFile(file.name)}
                >
                  <XMarkIcon className="w-5 h-5 fill-black dark:fill-white hover:fill-secondary-400 transition-colors" />
                </button> */}
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            <section className="mt-10">
              <h2 className="text-base text-center md:text-left text-black dark:text-white font-semibold mb-4">
                Preview NFT
              </h2>

              <ul className="grid grid-cols-1 ">
                <li
                  key={"preview"}
                  className="relative aspect-auto w-60 rounded-2xl border-2 border-black dark:border-white"
                >
                  <div className="p-4">
                    <Image
                      src={preview}
                      alt={"preview"}
                      className="h-full w-96 object-contain rounded-xl"
                    />
                    <div>
                      <div className="my-2">
                        <p className=" text-neutral-500 text-[14px] font-medium text-left">
                          Pink Ocean
                        </p>
                        <p className=" text-neutral-500 text-[14px] font-medium text-left">
                          0.08 ETH 1/20
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        {" "}
                        <span className="text-purple-500 text-xs font-medium text-left">
                          Pinky Ocean
                        </span>
                        <span className="">
                          <div className="flex flex-row gap-x-2 justify-center items-center">
                            <span className="text-xs">21</span>
                            <span>
                              <i
                                className={
                                  liked
                                    ? "fa-solid fa-heart cursor-pointer text-red-600"
                                    : "fa-regular fa-heart cursor-pointer"
                                }
                                onClick={() => isLiked(!liked)}
                              ></i>
                            </span>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <button
              type="button"
              className="w-7 h-7 border border-secondary-400 bg-secondary-400 rounded-full flex justify-center items-center absolute -top-3 right-3 md:-right-3 hover:bg-white transition-colors"
              onClick={() => removeFile(file.name)}
            >
              <XMarkIcon className="w-5 h-5 fill-black dark:fill-white hover:fill-secondary-400 transition-colors" />
            </button> */}
                </li>
              </ul>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default Dropzone;
