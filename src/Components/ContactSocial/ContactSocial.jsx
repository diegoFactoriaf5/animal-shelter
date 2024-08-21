import React from 'react'
import Title from '../TextComponents/Title/Title'
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import StainTitle from "../TextComponents/StainTitle/StainTitle"

export default function ContactSocial() {
    
    return (
        <div className="flex flex-col items-center mt-16 w-4/5  md:w-3/5 mx-auto mb-[20vh]">
            <Title title="Contacto" hidden="hidden"/>
            <StainTitle  hidden="hidden"/>
            <h3 className="text-[2rem] mt-7 text-center">
                <span className="text-[#FFDE59] font-bold">Contactate</span> con nosotros a través de nuestras redes sociales.
            </h3>
            <div className="flex justify-center flex-wrap mt-10 gap-14">
                <a
                    href="https://www.facebook.com/?stype=lo&deoia=1&jlou=AffmM9xzIURyrSNjIn0intFGIud4As_JxTc2HDNV2mQ5rrhu1p_NKDTxV3G_EoSOSPm4fGYN87xe_bxg92ZwaAyZ&smuh=12552&lh=Ac89rzujiRB8rVPDrq8"
                    target="_blank"
                    rel="noopener noreferrer" >
                    <Card
                        className="mt-6 h-60 w-72 rounded-none rounded-tr-3xl rounded-bl-3xl border-solid border-2 border-[#51C8FC] cursor-pointer hover:border-[#FFDD59] hover:shadow-lg hover:translate-y-1 hover:transition-all duration-300"
                        title="Ir a Facebook"
                    >
                        <CardBody>
                            <Typography variant="h3" color="black" className="mb-2 text-center">
                                Facebook
                            </Typography>
                        </CardBody>
                        <BsFacebook className="text-[7vh] text-black mx-auto" />
                    </Card>
                </a>
                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Card
                        className="mt-6 h-60 w-72 rounded-none rounded-tr-3xl rounded-bl-3xl border-solid border-2 border-[#51C8FC] cursor-pointer hover:border-[#FFDD59] hover:shadow-lg hover:translate-y-1 hover:transition-all duration-300"
                        title="Ir a Instagram"
                    >
                        <CardBody>
                            <Typography variant="h3" color="black" className="mb-2 text-center">
                                Instagram
                            </Typography>
                        </CardBody>
                        <BsInstagram className="text-[7vh] text-black mx-auto" />
                    </Card>
                </a>
                <a
                    href="https://api.whatsapp.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Card
                        className="mt-6 h-60 w-72 rounded-none rounded-tr-3xl rounded-bl-3xl border-solid border-2 border-[#51C8FC] cursor-pointer hover:border-[#FFDD59] hover:shadow-lg hover:translate-y-1 hover:transition-all duration-300"
                        title="Ir a WhatsApp"
                    >
                        <CardBody>
                            <Typography variant="h3" color="black" className="mb-2 text-center">
                                WhatsApp
                            </Typography>
                        </CardBody>
                        <BsWhatsapp className="text-[7vh] text-black mx-auto" />
                    </Card>
                </a>
            </div>
        </div>

    )
}
