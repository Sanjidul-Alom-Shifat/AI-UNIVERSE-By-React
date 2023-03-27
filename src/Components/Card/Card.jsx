import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SingleData from '../SingleData/SingleData';

const Card = () => {

    const [data, setData] = useState([]); // show data from api
    const [singleData, setSingleData] = useState({}); //
    const [showAll, setShowAll] = useState(false); //slicing the data
    const [uniqueId, setUniqueId] = useState(null); // call id of api data

    // show 12 data by clicking see more button
    const HandleShowAllData = () => {
        setShowAll(true);
    }

    // sort data by date
    const handleSort = () => {
        const sortedData = data.sort((a, b) => {
            return new Date(b.published_in) - new Date(a.published_in);
        });
        setData([...data, sortedData]);
    };

    // modal part
    useEffect(() => {
        console.log("hello from useEffect");
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
            .then((res) => res.json())
            .then((data) => setSingleData(data.data));
    }, [uniqueId]);

    // for show all data
    useEffect(() => {
        const LoadData = async () => {
            const response = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
            const DataValue = await response.json();
            // console.log(DataValue.data.tools);
            setData(DataValue.data.tools);
        }
        LoadData();
    }, []);
    // for show all data

    return (
        <>
            <span onClick={handleSort}>
                <Button>Sort By Date</Button>
            </span>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-4 my-6'>
                {/* {
                    data.map((singleData) => {
                        // console.log(singleData);z
                        return <SingleData
                            singleData={singleData}
                        />
                    })
                } */}
                {
                    data.slice(0, showAll ? 12 : 6).map((singleData) =>
                        <SingleData
                            singleData={singleData}
                            key={singleData.id}
                            setUniqueId={setUniqueId}
                        />
                    )
                }
            </div>
            {
                !showAll && (
                    <span onClick={HandleShowAllData}>
                        <Button>See More</Button>
                    </span>
                )
            }
            <Modal singleData={singleData} />
        </>
    );
};

export default Card;