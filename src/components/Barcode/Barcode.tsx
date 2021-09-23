import { IBarcodeProp } from '@interfaces/Barcode/barcode.prop';
import React, { FC } from 'react';

import { useBarcode } from 'react-barcodes';

const Barcode: FC<IBarcodeProp> = (props) => {
    const { inputRef } = useBarcode(
        props,
    );

    return <svg ref={inputRef} />;
};

export default Barcode;
