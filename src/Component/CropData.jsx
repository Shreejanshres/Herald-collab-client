const CropData = ({info}) => {
    return(
        <>

        {
            info.map((curInfo) =>{
                const {id, name, region, temperature, climate, soilquantity, rainamount, diseases, nutrients, fertilizers, pesticides } = curInfo;

                return(
                    <tr key={id}>
                        <td>{name}</td>
                        <td>{region}</td>
                        <td>{temperature}</td>
                        <td>{climate}</td>
                        <td>{soilquantity}</td>
                        <td>{rainamount}</td>
                        <td>{diseases}</td>
                        <td>{nutrients}</td>
                        <td>{fertilizers}</td>
                        <td>{pesticides}</td>
                    </tr>
                )
            })
        }
        
        
        </>
    )
}

export default CropData;