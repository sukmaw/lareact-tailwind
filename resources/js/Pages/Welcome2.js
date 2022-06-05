import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Button from "@/Components/Button";

export default function Welcome(props) {
    return (
        <>
            <Head title="Learn Tailwindcss" />
            <div className="p-8">
                <h1 className="text-3xl font-bold underline">
                    UtilityFirst Fundamental
                </h1>
                <h2 className="m-4 ml-0">Chat Component</h2>
                <div className="p-6 max-w-sm bg-white rounded-xl shadow-lg flex items-center space-x-4">
                    <div className="shrink-0">
                        <ApplicationLogo className="h-12 w-12" />
                    </div>
                    <div>
                        <div className="text-xl font-medium text-black">
                            ChitChat
                        </div>
                        <p className="text-slate-500">You have new message</p>
                    </div>
                </div>
                <br />
                <h2>Card Message</h2>
                <div className="py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                    <ApplicationLogo className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" />
                    <div className="text-center space-y-2 sm:text-left">
                        <div className="space-y-0.5">
                            <p className="text-lg text-black font-semibold">
                                Erin Lindford
                            </p>
                            <p className="text-slate-500 font-medium">
                                Product Engineer
                            </p>
                        </div>
                        <Button className="rounded-full">Message</Button>
                    </div>
                </div>
                <h1 className="font-bold text-3xl underline mt-4 mb-2">
                    Psuedo Classes
                </h1>
                <div className="container">
                    <button className="bg-sky-500 hover:bg-sky-700 rounded-3xl text-xl font-bold text-white px-8 py-2">
                        Save changes
                    </button>
                </div>
            </div>
        </>
    );
}
