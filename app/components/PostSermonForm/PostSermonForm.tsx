"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useCallback, useState } from "react";
import { postSermon } from "./postSermon.logic";
import { z } from "zod";
import { useDropzone } from "react-dropzone";
import classNames from "classnames";

const postSermonClientSchema = z.object({
  author: z.string().min(1),
  title: z.string().min(1),
  month: z.string().min(1),
  day: z.string().min(1),
  year: z.string().length(4),
  serviceTime: z.string(),
  videoUrl: z.string().min(1),
  sermonAudio: z.custom<File>(),
  sermonPresentation: z.custom<File>(),
  sermonOutline: z.custom<File>(),
});

type PostSermonClientSchema = z.infer<typeof postSermonClientSchema>;
export const PostSermonForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [presentationFile, setPresentationFile] = useState<File | null>(null);
  const [outlineFile, setOutlineFile] = useState<File | null>(null);

  if (error) {
    console.error(error);
  }

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PostSermonClientSchema>({
    resolver: zodResolver(postSermonClientSchema),
    // defaultValues: {
    //   author: "Austin Byers",
    //   title: "The Family of God",
    //   month: "1",
    //   day: "14",
    //   year: "2024",
    //   serviceTime: "10:30 a.m.",
    //   videoUrl: "https://vimeo.com/903170990",
    // },
  });

  const onDropSermonAudio = useCallback(
    (acceptedFiles: File[]) => {
      setValue("sermonAudio", acceptedFiles[0], { shouldValidate: true });
      setAudioFile(acceptedFiles[0]);
    },
    [setValue]
  );

  const onDropSermonPresentation = useCallback(
    (acceptedFiles: File[]) => {
      setValue("sermonPresentation", acceptedFiles[0], {
        shouldValidate: true,
      });
      setPresentationFile(acceptedFiles[0]);
    },
    [setValue]
  );

  const onDropSermonOutline = useCallback(
    (acceptedFiles: File[]) => {
      setValue("sermonOutline", acceptedFiles[0], { shouldValidate: true });
      setOutlineFile(acceptedFiles[0]);
    },
    [setValue]
  );

  const {
    getRootProps: getRootPropsAudio,
    getInputProps: getInputPropsAudio,
    isFocused: isFocusedAudio,
    isDragAccept: isDragAcceptAudio,
    isDragReject: isDragRejectAudio,
  } = useDropzone({ onDrop: onDropSermonAudio, maxFiles: 1 });

  const {
    getRootProps: getRootPropsPresentation,
    getInputProps: getInputPropsPresentation,
    isFocused: isFocusedPresentation,
    isDragAccept: isDragAcceptPresentation,
    isDragReject: isDragRejectPresentation,
  } = useDropzone({ onDrop: onDropSermonPresentation, maxFiles: 1 });
  if (Object.keys(errors).length > 0) {
    console.error(errors);
  }

  const {
    getRootProps: getRootPropsOutline,
    getInputProps: getInputPropsOutline,
    isFocused: isFocusedOutline,
    isDragAccept: isDragAcceptOutline,
    isDragReject: isDragRejectOutline,
  } = useDropzone({ onDrop: onDropSermonOutline, maxFiles: 1 });

  const onSubmit: SubmitHandler<PostSermonClientSchema> = async (
    data: PostSermonClientSchema
  ) => {
    console.log(data);
    const fd = new FormData();
    fd.append("title", data.title);
    fd.append("author", data.author);
    fd.append("month", data.month);
    fd.append("day", data.day);
    fd.append("year", data.year);
    fd.append("serviceTime", data.serviceTime);
    fd.append("videoUrl", data.videoUrl);

    if (data.sermonAudio) {
      fd.append("sermonAudio", data.sermonAudio as File);
    }
    if (data.sermonPresentation) {
      fd.append("sermonPresentation", data.sermonPresentation as File);
    }
    if (data.sermonOutline) {
      fd.append("sermonOutline", data.sermonOutline as File);
    }

    const response = await postSermon(fd);

    if (response.message === "success") {
      setShowSuccess(true);
    } else {
      setError(response?.errors || "");
    }
  };

  return (
    <>
      {showSuccess && (
        <div className="toast toast-top toast-center text-center bg-green-600 w-full drop-shadow-lg rounded-md">
          <div className="relative inline-block h-full text-white text-lg">
            {`Successfully added ${getValues("title")}`}
            <div
              className="absolute -bottom-[40%] ml-24 non-italic btn btn-ghost self-center text-sm text-white"
              onClick={() => {
                reset();
                setShowSuccess(false);
                setError("");
                setAudioFile(null);
                setPresentationFile(null);
                setOutlineFile(null);
              }}
            >
              Add another?
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="toast toast-top toast-center text-center bg-red-500 w-full drop-shadow-lg rounded-md">
          <div className="relative inline-block h-full text-white text-lg">
            {`Unable to add ${getValues(
              "title"
            )}. Please try again. See console for errors.`}
          </div>
        </div>
      )}
      <form
        encType="multipart/form-data"
        className="flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="text-lg" htmlFor="title">
          Sermon Title
        </label>
        <input
          {...register("title")}
          className="w-72 leading-7"
          type="text"
          required
        />
        <label className="text-lg mt-2" htmlFor="author">
          Speaker
        </label>
        <input
          {...register("author")}
          className="w-72 leading-7"
          type="text"
          required
        />
        <div className="flex mt-4">
          <label className="text-lg" htmlFor="month">
            Month
          </label>
          <input {...register("month")} className="w-24" type="text" required />

          <label className="text-lg" htmlFor="day">
            Day
          </label>
          <input {...register("day")} className="w-24" type="text" required />

          <label className="text-lg" htmlFor="year">
            Year
          </label>
          <input {...register("year")} className="w-24" type="text" required />
        </div>
        <label className="text-lg mt-4">Service Time</label>
        <select
          {...register("serviceTime")}
          className="select-sm select-bordered w-32 w-min-xs bg-white"
        >
          <option value={"9:00 a.m."}>9:00 a.m.</option>
          <option value="10:30 a.m.">10:30 a.m.</option>
        </select>

        <div className="text-lg mt-2"></div>
        <label className="text-lg">Video Url</label>
        <input
          className="w-72 leading-7"
          {...register("videoUrl")}
          type="text"
        />

        <div
          className={classNames(
            "flex flex-col mt-2 items-center p-5 border-2 rounded-md border-dashed bg-[#fafafa] outline-none ease-in-out duration-300",
            !isDragAcceptAudio && "border-slate-400",
            isDragAcceptAudio && "border-primary"
          )}
          {...getRootPropsAudio()}
        >
          <input
            type="custom"
            {...getInputPropsAudio()}
            {...register("sermonAudio")}
          />
          {!audioFile && <p>Sermon Audio mp3</p>}
          {audioFile && (
            <div key={audioFile.name}>
              {audioFile.name} ({(audioFile.size / 1_000_000).toFixed(2)} MB)
            </div>
          )}
        </div>

        <div
          className={classNames(
            "flex flex-col mt-2 items-center p-5 border-2 rounded-md border-dashed bg-[#fafafa] outline-none ease-in-out duration-300",
            !isDragAcceptPresentation && "border-slate-400",
            isDragAcceptPresentation && "border-primary"
          )}
          {...getRootPropsPresentation()}
        >
          <input
            type="custom"
            {...getInputPropsPresentation()}
            {...register("sermonPresentation")}
          />
          {!presentationFile && <p>Sermon Presentation (ppt/pptx)</p>}
          {presentationFile && (
            <div key={presentationFile.name}>
              {presentationFile.name} (
              {(presentationFile.size / 1_000_000).toFixed(2)} MB)
            </div>
          )}
        </div>

        <div
          className={classNames(
            "flex flex-col mt-2 items-center p-5 border-2 rounded-md border-dashed bg-[#fafafa] outline-none ease-in-out duration-300",
            !isDragAcceptOutline && "border-slate-400",
            isDragAcceptOutline && "border-primary"
          )}
          {...getRootPropsOutline()}
        >
          <input
            type="custom"
            {...getInputPropsOutline()}
            {...register("sermonOutline")}
          />
          {!outlineFile && <p>Sermon Outline file</p>}
          {outlineFile && (
            <div key={outlineFile.name}>
              {outlineFile.name} ({(outlineFile.size / 1_000_000).toFixed(2)}{" "}
              MB)
            </div>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="text-center light-50 btn mt-4 bg-gradient-to-r from-primary to-pink-500 hover:from-pink-500 hover:to-yellow-500 shadow-xl"
        >
          <div className="relative inline-block">
            Add Sermon
            {isSubmitting && (
              <div className="absolute ml-4 loading loading-dots loading-sm" />
            )}
          </div>
        </button>
      </form>
    </>
  );
};
