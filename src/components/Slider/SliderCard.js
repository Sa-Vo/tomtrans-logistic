import React from 'react';

class SliderCard extends React.Component {
    render() {
        const { data } = this.props;
        const size = {
            length: 'Довжина',
            width: 'Ширина',
            height: 'Висота',
        };
        return (
            <>
                {data.map((item, idx) => (
                    <div className="card" key={idx}>
                        <div>
                            <img src={item.image} alt="" />
                        </div>

                        <div>
                            <h5>{item.title}</h5>
                            <p>{item.textOne}</p>
                            <p>{item.textTwo}</p>
                            <div>
                                <div>
                                    <p>{size.length}</p>
                                    <p>{item.widthInfo}</p>
                                </div>

                                <div>
                                    <p>{size.width}</p>
                                    <p>{item.lengthInfo}</p>
                                </div>

                                <div>
                                    <p>{size.height}</p>
                                    <p>{item.heightInfo}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        );
    }
}

export default SliderCard;
