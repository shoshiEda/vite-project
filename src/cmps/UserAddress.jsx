/* eslint-disable react/prop-types */

function UserAddress({address,setOpenAdress}){
    

    return(
        <section className="adress" onClick={(e)=>{e.stopPropagation();setOpenAdress(false)}}>
            street:<input className="address-input" type="text" value={address.street}/>
            <br/>
            city:<input className="address-input" type="text" value={address.city}  />
            <br/>
            zip code:<input className="address-input" type="text" value={address.zipcode} />

        </section>
    )
}

export default UserAddress