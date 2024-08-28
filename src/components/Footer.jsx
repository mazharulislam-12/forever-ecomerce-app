import { assets } from "../assets/assets";

const Footer = () => {
    return (
        <>

            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 mt-40 text-sm text-center mb-10">
                    <div>
                        <img src={assets.logo} className="mb-5 w-32 mx-auto" alt="" />
                        <p>Thank you for visiting Your Company Name. We are committed to providing top-notch products and exceptional customer service. For questions or support, please reach out to us at support@yourcompany.com. Follow us on social media for updates and special offers. © 2024 Your Company Name. All rights reserved.</p>
                    </div>
                    <div>
                        <p className="text-xl font-medium mb-5">COMPANY</p>
                        <ul className="flex flex-col gap-1 text-gray-600">
                            <li>Home</li>
                            <li>Aout</li>
                            <li>Delivary</li>
                            <li>Privacy policy</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                        <ul className="flex flex-col gap-1 text-gray-600">
                            <li>+881621342194</li>
                            <li>mazharulislam5795@gmail.com</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div>
                <hr />
                <p className="py-5 text-sm text-center ">Copyright 2024@ mazharul - All Right Reserved.</p>
            </div>
        </>
    );
};

export default Footer;
