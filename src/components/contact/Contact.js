import { Button } from "@material-ui/core";
import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="my-container pb-10 bg-dark">
            <h2 className="section-heading-white">Contact</h2>
            <div className="flex flex-col items-center">
                <p className="text-primary font-medium text-lg text-center py-10">Have a question or want to work together?</p>
                <form action="mailto:ivelinivanov1999@gmail.com?subject=myform_submission" method="post" encType="text/plain" className="space-y-2 w-full sm:w-2/3 xl:w-1/2">
                    <div>
                        <input id="name" name="name" type="text" required maxLength="50" className="appearance-none rounded-lg relative block w-full px-3 py-2 bg-dark-gray placeholder-gray-500 text-white text-base font-medium border border-transparent focus:outline-none focus:ring-primary focus:border-primary focus:z-10" placeholder="Name" />
                    </div>
                    <div>
                        <input id="email" name="email" type="email" maxLength="100" autoComplete="email" required className="appearance-none rounded-lg relative block w-full px-3 py-2 bg-dark-gray placeholder-gray-500 text-white text-base font-medium border border-transparent focus:outline-none focus:ring-primary focus:border-primary focus:z-10" placeholder="Enter Email" />
                    </div>
                    <div>
                        <textarea id="email" name="email" required maxLength="500" className="appearance-none rounded-lg relative block w-full px-3 py-2 bg-dark-gray placeholder-gray-500 text-white text-base font-medium border border-transparent focus:outline-none focus:ring-primary focus:border-primary focus:z-10" rows="5" placeholder="Your Message"></textarea>
                    </div>
                    <Button type="submit" variant="outlined" size="large" style={{ color: "#fff", borderColor: "#fff", marginTop: "1rem" }} className="btn-home">
                        Submit
                    </Button>
                </form>
            </div>
        </section>
    );
}
