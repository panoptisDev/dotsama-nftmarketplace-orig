"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import { ArrowUpTrayIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Dropzone = ({ className }: any) => {
  const [files, setFiles] = useState<any[]>([]);
  const [rejected, setRejected] = useState<any[]>([]);

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
    <div className="">
      <div
        {...getRootProps({
          className: className,
        })}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-4 w-5/6 md:w-1/2 justify-center rounded-lg border border-dashed border-black py-10">
          <ArrowUpTrayIcon className="w-5 h-5 fill-current" />
          {isDragActive ? (
            <p className="text-center px-3">Drop the files here ...</p>
          ) : (
            <p className="text-center px-3">
              Drag & drop files here, or click to select files
            </p>
          )}
        </div>
      </div>
      {files.length > 0 && (
        <section className="mt-10">
          <div className="flex gap-4 justify-center">
            <h2 className="title text-3xl font-semibold text-center">
              Preview
            </h2>
            <button
              type="button"
              onClick={removeAll}
              className="mt-1 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-secondary-400 rounded-md px-3 "
            >
              Remove all files
            </button>
          </div>

          {/* Accepted files */}

          <h3 className="title text-lg font-semibold text-neutral-600 mt-10 border-b pb-3 text-center">
            Files
          </h3>

          <ul className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 px-0 lg:px-48">
            {files.map((file) => (
              <li
                key={file.name}
                className="relative h-32 rounded-md shadow-lg"
              >
                <Image
                  src={file.preview}
                  alt={file.name}
                  width={100}
                  height={100}
                  onLoad={() => {
                    URL.revokeObjectURL(file.preview);
                  }}
                  className="h-full w-full object-contain rounded-md"
                />
                <button
                  type="button"
                  className="w-7 h-7 border border-secondary-400 bg-secondary-400 rounded-full flex justify-center items-center absolute -top-3 right-3 md:-right-3 hover:bg-white transition-colors"
                  onClick={() => removeFile(file.name)}
                >
                  <XMarkIcon className="w-5 h-5 fill-black dark:fill-white hover:fill-secondary-400 transition-colors" />
                </button>
                <p className="mt-2 text-neutral-500 text-[12px] font-medium text-center">
                  {file.name}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default Dropzone;
