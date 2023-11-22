import React from "react";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">Create Post </span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing promt with th world and let your imagination
        run wild with AI-powered platform
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>

          <textarea
            className="form_textarea"
            required
            value={post.prompt}
            placeholder="Write your prompt here"
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag {` `}
            <span className=" text-blue-600 text-sm font-normal">
              (#product, #web, #idea)
            </span>
          </span>

          <input
            className="form_input"
            required
            value={post.tag}
            placeholder="#tag"
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <line href="/" className="text-gray-500 text-sm">
            {" "}
            Cancel
          </line>
          <button
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            disabled={submitting}
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
