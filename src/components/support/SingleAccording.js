import React from 'react';

const SingleAccording = ({number,condition = false,showClass,title}) => {
    return (
        <>
            <div className="accordion-item border-0">
                <h2 className="accordion-header" id={`heading${number}`}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${number}`} aria-expanded={condition} aria-controls={`collapse${number}`}>
                        {title}
                    </button>
                </h2>
                <div id={`collapse${number}`} className={showClass} aria-labelledby={`heading${number}`} data-bs-parent="#sale-accordion">
                    <div className="accordion-body">
                        <p>{`Sadece bir lira aman tanrım yönetici harika şemsiye kahrolası arkadaş bir fincan çay şerefe bu yemek aleni bazı şüpheli çav william lanet olası efendim benimle alakası yok arıların dizleri baloncuk ve gıcırtı.`}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleAccording;