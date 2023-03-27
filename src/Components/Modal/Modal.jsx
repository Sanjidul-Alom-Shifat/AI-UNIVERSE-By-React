import React from 'react';

const Modal = (props) => {
    const { image_link, description, integrations, features } = props.singleData;
    console.log(integrations)
    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card lg:card-side bg-base-100 shadow-xl w-full">
                        <div className="card-body w-full lg:w-2/4">
                            <h5 className="card-title">{description ? description : "No Data Found"}</h5>
                            <div className='flex justify-between'>
                                <div>
                                    <h4 className='text-xl font-semibold'>Features</h4>
                                    {
                                        Object.values(features || {}).map((value, index) => (
                                            <p> {index + 1}. {value.feature_name ? value.feature_name : "No Data Found"}</p>
                                        ))
                                    }
                                </div>
                                <div>
                                    <h4 className='text-xl font-semibold'>Integrations</h4>
                                    {
                                        integrations &&
                                        integrations.map((integration, index) => (
                                            <p>{index + 1}. {integration ? integration : "No Data Found"}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <figure>
                            <img className='w-full h-64' src={image_link && image_link[0]} alt="Album" />
                        </figure>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;