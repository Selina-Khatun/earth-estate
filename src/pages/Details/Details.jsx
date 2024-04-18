import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const Details = () => {
    const [card, setCard] = useState({})
    const { id } = useParams();
    const cards = useLoaderData();
    console.log('id', id);
    console.log('cards', cards);
    useEffect(() => {
        console.log('id:', id);
        console.log('cards:', cards);
        if (cards && id) {
            const findCard = cards.find(card => card.id === parseInt(id));
            console.log('findCard:', findCard);
            setCard(findCard);
        }
    }, [id, cards]);
    return (
        <div>
            <Helmet>
                <title>LANDMARKED ||Home</title>  
            </Helmet>
            <div className="font-[sans-serif] bg-cyan-800">
                <div className="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
                    <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                            <div className=" px-4 py-10 hover:scale-110 rounded-xl">
                                <img src={card.image} alt="Product" className="w-4/5 rounded object-cover" />
                            </div>

                        </div>
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-extrabold text-cyan-100">{card.estate_title} |{card.segment_name}</h2>
                            <div className="flex flex-wrap  gap-10 mt-4">
                                <p className="text-cyan-100 text-4xl font-bold">{card.price}</p>
                                <p className="mt-1 text-cyan-200">
                                    {card.area}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 mt-8">
                                <button type="button" className="min-w-[200px] px-4 py-3 bg-cyan-300 hover:text-cyan-100 text-black text-sm font-bold rounded">Buy now</button>
                                <button type="button" className="min-w-[200px] px-4 py-2.5 border border-cyan-300 bg-transparent text-cyan-300 text-sm font-bold rounded">Add to cart</button>
                            </div>
                            <div className="mt-8">
                                <h3 className="text-lg font-bold text-cyan-300">Facilities the Property</h3>
                                <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-cyan-100">
                                    {card.facilities && Object.keys(card.facilities).map((key, index) => (
                                        <li key={index}>{card.facilities[key]}</li>
                                    ))}
                                </ul>

                            </div>


                            <div className="mt-8">
                                <ul className="flex flex-wrap gap-10">
                                    <li className="text-cyan-200 font-bold text-sm bg-gray-800 py-3 px-8 border-b-2 border-cyan-300 cursor-pointer transition-all">
                                        {card.status}</li>
                                    <li className="text-cyan-100">  <p className="flex items-center text-cyan-200  gap-3"> <FaLocationDot />{card.location}</p></li>

                                </ul>
                                <div className="mt-8">
                                    <h3 className="text-lg font-bold text-cyan-300">Description</h3>
                                    <div className="space-y-3 mt-4">
                                        <p className="text-cyan-100">{card.description}</p>
                                    </div>
                                </div>

                                <button type="button" className="w-full mt-8 px-4 py-2 bg-transparent border-2 border-cyan-300 text-cyan-300 font-bold rounded">Read all reviews</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;