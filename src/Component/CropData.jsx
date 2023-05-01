const CropData = ({info}) => { /* a function that takes data stored in info and map accordingly */
    return(
        <>

        {
            info.map((curInfo) =>{
                const {id, name, region, temperature, climate, soilquantity, rainamount, diseases, nutrients, fertilizers, pesticides } = curInfo; /* data like name,region etc is imported from info */

                return(
                    <tr key={id}>
                        <td>{name}</td>  {/* data stored in table accordingly */}
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

export default CropData; /* file is exported */