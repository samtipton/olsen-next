"use client";

import React from "react";
import { useFormState } from "react-dom";
import { addSermon } from "./addSermon.logic";

const initialState = {
  message: null,
  errors: [],
};

const AddSermonForm = () => {
  const [state, formAction] = useFormState(addSermon, initialState);
  return (
    <form className="flex flex-col" action={formAction}>
      <label className="text-lg" htmlFor="title">
        Sermon Title
      </label>
      <input
        id="title"
        name="title"
        className="w-72 leading-7"
        type="text"
        required
      />
      <label className="text-lg mt-2" htmlFor="author">
        Speaker
      </label>
      <input
        className="w-72 leading-7"
        id="author"
        name="author"
        type="text"
        required
      />
      <div className="flex mt-4">
        <label className="text-lg" htmlFor="month">
          Month
        </label>
        <input className="w-24" id="month" name="month" type="text" required />

        <label className="text-lg" htmlFor="day">
          Day
        </label>
        <input className="w-24" id="day" name="day" type="text" required />

        <label className="text-lg" htmlFor="year">
          Year
        </label>
        <input className="w-24" id="year" name="year" type="text" required />
      </div>
      <label className="text-lg mt-4">Service Time</label>
      <select
        name="serviceTime"
        className="select-sm select-bordered w-32 w-min-xs bg-white"
      >
        <option>9:00 a.m.</option>
        <option>10:30 a.m.</option>
      </select>

      <div className="text-lg mt-2"></div>
      <label className="text-lg" htmlFor="videoUrl">
        Video Link
      </label>
      <input
        className="w-72 leading-7"
        id="videoUrl"
        name="videoUrl"
        type="text"
      />
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text text-lg">Sermon Audio</span>
          <span className="label-text-alt">mp3</span>
        </label>
        <input
          id="sermonAudio"
          name="sermonAudio"
          type="file"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          accept=".mp3"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text text-lg">Presentation File</span>
          <span className="label-text-alt">ppt/pptx</span>
        </label>
        <input
          id="sermonPresentation"
          name="sermonPresentation"
          type="file"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          accept=".ppt,.pptx"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text text-lg">Sermon Outline</span>
        </label>
        <input
          id="sermonOutline"
          name="sermonOutline"
          type="file"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          accept=".mp3"
        />
      </div>
      <button
        type="submit"
        className="btn mt-4 bg-gradient-to-r from-primary to-pink-500 hover:from-pink-500 hover:to-yellow-500 shadow-xl"
      >
        Add Sermon
      </button>
      {state?.message && <div>{state.message}</div>}
    </form>
  );
};

const AddSermonPage = () => {
  return (
    <div className="p-4">
      <div className="card bg-neutral-200 shadow-xl p-4">
        <AddSermonForm />
      </div>
    </div>
  );
};

export default AddSermonPage;
