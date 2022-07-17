import React from "react";
import { useFormik } from "formik";
import techicons from "@/Data/techicons";

const About = () => {
    const formik = useFormik({
        initialValues: {
            firstdescription: "",
            workskills: [],
            techs: [],
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    // Workskills Logic
    const handleAddWorkSkills = () => {
        formik.setFieldValue("workskills", [...formik.values.workskills, ""]);
        console.log(formik.values.workskills);
    };
    const handleChangeWorkSkill = (index, value) => {
        formik.setFieldValue(
            "workskills",
            formik.values.workskills?.map((workskill, i) =>
                i === index ? value : workskill
            )
        );
    };

    // tech
    const handleAddTechs = () => {
        formik.setFieldValue("techs", [...formik.values.techs, ""]);
        console.log(formik.values.techs);
    };
    const handleChangeTech = (index, value) => {
        formik.setFieldValue(
            "techs",
            formik.values.techs?.map((workskill, i) =>
                i === index ? value : workskill
            )
        );
    };

    return (
        <div className="px-2 py-1 md:px-4 md:py-2">
            <form onSubmit={formik.handleSubmit}>
                <h1 className="text-right italic text-lg">About</h1>
                <input
                    name="firstdescription"
                    id="firstdescription"
                    value={formik.values.firstdescription}
                    onChange={formik.handleChange}
                    type="text"
                    placeholder="First Description"
                    className="input input-bordered w-full my-2"
                />

                {/* Workskills */}
                <div className="divider mt-5">Work skills</div>
                {formik.values.workskills?.map((workskill, index) => (
                    <input
                        key={index}
                        name="workskill"
                        id="workskill"
                        value={workskill}
                        onChange={(val) =>
                            handleChangeWorkSkill(index, val.target.value)
                        }
                        type="text"
                        placeholder={`Skill ${index + 1}`}
                        className="input input-bordered w-full my-1"
                    />
                ))}
                <div
                    className="tooltip my-2.5 flex justify-center align-middle"
                    data-tip="Add Skills"
                >
                    <button
                        type="button"
                        className="btn btn-primary btn-sm rounded-full"
                        onClick={() => handleAddWorkSkills()}
                    >
                        +
                    </button>
                </div>

                {/* Techs */}
                <div className="divider mt-5">Tech Used</div>
                {formik.values.techs?.map((tech, index) => (
                    <div className="grid grid-rows-1 md:grid-cols-3 gap-2 my-3">
                        <select className="select select-bordered w-full my-1">
                            {techicons.map((icon) => (
                                <option key={icon.title} value={icon.title}>
                                    <img src={icon.icon} /> {icon.title}
                                </option>
                            ))}
                        </select>
                        <input
                            key={index}
                            name="tech"
                            id="tech"
                            value={tech}
                            onChange={(val) =>
                                handleChangeTech(index, val.target.value)
                            }
                            type="text"
                            placeholder={`Tech ${index + 1}`}
                            className="input input-bordered w-full my-1"
                        />
                    </div>
                ))}
                <div
                    className="tooltip my-2.5 flex justify-center align-middle"
                    data-tip="Add Skills"
                >
                    <button
                        type="button"
                        className="btn btn-primary btn-sm rounded-full"
                        onClick={() => handleAddTechs()}
                    >
                        +
                    </button>
                </div>

                <div className="block">
                    <button type="submit" className="btn btn-primary btn-sm">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default About;
