import React from "react";
import ModalBottomSheet from "@/Components/ModalBottomSheet";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

import Core from "./Core";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";

const Portfolio = (props) => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [modalState, setModalState] = React.useState(null);

    const handleChangeState = (type) => {
        if (type === "core") setModalState("core");
        if (type === "about") setModalState("about");
        if (type === "projects") setModalState("projects");
        if (type === "skills") setModalState("skills");

        setModalOpen(true);
    };

    const handleOnDismiss = () => {
        setModalState(null);
        setModalOpen(false);
    };

    return (
        <>
            <Authenticated
                auth={props.auth}
                errors={props.errors}
                header={
                    <h2 className="font-semibold text-xl leading-tight">
                        Portfolio
                    </h2>
                }
            >
                <Head title="Portfolio" />

                {/* <div className="fixed bottom-3 left-1/3 md:bottom-1/2 md:left-10 z-50 btn-group rounded-md md:btn-group-vertical">
                    <button className="btn btn-active btn-sm text-sm">B</button>
                    <button className="btn btn-sm text-sm">a</button>
                    <button className="btn btn-sm text-sm">c</button>
                </div> */}

                <div className="container mx-auto px-5 md:p-7">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        {/* Core */}
                        <div className="card w-auto bg-base-100 shadow-xl image-full">
                            <figure>
                                <img
                                    src="https://placeimg.com/400/225/arch"
                                    alt="Shoes"
                                    className="absolute w-full"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Core</h2>
                                <p>Core Description</p>
                                <div className="card-actions justify-end">
                                    <button
                                        className="btn btn-sm btn-primary"
                                        onClick={() =>
                                            handleChangeState("core")
                                        }
                                    >
                                        Get
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* About */}
                        <div className="card w-auto bg-base-100 shadow-xl image-full">
                            <figure>
                                <img
                                    src="https://placeimg.com/400/225/arch"
                                    alt="Shoes"
                                    className="absolute w-full"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">About</h2>
                                <p>About my self Description</p>
                                <div className="card-actions justify-end">
                                    <button
                                        className="btn btn-sm btn-primary"
                                        onClick={() =>
                                            handleChangeState("about")
                                        }
                                    >
                                        Get
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* projects */}
                        <div className="card w-auto bg-base-100 shadow-xl image-full">
                            <figure>
                                <img
                                    src="https://placeimg.com/400/225/arch"
                                    alt="Shoes"
                                    className="absolute w-full"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Projects</h2>
                                <p>List of projects</p>
                                <div className="card-actions justify-end">
                                    <button
                                        className="btn btn-sm btn-primary"
                                        onClick={() =>
                                            handleChangeState("projects")
                                        }
                                    >
                                        Get
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="card w-auto bg-base-100 shadow-xl image-full">
                            <figure>
                                <img
                                    src="https://placeimg.com/400/225/arch"
                                    alt="Shoes"
                                    className="absolute w-full"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Skills</h2>
                                <p>List of skills</p>
                                <div className="card-actions justify-end">
                                    <button
                                        className="btn btn-sm btn-primary"
                                        onClick={() =>
                                            handleChangeState("skills")
                                        }
                                    >
                                        Get
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Authenticated>

            <ModalBottomSheet
                open={modalOpen}
                onDismiss={handleOnDismiss}
                height={modalState === "core" ? 0.58 : null}
            >
                {modalState === "core" ? (
                    <Core />
                ) : modalState === "about" ? (
                    <About />
                ) : modalState === "projects" ? (
                    <Projects />
                ) : modalState === "skills" ? (
                    <Skills />
                ) : null}
            </ModalBottomSheet>
        </>
    );
};

export default Portfolio;
