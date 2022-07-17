import React from "react";

const Core = () => {
    return (
        <div className="px-2 py-1 md:px-4 md:py-2 bg-base-200">
            <h1 className="text-right uppercase text-lg">Core</h1>

            <div className="divider my-1">Data</div>
            <input
                type="text"
                placeholder="Job"
                className="input input-bordered w-full my-2"
            />
            <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full my-2"
            />
            <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full my-2"
            />

            <div className="divider mt-3">Text</div>
            <div className="grid grid-rows-1 md:grid-cols-3 gap-3 mb-3">
                <input
                    type="text"
                    placeholder="Grettings"
                    className="input input-bordered w-full"
                />
                <input
                    type="text"
                    placeholder="Intro"
                    className="input input-bordered w-full"
                />
                <input
                    type="text"
                    placeholder="PreTitle"
                    className="input input-bordered w-full"
                />
            </div>

            <button className="btn btn-primary rounded-md block w-full md:inline-block md:ml-auto">
                Submit
            </button>
        </div>
    );
};

export default Core;
