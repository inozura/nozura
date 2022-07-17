import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="card w-full bg-base shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">You're logged in!</h2>
                    <button className="btn btn-primary">Button</button>
                </div>
            </div>
            <div className="card w-full bg-base shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">You're logged in!</h2>
                    <button className="btn btn-primary">Button</button>
                </div>
            </div>
            <div className="card w-full bg-base shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">You're logged in!</h2>
                    <button className="btn btn-primary">Button</button>
                </div>
            </div>
            <div className="card w-full bg-base shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">You're logged in!</h2>
                    <button className="btn btn-primary">Button</button>
                </div>
            </div>
            <div className="card w-full bg-base shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">You're logged in!</h2>
                    <button className="btn btn-primary">Button</button>
                </div>
            </div>
            <div className="card w-full bg-base shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">You're logged in!</h2>
                    <button className="btn btn-primary">Button</button>
                </div>
            </div>
            <div className="card w-full bg-base shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">You're logged in!</h2>
                    <button className="btn btn-primary">Button</button>
                </div>
            </div>
        </Authenticated>
    );
}
